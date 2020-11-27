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

  def insertOrUpdates(rows: Seq[MutationTableRow]) = {
    db.run(MutationTable ++= rows).map(_ => ())
  }

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

  def processSort(page: PageData) = {
    val sortfields = page.sort.getOrElse("id")
    sortfields
  }

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

  def function1(t: (String, String)) = {
    val k = MutationTable.filter(x => x.data +>> t._1 === t._2).length.result
    db.run(k)
  }

}
