package utils

import com.github.tminglei.slickpg._
import pgSlick.MyPgHStoreSupport
import play.api.libs.json.{JsValue, Json}
import slick.basic.Capability
import slick.driver.JdbcProfile
import slick.jdbc.JdbcType

/**
 * Created by yz on 19/6/2020
 */
trait MyPostgresProfile extends ExPostgresProfile
  with PgArraySupport
  with PgDate2Support
  with PgRangeSupport
  with MyPgHStoreSupport
  with PgPlayJsonSupport
  with PgSearchSupport
  with PgPostGISSupport
  with PgNetSupport
  with PgLTreeSupport {
  def pgjson = "jsonb" // jsonb support is in postgres 9.4.0 onward; for 9.3.x use "json"

  // Add back `capabilities.insertOrUpdate` to enable native `upsert` support; for postgres 9.5+
  override protected def computeCapabilities: Set[Capability] =
    super.computeCapabilities + JdbcProfile.capabilities.insertOrUpdate

  override val api = MyAPI

  object MyAPI extends API with ArrayImplicits
    with DateTimeImplicits
    with JsonImplicits
    with NetImplicits
    with LTreeImplicits
    with RangeImplicits
    with HStoreImplicits
    with SearchImplicits
    with SearchAssistants {
    implicit val strListTypeMapper = new SimpleArrayJdbcType[String]("text").to(_.toList)
    implicit val playJsonArrayTypeMapper =
      new AdvancedArrayJdbcType[JsValue](pgjson,
        (s) => utils.SimpleArrayUtils.fromString[JsValue](Json.parse(_))(s).orNull,
        (v) => utils.SimpleArrayUtils.mkString[JsValue](_.toString())(v)
      ).to(_.toList)

    implicit def mySimpleArrayColumnExtensionMethods[B1, SEQ[B1]](c: Rep[SEQ[B1]])(
      implicit tm: JdbcType[B1], tm1: JdbcType[SEQ[B1]]) = {
      new MyArrayColumnExtensionMethods[B1, SEQ, SEQ[B1]](c)
    }

  }

}

object MyPostgresProfile extends MyPostgresProfile
