package dao

import javax.inject.Inject
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile
import models.Tables._
import play.api.libs.json.JsValue
import tool.pojo.UserData
import utils.PageData

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{ExecutionContext, Future}


class UserDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {


  import profile.api._

  def selectByUserData(user: UserData): Future[Option[UserRow]] = {
    db.run(User.filter(x => x.username === user.name)
      .filter(_.password === user.password).result.headOption)
  }

  def addUser(row: UserRow) = {
    db.run(User += row)
  }

  // 查询当前用户信息
  def queryCondition(username: String) = {
    val q = User.filter(x => x.username === username)
    db.run(q.result)
  }

  //查询所有用户
  def queryAllUser(page: PageData) = {
    val order = page.order
    val limit = page.limit
    val offset = page.offset
    val data1 = if (order == "asc") User.sortBy(x => x.id.asc)
    else User.sortBy(x => x.id.desc)
    val count = data1.length.result
    val data2 = data1.drop(offset).take(limit).result
    val f = count.zip(data2)
    db.run(f)
  }

  def deleteUserById(id: Short) = {
    val f = User.filter(_.id === id).delete
    db.run(f)
  }

  def querySelectedColumnsOfUser(username: String) = {
    val f = User.filter(x => x.username === username).result.map(x => x.map(y => y.selectColumns))
    db.run(f)
  }

  def insertSelectedColumnsOfUser(username:String,user: UserRow) = {
    val q = User.filter(_.username === username).update(user)
    db.run(q)
  }

  def insertSelectedPatientColumnsOfUser(username:String,user: UserRow) = {
    val q = User.filter(_.username === username).update(user)
    db.run(q)
  }

  def insertSelectedSampleColumnsOfUser(username:String,user: UserRow) = {
    val q = User.filter(_.username === username).update(user)
    db.run(q)
  }

  def queryUserById(id: Short) = {
    val f = User.filter(_.id === id).result.head
    db.run(f)
  }

  def querySelectedPatientColumnsOfUser(username: String) = {
    val q = User.filter(_.username === username).result.map(x => x.map(y => y.selectPatientColumns))
    db.run(q)
  }

  def querySelectedSampleColumnsOfUser(username: String) = {
    val q = User.filter(_.username === username).result.map(x => x.map(y => y.selectSampleColumns))
    db.run(q)
  }

}