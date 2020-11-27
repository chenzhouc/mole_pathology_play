package dao

import javax.inject.Inject
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile
import models.Tables._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{ExecutionContext, Future}


class AccountDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {
  import profile.api._


  def update(row: AccountRow): Future[Unit] = {
    db.run(Account.filter(_.id === row.id).update(row)).map(_ => ())
  }


  def selectById1: Future[AccountRow] = db.run(Account.result.head)


}