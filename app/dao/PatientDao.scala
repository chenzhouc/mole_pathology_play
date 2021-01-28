package dao

import models.Tables.{Patient, PatientRow, Sample, SampleRow}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.libs.json.{JsObject, JsValue, Json}
import slick.driver.JdbcProfile
import slick.jdbc.JdbcProfile
import utils.PageData
import utils.Utils.{processSection, processSort}

import javax.inject.Inject
import scala.concurrent.ExecutionContext.Implicits.global

class PatientDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  // 插入病人信息
  def insertPatientTables(rows: Seq[PatientRow]) = {
    db.run(Patient ++= rows).map(_ => ())
  }

  def queryAll() = {
    db.run(Patient.result)
  }

  def queryAll(page: PageData) = {
    val value = processSection(page)
    val sortfields = processSort(page)
    val order = page.order
    val filterData = if (page.search == None || page.search.get == "{}") Patient
    else
      Patient.filter { y =>
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

  def deleteUserById(list:List[String]) = {
        val newlist = list.map(x => x.toInt)
        val q = Patient.filter(_.id.inSetBind(newlist))
        val action = q.delete
        db.run(action)
  }

  //查询一条数据 提供表头信息
  def queryHeadOfPatientTable = {
    db.run(Patient.result.head)
  }

  def insertOrUpdate(rows: Seq[PatientRow]) = {
    val action = {
      val patientIds = rows.map(_.patientid)
      val delete = Patient.filter(_.patientid.inSetBind(patientIds)).delete
      val insert = Patient ++= rows
      delete.flatMap(_ => insert)
    }.transactionally
    db.run(action).map(_ => ())
  }
}
