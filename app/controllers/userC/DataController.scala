package controllers.userC

import dao.{AccountDao, UserDao, mutationDao}
import javax.inject.Inject
import play.api.libs.json.{JsObject, JsValue, Json, __}
import play.api.mvc.Results.Ok
import play.api.mvc.{AbstractController, ControllerComponents}
import tool.{FormTool, Tool}
import utils.TableUtils.{mutationRow, pageForm}
import utils.{TableUtils, Utils}

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
      val t = value.as[JsObject].fields.map(x => x._2).map(x => ((x \ "field").as[JsValue], (x \ "data").as[JsValue])).map {
        case (x, y) => {
          val x1 = x.toString()
          val x2 = y.toString()
          (x1.substring(1, x1.length - 1), x2.substring(1, x2.length - 1))
        }
      }.toList
      val keys = value.as[JsObject].fields.map(x => x._1)
      val resF = mutationDao.queryKeywords(t)
      val zips = resF.map(v => v.zip(keys))
      val totalF = mutationDao.queryTotal()
      totalF.flatMap(x => zips.map(y =>
        Ok(Json.obj("total" -> x, "linerData" -> y.map { case (a, name) =>
          Json.obj("name" -> name, "y" -> a)
        }))))

  }


}




