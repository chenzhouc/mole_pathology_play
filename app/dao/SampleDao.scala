package dao

import models.Tables.{Patient, Sample, SampleRow}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile
import tool.ParseToolForExactQuery.parse
import utils.PageData
import utils.Utils.{processSection, processSort}

import javax.inject.Inject
import scala.concurrent.ExecutionContext.Implicits.global

class SampleDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  def insertSampleTable(rows: Seq[SampleRow]) = {
    db.run(Sample ++= rows).map(_ => ())
  }

  def queryAll() = {
    db.run(Sample.result)
  }


  def queryAll(page: PageData) = {
    val value = processSection(page)
    val sortfields = processSort(page)
    val order = page.order
    val filterData = if (page.search == None || page.search.get == "{}") Sample
    else
      Sample.filter { y =>
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


  def deleteUserById(list:List[String]) = {
      val newlist = list.map(x => x.toInt)
      val q = Sample.filter(_.id.inSet(newlist))
      val action = q.delete
      db.run(action)
  }

  //查询一条数据 提供表头信息
  def queryHeadOfSample = {
    db.run(Sample.result.head)
  }

  def insertOrUpdate(rows:Seq[SampleRow]) = {
    val action = {
      val sampleIds = rows.map(_.sampleid)
      val delete = Sample.filter(_.sampleid.inSetBind(sampleIds)).delete
      val insert = Sample ++= rows
      delete.flatMap(_ => insert)
    }.transactionally
    db.run(action)
  }

  def queryDistinctSample(rows: Seq[SampleRow]) = {
    val sampleIds = rows.map(_.sampleid)
    val f = Sample.filter(_.sampleid.inSetBind(sampleIds)).result
    db.run(f)
  }
}
