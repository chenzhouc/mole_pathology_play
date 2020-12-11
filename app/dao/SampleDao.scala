package dao

import models.Tables.{Sample, SampleRow}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile

import javax.inject.Inject
import scala.concurrent.ExecutionContext.Implicits.global

class SampleDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends
  HasDatabaseConfigProvider[JdbcProfile] {

  import utils.MyPostgresProfile.api._

  def insertSampleTable(rows: Seq[SampleRow]) = {
    db.run(Sample ++= rows).map(_ => ())
  }
}
