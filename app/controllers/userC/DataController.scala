package controllers.userC

import dao.{AccountDao, UserDao, mutationDao}
import play.api.libs.json

import javax.inject.Inject
import play.api.libs.json.{JsObject, JsValue, Json, __}
import play.api.mvc.Results.Ok
import play.api.mvc.{AbstractController, ControllerComponents}
import tool.{FormTool, Tool}
import utils.TableUtils.{mutationRow, pageForm}
import utils.{TableUtils, Utils}

import scala.collection.mutable
import scala.concurrent.{Await, ExecutionContext, Future}
import scala.concurrent.duration.Duration


/**
 * Created by yz on 21/7/2020
 */
class DataController @Inject()(cc: ControllerComponents)(
  implicit val userDao: UserDao,
  implicit val accountDao: AccountDao,
  implicit val mutationDao: mutationDao,
  exec: ExecutionContext
) extends AbstractController(cc) {

  def viewBefore = Action { implicit request =>
    Ok(views.html.user.data.view())
  }

  def searchBefore = Action { implicit request =>
    Ok(views.html.user.data.search())
  }

  def getMutationData = Action { implicit request =>
    val page = pageForm.bindFromRequest.get
    val time = System.currentTimeMillis()
    println("1:" + Utils.getTime(time))
    val data = Await.result(mutationDao.queryAll(), Duration.Inf)
    println("2:" + Utils.getTime(time))

    val data2 = data.map { y =>
      y.data.as[JsObject] ++ Json.obj("sample_id" -> y.sampleBarcode, "id" -> y.id)
    }
    println("3:" + Utils.getTime(time))

    val orderX = TableUtils.dealJsonDataByPage(data2, page)

    println("4:" + Utils.getTime(time))

    val total = orderX.size
    val tmpX = orderX.slice(page.offset, page.offset + page.limit)
    val json = tmpX
    Ok(Json.obj("rows" -> json, "total" -> total))
  }

  def getMutationTable = Action.async {
    implicit request =>

      val page = pageForm.bindFromRequest.get

      mutationDao.queryAll(page).map { case (size, x) =>
        val json = x.map { y =>
          y.data.as[JsObject] ++ Json.obj("sample_id" -> y.sampleBarcode, "id" -> y.id)
        }
        Ok(Json.obj("rows" -> json, "total" -> size))
      }
  }

  def draw = Action.async {
    implicit request =>
      val json = request.body.asFormUrlEncoded.head.keys.head
      val value = Json.parse(json)

      //需要对start_position和end_position单独处理  判断data是否是{min:xxx,max:xxx}的格式
      val t = value.as[JsObject].fields.map(x => x._2).map(x => ((x \ "field").as[JsValue], (x \ "data").as[JsValue])).map {
        case (x, y) => {
          //分情况讨论data的值 分为能解析min和max 和不能 两种情况

          val booleanresult = (y \ "min").isDefined && (y \ "max").isDefined
          if (booleanresult == true) {
            val x1 = x.toString()
            val num1 = (y \ "min").as[JsValue].toString()
            val num2 = (y \ "max").as[JsValue].toString()
            val x2 = List(num1.substring(1, num1.length - 1), num2.substring(1, num2.length - 1)) //"1","999999"
            (x1, x2)
          } else {
            val x1 = x.toString()
            val x2 = y.toString()
            val res = (x1.substring(1, x1.length - 1), List(x2.substring(1, x2.length - 1)))
            res
          }
        }
      }.toList

      val intersection = mutationDao.queryintersection(t)
      val keys = value.as[JsObject].fields.map(x => x._1)
      val newkeys = keys.:+("intersection")
      val resF = mutationDao.queryKeywords(t)
      val resFF = resF.zipWith(intersection)((resF, intersection) => resF :+ intersection)
      val zips = resFF.map(v => v.zip(newkeys))
      val totalF = mutationDao.queryTotal()
      totalF.flatMap(x => zips.map(y =>
        Ok(Json.obj("total" -> x, "linerData" -> y.map { case (a, name) =>
          Json.obj("name" -> name, "y" -> a)
        }))))

  }

  def draw2() = Action {
    implicit request =>
      val value = request.body.asJson.get
      var param = (value \ "param").as[JsValue].toString()
      param = param.substring(1, param.length - 1)


      val a = value \\ "field"
      val b = value \\ "data"
      val seq1 = a.map(x => x.toString())
      val seq2 = b.map(x => {
        if ((x \ "min").isDefined) {
          List((x \ "min").as[JsValue].toString, (x \ "max").as[JsValue].toString)
        } else {
          List(x.toString())
        }
      })
      val seq = seq1.zip(seq2).toList
      val t = seq.map {
        //  case (x, y) => (x.substring(1, x.length - 1), y.substring(1, y.length - 1))
        case (x, y) => {
          if (y.length == 1) {
            val str = y(0)
            (x.substring(1, x.length - 1), List(str.substring(1, str.length - 1)))
          } else {
            val min = y(0).substring(1, y(0).length - 1)
            val max = y(1).substring(1, y(1).length - 1)
            (x.substring(1, x.length - 1), List(min, max))
          }
        }
      }
      val res = Await.result(mutationDao.queryintersectionData(t, param), Duration.Inf)
      val res2 = computeTop10(res)
      Ok(Json.obj("Result" -> res2.map {
        case (x, y) => Json.obj("name" -> x, "y" -> y)
      }))
  }

  def computeTop10(list: Seq[String]) = {
    val total = list.length
    val hashMap = new mutable.HashMap[String, Int]()
    list.foreach(x => {
      if (!hashMap.contains(x)) {
        hashMap.put(x, 1)
      } else {
        val count = hashMap.get(x).get
        hashMap.put(x, count + 1)
      }
    })
    val result = hashMap.toList.sortBy(-_._2).take(10).map(x => (x._1, (x._2.toDouble * 100 / total).formatted("%.2f")))
    var others = 0.0
    result.foreach(x => {
      others += x._2.toDouble
    })
    if (others < 0) {
      others = others.ceil
    } else {
      others = (100 - others).floor
    }

    val newResult = if (others == 0) {
      result.map(x => (x._1, x._2.toDouble))
    } else {
      (result ::: List(("others", others.toString))).map(x => (x._1, x._2.toDouble))
    }
    newResult
  }

  def computeDistribution(list: Seq[String]) = {
    val total = list.length
    val hashMap = new mutable.HashMap[String, Int]()
    list.foreach(x => {
      if (!hashMap.contains(x)) {
        hashMap.put(x, 1)
      } else {
        val count = hashMap.get(x).get
        hashMap.put(x, count + 1)
      }
    })
    val result = hashMap.toList.sortBy(-_._2).map(x => (x._1, (x._2.toDouble * 100 / total).formatted("%.2f"))).map(x => (x._1, x._2 + "%"))
    result
  }


  def makeTable2 = Action {
    implicit request =>
      val value = request.body.asJson.get
      var param = (value \ "param").as[JsValue].toString()
      param = param.substring(1, param.length - 1)
      val a = value \\ "field"
      val b = value \\ "data"
      val seq1 = a.map(x => x.toString())
      val seq2 = b.map(x => {
        if ((x \ "min").isDefined) {
          List((x \ "min").as[JsValue].toString, (x \ "max").as[JsValue].toString)
        } else {
          List(x.toString())
        }
      })
      val seq = seq1.zip(seq2).toList
      val t = seq.map {
        //  case (x, y) => (x.substring(1, x.length - 1), y.substring(1, y.length - 1))
        case (x, y) => {
          if (y.length == 1) {
            val str = y(0)
            (x.substring(1, x.length - 1), List(str.substring(1, str.length - 1)))
          } else {
            val min = y(0).substring(1, y(0).length - 1)
            val max = y(1).substring(1, y(1).length - 1)
            (x.substring(1, x.length - 1), List(min, max))
          }
        }
      }
      val res = Await.result(mutationDao.queryintersectionData(t, param), Duration.Inf)
      val res2 = computeDistribution(res)

      Ok(Json.obj("Result" -> res2.map {
        case (x, y) => Json.obj("name" -> x, "y" -> y)
      }))
  }

}




