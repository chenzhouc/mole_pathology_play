package dao

import models.Tables._
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile

import javax.inject.Inject

class kitDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  def queryMutationKit() = {
    db.run(Kit.filter(x => x.`type` === "mutation").result)
  }

  def insertKit(row: Seq[KitRow]) = {
    db.run(Kit ++= row)
  }

  //查询mutationKit
  def queryKit() = {
    val f = Kit.filter(x => x.`type` === "mutation").result
    db.run(f)
  }

  def queryPatientKit = {
    val f = Kit.filter(x => x.`type` === "patient").result
    db.run(f)
  }

  def querySampleKit = {
    val f = Kit.filter(x => x.`type` === "sample").result
    db.run(f)
  }

  def queryMutationNoNGSKit = {
    val f = Kit.filter(x => x.`type` === "mutationNoNGS").result
    db.run(f)
  }

  //根据试剂盒的名字查询内容
  def querykitByName(param: String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "mutation").result
    db.run(f)
  }

  def queryPatientkitByName(param: String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "patient").result
    db.run(f)
  }


  def querySamplekitByName(param: String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "sample").result
    db.run(f)
  }

  def queryMutationNoNGSkitByName(param: String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "mutationNoNGS").result
    db.run(f)
  }

  // 查询patient表的配置名称的数量
  def queryPatientKitNumberByName(param : String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "patient").length.result
    db.run(f)
  }

  // 查询sample表的配置名称的数量
  def querySampleKitNumberByName(param : String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "sample").length.result
    db.run(f)
  }

  def queryMutationKitNumberByName(param : String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "mutation").length.result
    db.run(f)
  }

  def queryMutationNoNGSNumberByName(param : String) = {
    val f = Kit.filter(x => x.data +>> "name" === param && x.`type` === "mutationNoNGS").length.result
    db.run(f)
  }

  //根据id删除mutationtable里的数据
  def deleteKitById(list: List[String]) = {
    val newlist = list.map(x => x)
    //Kit.filter(_.data +>> "name" )
    val q = Kit.filter(_.data +>> "name" inSetBind (newlist)).filter(_.`type` === "mutation")
    val action = q.delete
    db.run(action)
  }

  def deletePatientKitById(list: List[String]) = {
    val newlist = list.map(x => x)
    val q = Kit.filter(_.data +>> "name" inSetBind(newlist)).filter(_.`type` === "patient")
    val action = q.delete
    db.run(action)
  }

  def deleteSampleKitById(list: List[String]) = {
    val newlist = list.map(x => x)
    val q = Kit.filter(_.data +>> "name" inSetBind(newlist)).filter(_.`type` === "sample")
    val action = q.delete
    db.run(action)
  }

  def deleteMutationNoNGSKitById(list: List[String]) = {
    val newlist = list.map(x => x)
    val q = Kit.filter(_.data +>> "name" inSetBind(newlist)).filter(_.`type` === "mutationNoNGS")
    val action = q.delete
    db.run(action)
  }

}
