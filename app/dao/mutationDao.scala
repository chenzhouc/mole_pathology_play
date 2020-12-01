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

  //处理前端提交的page里的search字段
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

  //处理前端提交的page里的sort（顺序or逆序）
  def processSort(page: PageData) = {
    val sortfields = page.sort.getOrElse("id")
    sortfields
  }

  //
  def queryAll() = db.run(MutationTable.result)

  def queryAll(page: PageData) = {
    val value = processSearch(page)
    val sortfields = processSort(page)
    val order = page.order
    val filterData = if (page.search == None || page.search.get == "{}") MutationTable
    else
      MutationTable.filter { y =>
        val bs = value.map(x => {
          val rs = y.data +>> (x._1)
          y.data +>> (x._1) === x._2
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

  def queryKeywords(reses: Seq[(String, String)]) = {

    val fs = reses.map { res =>
      MutationTable.filter(x => x.data +>> res._1 === res._2).length.result
    }
    val seq = DBIO.sequence(fs).transactionally
    db.run(seq)
  }

  //查询各个满足各个筛选条件的交集的数量
  def queryintersection(res: Seq[(String, String)]) = {
    val finaldata = MutationTable.filter {
      y => {
        val bs = res.map(x => {
          y.data +>> x._1 === x._2
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

  //查询交集的数据
  def queryintersectionData(res: Seq[(String, String)], param: String) = {
    val data = MutationTable.filter {
      y => {
        val bs = res.map(x => {
          y.data +>> x._1 === x._2
        })
        bs.reduce((x, y) => x && y)
      }
    }
    val result = data.map{
      x => x.data +>> param
    }.result
    db.run(result)
  }
}
