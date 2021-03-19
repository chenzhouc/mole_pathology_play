package dao

import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile
import models.Tables._

import javax.inject.Inject

class AliasDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {
    import profile.api._

  def insert(rows: List[AliasRow]) = {
    db.run(Alias ++= rows)
  }

  def queryAll() = {
    db.run(Alias.result)
  }

  def queryMutationAlias = {
    val f = Alias.filter(x => x.`type` === "mutation").result
    db.run(f)
  }

  def queryPatientAlias = {
    val f = Alias.filter(x => x.`type` === "patient").result
    db.run(f)
  }

  def querySampleAlias = {
    val f = Alias.filter(x => x.`type` === "sample").result
    db.run(f)
  }

  def queryMutationNoNGSAlias = {
    val f = Alias.filter(x => x.`type` === "mutationNoNGS").result
    db.run(f)
  }

  def deleteMutationAliasById(ids: Array[Int]) = {
    val f = Alias.filter(x => x.id inSetBind(ids)).delete
    db.run(f)
  }

}
