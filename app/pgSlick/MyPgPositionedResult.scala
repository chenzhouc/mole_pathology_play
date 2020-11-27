package pgSlick

import org.postgresql.util.HStoreConverter
import play.api.libs.json.{JsNull, Json}
import slick.jdbc.PositionedResult

import scala.collection.JavaConverters._
import scala.reflect.runtime

/**
 * Created by yz on 22/6/2020
 */
object MyPgPositionedResult {

  implicit class PgHStorePositionedResult(r: PositionedResult) {
    def nextHStore() = nextHStoreOption().getOrElse(Map.empty)

    def nextHStoreOption() = r.nextStringOption().map { v =>
      HStoreConverter.fromString(v).asInstanceOf[java.util.Map[String, String]].asScala.toMap
    }
  }

  implicit class PgArrayPositionedResult(r: PositionedResult) {

    lazy val u = new runtime.JavaUniverse

    private var nextArrayConverters = Map.empty[String, PositionedResult => Option[Seq[_]]]

    def nextArray[T]()(implicit tpe: u.TypeTag[T]): Seq[T] = nextArrayOption[T]().getOrElse(Nil)

    def nextArrayOption[T]()(implicit ttag: u.TypeTag[T]): Option[Seq[T]] = {
      nextArrayConverters.get(u.typeOf[T].toString).map(_.apply(r))
        .getOrElse(simpleNextArray[T](r)).asInstanceOf[Option[Seq[T]]]
    }

    private def simpleNextArray[T](r: PositionedResult): Option[Seq[T]] = {
      val value = r.rs.getArray(r.skip.currentPos)
      if (r.rs.wasNull) None else Some(
        value.getArray.asInstanceOf[Array[Any]].toSeq.map(_.asInstanceOf[T]))
    }

  }

  implicit class PgJsonPositionedResult(r: PositionedResult) {
    def nextJson() = nextJsonOption().getOrElse(JsNull)
    def nextJsonOption() = r.nextStringOption().map(Json.parse)
  }



}
