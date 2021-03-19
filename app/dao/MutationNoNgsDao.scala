package dao

import javax.inject.Inject
import models.Tables.{MutationTable, MutationTableNongs, MutationTableNongsRow, MutationTableRow}
import play.api.db.DatabaseConfig
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.libs.json.JsValue.jsValueToJsLookup
import slick.driver.JdbcProfile
import slick.jdbc.JdbcProfile
import utils.PageData
import utils.MyPostgresProfile.api._
import play.api.libs.json._
import tool.ParseToolForExactQuery.parse
import utils.Utils._

import scala.concurrent.ExecutionContext.Implicits.global

class MutationNoNgsDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  def insert(rows: Seq[MutationTableNongsRow]) = {
    db.run(MutationTableNongs ++= rows).map(_ => ())
  }

  def queryAll() = {
    db.run(MutationTableNongs.result)
  }

  def queryAll(page: PageData) = {
    val value = processSection(page)
    val sortfields = processSort(page)
    val order = page.order
    val filterData = if (page.search == None || page.search.get == "{}") MutationTableNongs
    else
      MutationTableNongs.filter { y =>
        val bs = value.map(x => {
          //val rs = y.data +>> (x._1)
          if (x._2 == "text") {
            val fuzzy = x._3(0)
            val exact = x._3(1)
            val arrs = parse(exact).toList
            if(fuzzy == "") y.data +>> x._1 inSetBind(arrs)
            else (y.data +>> x._1 like s"%$fuzzy%")
          } else {
            var min: Long = 0
            var max: Long = 0
            try {
              min = x._3(0).toLong
              max = x._3(1).toLong
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


  def deleteUserById(list: List[String]) = {
    val newlist = list.map(x => x.toInt)
    val q = MutationTableNongs.filter(_.id.inSetBind(newlist))
    val action = q.delete
    db.run(action)
  }

  def queryHeadOfMutationNoNGS = {
    db.run(MutationTableNongs.result.head)
  }

  def insertOrUpdate(rows: Seq[MutationTableNongsRow]) = {
    val action = {
      val ids = rows.map(_.sampleId)
      val delete = MutationTableNongs.filter(_.sampleId.inSetBind(ids)).delete
      val insert = MutationTableNongs ++= rows
      delete.flatMap(_ => insert)
    }.transactionally
    db.run(action).map(_ => ())
  }

  def queryMutationNoNGSDistinct(rows: Seq[MutationTableNongsRow]) = {
    val ids = rows.map(_.sampleId.toString())
    val f = MutationTableNongs.filter(_.sampleId.inSetBind(ids)).result
    db.run(f)
  }
}
