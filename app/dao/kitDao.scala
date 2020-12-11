package dao

import models.Tables._
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile

import javax.inject.Inject

class kitDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {
  import profile.api._
  def insertKit(row: KitRow) = {
   db.run(Kit += row)
  }

  def queryKit() = {
    db.run(Kit.result)
  }
}
