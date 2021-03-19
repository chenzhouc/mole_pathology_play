package dao

import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile
import models.Tables.{Searchtype, SearchtypeRow}

import javax.inject.Inject

class SearchFieldDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import profile.api._

  def insert(rows: List[SearchtypeRow]) = {
    db.run(Searchtype ++= rows)
  }

  def queryAll() = {
    db.run(Searchtype.result)
  }

  def queryMutationSearchField = {
    val f = Searchtype.filter(x => x.tableNameX === "mutation").result
    db.run(f)
  }

  def queryMutationNoNGSSearchField = {
    val f = Searchtype.filter(x => x.tableNameX === "mutationNoNGS").result
    db.run(f)
  }

  def queryPatientSearchField = {
    val f = Searchtype.filter(x => x.tableNameX === "patient").result
    db.run(f)
  }

  def querySampleSearchField = {
    val f = Searchtype.filter(x => x.tableNameX === "sample").result
    db.run(f)
  }

  def deleteById(ids: Array[Int]) = {
    val f = Searchtype.filter(x => x.id inSetBind(ids)).delete
    db.run(f)
  }



}