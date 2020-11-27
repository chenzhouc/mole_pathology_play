package utils

import java.lang.reflect.Field

import config.MyRow
import models.Tables.MutationTableRow
import play.api.data.Form
import play.api.data.Forms._
import play.api.libs.json.JsObject

case class PageData(limit: Int, offset: Int, order: String, search: Option[String], sort: Option[String])

object TableUtils extends MyRow {


  var mutationRow: Seq[Map[String,String]] = Seq()

  var chrRow: Seq[String] = Seq()

  var searchSeq: Seq[(Int, String)] = Seq()


  val pageForm = Form(
    mapping(
      "limit" -> number,
      "offset" -> number,
      "order" -> text,
      "search" -> optional(text),
      "sort" -> optional(text)
    )(PageData.apply)(PageData.unapply)
  )


  def dealMapDataByPage(x: Seq[Map[String, String]], page: PageData): Seq[Map[String, String]] = {
    val searchX = page.search match {
      case None => x
      case Some(y) =>
        val json = Utils.jsonToMap(y).map { q =>
          (q._1, q._2.asInstanceOf[Map[String, String]])
        }

        x.filter { m =>
          json.forall { case (k, v) =>
            v("searchType") match {
              case "num" =>
                val dataMap = v("data").asInstanceOf[Map[String, String]]
                try {
                  val existMin = dataMap("min").toDoubleOption.nonEmpty
                  val existMax = dataMap("max").toDoubleOption.nonEmpty
                  if (existMin && existMax) {
                    m(k).toDouble >= dataMap("min").toDouble && m(k).toDouble <= dataMap("max").toDouble
                  } else if (existMin && !existMax) {
                    m(k).toDouble >= dataMap("min").toDouble
                  } else if (!existMin && existMax) {
                    m(k).toDouble <= dataMap("max").toDouble
                  } else {
                    false
                  }
                } catch {
                  case e: Exception => false
                }
              case "date" =>
                val dataMap = v("data").asInstanceOf[Map[String, String]]
                val existMin = dataMap("min")
                val existMax = dataMap("max")
                if (existMax != "" && existMin != "") {
                  m(k) >= existMin && m(k) < existMax
                } else if (existMax == "" && existMin != "") {
                  m(k) >= existMin
                } else if (existMax != "" && existMin == "") {
                  m(k) < existMax
                } else {
                  true
                }
              case "radio" => m(k) == v("data")
              case "checkbox" =>
                val dataArray = v("data").asInstanceOf[List[String]]
                dataArray.indexOf(m(k)) != -1
              case "text" =>
               v("data").split(" ").forall(t=> m(k).toUpperCase().indexOf(t.toUpperCase()) != -1)
            }
          }
        }
    }


    val sortX = page.sort match {
      case None => searchX
      case Some(y) =>
        val values = searchX.map(_ (y))
        val b = values.take(1000).forall { value =>
          Utils.isDouble(value)
        }
        if (b) {
          searchX.sortBy(_ (y).toDouble)
        } else {
          searchX.sortBy {
            _ (y)
          }
        }
    }
    val orderX = page.order match {
      case "asc" => sortX
      case "desc" => sortX.reverse
    }
    orderX
  }

  def dealJsonDataByPage(x: Seq[JsObject], page: PageData) = {
    val searchX = page.search match {
      case None => x
      case Some(y) =>
        val json = Utils.jsonToMap(y).map { q =>
          (q._1, q._2.asInstanceOf[Map[String, String]])
        }

        x.filter { m =>
          json.forall { case (k, v) =>
            v("searchType") match {
              case "num" =>
                val dataMap = v("data").asInstanceOf[Map[String, String]]
                try {
                  val existMin = dataMap("min").toDoubleOption.nonEmpty
                  val existMax = dataMap("max").toDoubleOption.nonEmpty
                  if (existMin && existMax) {
                    (m \ k).as[Double] >= dataMap("min").toDouble && (m \ k).as[Double] <= dataMap("max").toDouble
                  } else if (existMin && !existMax) {
                    (m \ k).as[Double] >= dataMap("min").toDouble
                  } else if (!existMin && existMax) {
                    (m \ k).as[Double] <= dataMap("max").toDouble
                  } else {
                    false
                  }
                } catch {
                  case e: Exception => false
                }
              case "date" =>
                val dataMap = v("data").asInstanceOf[Map[String, String]]
                val existMin = dataMap("min")
                val existMax = dataMap("max")
                if (existMax != "" && existMin != "") {
                  (m \ k).as[String] >= existMin && (m \ k).as[String] < existMax
                } else if (existMax == "" && existMin != "") {
                  (m \ k).as[String] >= existMin
                } else if (existMax != "" && existMin == "") {
                  (m \ k).as[String] < existMax
                } else {
                  true
                }
              case "radio" => (m \ k).as[String] == v("data")
              case "checkbox" =>
                val dataArray = v("data").asInstanceOf[List[String]]
                dataArray.indexOf((m \ k).as[String]) != -1
              case "text" =>
                v("data").split(" ").forall(t=> (m \ k).as[String].toUpperCase().indexOf(t.toUpperCase()) != -1)
            }
          }
        }
    }


    val sortX = page.sort match {
      case None => searchX
      case Some(y) =>
        val values = searchX.map(json=>(json \ y).as[String])
        val b = values.take(1000).forall { value =>
          Utils.isDouble(value)
        }
        if (b) {
          searchX.sortBy(json=>(json \ y).as[Double])
        } else {
          searchX.sortBy {
            json=>(json \ y).as[String]
          }
        }
    }
    val orderX = page.order match {
      case "asc" => sortX
      case "desc" => sortX.reverse
    }
    orderX
  }

}


