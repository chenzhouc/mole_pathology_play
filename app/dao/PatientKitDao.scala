package dao

import models.Tables._
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile

import javax.inject.Inject

class PatientKitDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  def insertKit(row: Seq[PatientKitRow]) = {
    db.run(PatientKit ++= row)
  }

  def queryKit() = {
    db.run(PatientKit.result)
  }

  //根据试剂盒的名字查询内容
  def querykitByName(param: String) = {
    val f = PatientKit.filter(x => x.data +>> "name" === param).result
    db.run(f)
  }

  def queryKitNumberByName(param : String) = {
    val f = PatientKit.filter(x => x.data +>> "name" === param).length.result
    db.run(f)
  }
}
