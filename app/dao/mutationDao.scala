package dao

import javax.inject.Inject
import models.Tables.{MutationTable, MutationTableRow}
import play.api.db.DatabaseConfig
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.libs.json.JsValue.jsValueToJsLookup
import slick.driver.JdbcProfile
import slick.jdbc.JdbcProfile
import utils.PageData
import utils.MyPostgresProfile.api._
import play.api.libs.json._

import scala.concurrent.ExecutionContext.Implicits.global

class mutationDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  //插入表格，导入数据
  def insertOrUpdates(rows: Seq[MutationTableRow]) = {
    db.run(MutationTable ++= rows).map(_ => ())
  }

  //处理前端提交的page里的search字段(没有处理求区间的情况)
  def processSearch(page: PageData) = {
    val jsObject = Json.parse(page.search.getOrElse("{\"\":{\"field\":\"\",\"searchType\":\"text\",\"data\":\"\"}}"))
    val fields = jsObject.as[JsObject].fields.map(x => x._2)
    val value = fields.map(x => {
      val result = x \ "field"
      val str1 = result.as[String]
      val result2 = x \ "data"
      val str2 = result2.as[String]
      (str1, str2)
    })
    value
  }

  //  判断searchType 然后返回过滤条件 如果是num 返回(field,(min,max))  如果是text 返回(field,data)
  def processSection(page: PageData) = {
    val jsObject = Json.parse(page.search.getOrElse("{\"\":{\"field\":\"\",\"searchType\":\"text\",\"data\":\"\"}}"))
    val fields = jsObject.as[JsObject].fields.map(x => x._2)
    val value = fields.map(x => {
      val searchType = (x \ "searchType").as[String]
      if (searchType == "num") {

        val field = (x \ "field").as[String]
        val Jsobject2 = (x \ "data").as[JsValue]
        val min = (Jsobject2 \ "min").as[String]
        val max = (Jsobject2 \ "max").as[String]
        (field, List(min, max))
      } else {
        val field = (x \ "field").as[String]
        val data = (x \ "data").as[String]
        (field, List(data))
      }
    })
    value
  }

  //处理前端提交的page里的sort（顺序or逆序）
  def processSort(page: PageData) = {
    val sortfields = page.sort.getOrElse("id")
    sortfields
  }

  //
  def queryAll() = db.run(MutationTable.result)

  def queryAll(page: PageData) = {
    //val value = processSearch(page)
    val value = processSection(page)
    val sortfields = processSort(page)
    val order = page.order
    val filterData = if (page.search == None || page.search.get == "{}") MutationTable
    else
      MutationTable.filter { y =>
        val bs = value.map(x => {
          //val rs = y.data +>> (x._1)
          if (x._2.length == 1) {
            y.data +>> (x._1) === x._2(0)
          } else {
            var min: Long = 0
            var max: Long = 0
            try {
              min = x._2(0).toLong
              max = x._2(1).toLong
            } catch {
              case ex: NumberFormatException =>
                min = Long.MinValue
                max = Long.MaxValue
            }
            val rs = (y.data +>> x._1).asColumnOf[Long]
            rs > min && rs < max
          }
        })
        bs.reduce((x, y) => x && y)
      }
    val sortData = if (order == "desc") filterData.sortBy(x => x.data.+>>(sortfields).desc)
    else filterData.sortBy { x =>
      x.data.+>>(sortfields).asc
    }
    /* val xx = filterData.sortBy { x =>
      x.data.+>>(sortfields).desc
    }*/
    val finalData = sortData
    val countF = finalData.length.result
    //    val resultF = finalData.drop(page.offset).take(page.limit).result
    val resultF = finalData.map(_.id).drop(page.offset).take(page.limit).result.flatMap { ids =>
      finalData.filter(_.id.inSetBind(ids)).result
    }
    val f = countF.zip(resultF)
    db.run(f)
  }

  //查询数据库里数据的总数
  def queryTotal() = {
    db.run(MutationTable.length.result)
  }

  def queryKeywords(reses: Seq[(String, Seq[String])]) = {

    /*val fs = reses.map { res =>
      MutationTable.filter(x => x.data +>> res._1 === res._2).length.result
    }*/
    val fs = reses.map { res =>
      if (res._2.length == 1) {
        MutationTable.filter(x => x.data +>> res._1 === res._2(0)).length.result
      } else {
        MutationTable.filter { x =>
          //如果录入的最小值和最大值 不是数字或者是空 直接被catch到numberFormat异常，然后赋值最小值和最大值
          var min = 0.toLong
          var max = 0.toLong
          try {
            min = res._2(0).toLong
            max = res._2(1).toLong
          } catch {
            case ex: NumberFormatException =>
              min = Long.MinValue
              max = Long.MaxValue
          }
          val str = res._1.substring(1, res._1.length - 1)
          //如果start_position 是不是数字格式的常量 下一步会报错
          val rs = (x.data +>> str).asColumnOf[Long]
          val bool = ((rs > min) && (rs < max))
          bool

        }.length.result
      }
    }
    val seq = DBIO.sequence(fs).transactionally
    db.run(seq)
  }

  //查询各个满足各个筛选条件的交集的数量
  def queryintersection(res: Seq[(String, Seq[String])]) = {
    val finaldata = MutationTable.filter {
      y => {
        val bs = res.map(x => {
          //val rs = y.data +>> (x._1)
          if (x._2.length == 1) {
            y.data +>> (x._1) === x._2(0)
          } else {
            var min: Long = 0
            var max: Long = 0
            try {
              min = x._2(0).toLong
              max = x._2(1).toLong
            } catch {
              case ex: NumberFormatException =>
                min = Long.MinValue
                max = Long.MaxValue
            }
            val str = x._1.substring(1, x._1.length - 1)
            val rs = (y.data +>> str).asColumnOf[Long]
            rs > min && rs < max
          }
        })
        bs.reduce((x, y) => x && y)
      }
    }
    db.run(finaldata.length.result)
  }

  //查询单个列的筛选的个数
  def querySingleColumn(value: String) = {

    val result = MutationTable.map { x =>
      x.data +>> value
    }.result
    //      groupBy(x=>x).map{case(chr,xs)=>
    //      (chr,xs.size)
    //    }.sortBy(_._2.desc).take(10).
    db.run(result)
  }

  //查询交集的数据(表格)
 /* def queryintersectionData(res: Seq[(String, String)], param: String) = {
    val data = MutationTable.filter {
      y => {
        val bs = res.map(x => {
          y.data +>> x._1 === x._2
        })
        bs.reduce((x, y) => x && y)
      }
    }
    val result = data.map {
      x => x.data +>> param
    }.result
    db.run(result)
  }*/

  def queryintersectionData(res: Seq[(String, Seq[String])], param: String) = {
    val data = MutationTable.filter {
      y => {
        val bs = res.map(
          x => {
            if (x._2.length == 1) {
              y.data +>> x._1 === x._2(0)
            } else {
              val str = x._1
              var min: Long = 0
              var max: Long = 0
              try {
                min = x._2(0).toLong
                max = x._2(1).toLong
              } catch {
                case ex: NumberFormatException =>
                  min = Long.MinValue
                  max = Long.MaxValue
              }
              val value = (y.data +>> str).asColumnOf[Long]
              value > min && value < max
            }
          }
        )
        bs.reduce((x, y) => x && y)
      }
    }
    val result  = data.map{
      x => x.data +>> param
    }.result
    db.run(result)
  }

  // 根据sampleid 查询数据
  def queryByBarcode(barcode:String) = {
    db.run(MutationTable.filter(x => x.data +>> "tumor_sample_barcode" === barcode).result)
  }

  def queryByGeneName(Gene:String) = {
    db.run(MutationTable.filter(x => x.data +>> "hugo_symbol" === Gene).result)
  }
}
