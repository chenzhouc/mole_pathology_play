package implicits

import java.io.File
import com.github.tototoshi.csv._
import dao.AliasDao
import implicits.Implicits._
import org.apache.commons.lang3.StringUtils

import javax.inject.Inject
import scala.::
import scala.collection.immutable.SeqMap
import scala.collection.mutable

/**
 * Created by Administrator on 2019/9/12
 */
trait CSVTool {

  implicit class CSVFile(file: File) {

    def csvLines = {
      val reader = CSVReader.open(file)
      val lines = reader.all()
      reader.close()
      lines
    }
  }

  implicit class CSVLines(lines: List[List[String]]) {

    def toFile(file: File) = {
      val writer = CSVWriter.open(file)
      writer.writeAll(lines)
      writer.close()
    }

    def toTxtFile(file: File) = {
      lines.map(_.mkString("\t")).toFile(file)
    }

    def convertHeader(map: Map[String, String]) = {
      val newHeaders = lines.head.map { header =>
        map.getOrElse(header.toLowerCase, header)
      }
      newHeaders +: lines.drop(1)
    }

    def lineMap = {
      val headers = lines.head.toLowerCase
      lines.drop(1).map { columns =>
        headers.map(_.toLowerCase).zip(columns).toMap
      }
    }

    def lineMapNoLower = {
      //带有别名的 一行
      val headers = lines.head.toLowerCase
      lines.drop(1).map { tmpColumns =>
        val t = headers.map(x => x).zip(tmpColumns)
        val x = SeqMap.from(t)
        x
      }
    }

    def lineMapNoLower(data: Map[String,String]) = {
      //带有别名的 一行
      val map = data
      var headers = lines.head.toLowerCase
      headers = headers.map {
        x => {
          if (map.contains(x)) map(x).toLowerCase()
          else x
        }
      }
      val res = lines.drop(1).map { tmpColumns =>
        val t = headers.map(x => x).zip(tmpColumns)
        val x = SeqMap.from(t)
        x
      }
      println(res)
      res
    }


    def selectOneColumn(columnName: String) = {
      val maps = lineMap
      maps.map { map =>
        map(columnName.toLowerCase)
      }
    }

    def mapOtherByColumns[T](f: List[String] => T) = {
      lines.map { columns =>
        f(columns)
      }

    }

    def notEmptyLines = lines.filter(x => x.exists(y => StringUtils.isNotEmpty(y)))


  }


}
