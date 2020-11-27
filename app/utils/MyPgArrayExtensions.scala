package utils

import slick.ast.{Library, LiteralNode, TypedType}
import slick.ast.Library.{SqlFunction, SqlOperator}
import slick.lifted.{ExtensionMethods, FunctionSymbolExtensionMethods}
import slick.jdbc.{JdbcType, JdbcTypesComponent, PostgresProfile}

import utils.MyPostgresProfile.api._

object MyArrayLibrary {

  val ArrayDistinct = new SqlFunction("array_distinct")

}

class MyArrayColumnExtensionMethods[B0, SEQ[B0], P1](val c: Rep[P1])(
  implicit tm0: JdbcType[B0], tm: JdbcType[SEQ[B0]], tm1: JdbcType[List[String]]) extends ExtensionMethods[SEQ[B0], P1] {

  protected implicit def b1Type: TypedType[SEQ[B0]] = implicitly[TypedType[SEQ[B0]]]

  def arrayDistinct[R](implicit om: o#to[List[String], R]) = {
    om.column(MyArrayLibrary.ArrayDistinct, n)
  }

}


