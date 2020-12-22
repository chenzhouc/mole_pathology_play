package dao

import javax.inject.Inject
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile
import models.Tables._
import tool.pojo.UserData

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{ExecutionContext, Future}


class UserDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {
  import profile.api._

  def selectByUserData(user:UserData):Future[Option[UserRow]] = {
    db.run(User.filter(x => x.username === user.name)
    .filter(_.password === user.password).result.headOption)
  }



}