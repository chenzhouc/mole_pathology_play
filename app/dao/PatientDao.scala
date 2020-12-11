package dao

import models.Tables.{Patient, PatientRow, Sample, SampleRow}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.driver.JdbcProfile
import slick.jdbc.JdbcProfile

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

  def querySampleByPatientId(PatientId: String) = {
    val samples = Patient.joinLeft(Sample).on(_.patientid === _.patientid)
    db.run(samples.result)
  }
}
