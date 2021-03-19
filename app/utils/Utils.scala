package utils

import java.io.File
import implicits.Implicits.MyXlxsFile
import org.apache.commons.io.FileUtils
import play.api.libs.json.{JsObject, JsValue, Json}

import java.text.SimpleDateFormat
import java.util.Date
import scala.concurrent.{Await, Future}
import scala.concurrent.duration.Duration
import scala.util.parsing.json.JSON

object Utils {

  val dbName = "live_boost_database"
  val projectName = "live_boost"
  val idStr = "boost_id"
  val windowsPath = s"D:\\${dbName}"
  val playPath = new File("../").getAbsolutePath
  val linuxPath = playPath + s"/${dbName}"
  val isWindows = {
    if (new File(windowsPath).exists()) true else false
  }
  val errorClass = "error"
  val successClass = "text-success"

  val orthoMclStr = "orthoMcl"
  val mummerStr = "mummer"
  val ardbStr = "ardb"
  val cazyStr = "cazy"


  val path = {
    if (new File(windowsPath).exists()) windowsPath else linuxPath
  }
  val dataFile = new File(path, "data")
  val proteinDir = new File(dataFile, "protein")

  val binPath = new File(path, "bin")
  val anno = new File(binPath, "Anno")
  val orthoMcl = new File(binPath, "ORTHOMCLV1.4")
  val pipeLine = new File("/mnt/sdb/linait/pipeline/MicroGenome_pipeline/MicroGenome_pipeline_v3.0")
  val mummer = new File("/mnt/sdb/linait/tools/quickmerge/MUMmer3.23/")
  val blastFile = new File(binPath, "ncbi-blast-2.6.0+/bin/blastn")
  val blastpFile = new File(binPath, "ncbi-blast-2.6.0+/bin/blastp")
  val blastxFile = new File(binPath, "ncbi-blast-2.6.0+/bin/blastx")
  val blast2HtmlFile = new File(binPath, "blast2html-82b8c9722996/blast2html.py")
  val rPath = {
    val rPath = s"C:\\workspaceForIDEA\\live_boost_scala_js\\server\\rScripts"
    val linuxRPath = linuxPath + "/rScripts"
    val finalPath = if (new File(rPath).exists()) rPath else linuxRPath
    new File(finalPath)
  }
  val userDir = new File(path, "user")

  val windowsTestDir = new File("G:\\temp")
  val linuxTestDir = new File(playPath, "workspace")
  val testDir = if (windowsTestDir.exists()) windowsTestDir else linuxTestDir
  val dataDir = new File(path, "data")

  case class Sender(nick: String, host: String, email: String, password: String)

  def getInfoByXlsxFile(xlsxFile: File, sheetIndex: Int = 0) = {
    val lines = xlsxFile.xlsxLines(sheetIndex)
    getInfoByLines(lines)
  }

  def getInfoByLines(lines: List[List[String]]) = {
    val trueLines = lines.filter { x =>
      !x.head.startsWith("#")
    }
    val columnNames = trueLines.head
    val array = trueLines.drop(1).filter(x => x.size == columnNames.size).map { tmpColumns =>
      val columns = tmpColumns.map { x =>
        x.replaceAll("^\"", "").replaceAll("\"$", "")
      }
      columnNames.zip(columns).toMap
    }
    (columnNames, array)
  }

  def execFuture[T](f: Future[T]): T = {
    Await.result(f, Duration.Inf)
  }

  def jsonToMap(json: String) = {
    JSON.parseFull(json).get.asInstanceOf[Map[String, String]]
  }

  def isDouble(value: String): Boolean = {
    try {
      value.toDouble
    } catch {
      case _: Exception =>
        return false
    }
    true
  }

  def deleteDirectory(direcotry: File) = {
    try {
      FileUtils.deleteDirectory(direcotry)
    } catch {
      case _ =>
    }
  }

  def getTime(startTime: Long) = {
    val endTime = System.currentTimeMillis()
    (endTime - startTime) / 1000.0
  }


  //处理前端提交的page里的sort（顺序or逆序）
  def processSort(page: PageData) = {
    val sortfields = page.sort.getOrElse("id")
    sortfields
  }

  //处理前端提交的page里的search字段(没有处理求区间的情况)
  def processSearch(page: PageData) = {
    val jsObject = Json.parse(page.search.getOrElse("{\"\":{\"field\":\"\",\"searchType\":\"text\",\"data\":\"\"}}"))
    val fields = jsObject.as[JsObject].fields.map(x => x._2)
    val value = fields.map(x => {
      val result = x \ "field"
      val str1 = result.as[String]
      val result2 = x \ "data"
      val str2 = result2.as[String]
      (str1, str2)
    })
    value
  }


  //  判断searchType 然后返回过滤条件 如果是num 返回(field,(min,max))  如果是text 返回(field,data)
  def processSection(page: PageData) = {
    val jsObject = Json.parse(page.search.getOrElse("{\"\":{\"field\":\"\",\"searchType\":\"text\",\"data\":\"\"}}"))
    val fields = jsObject.as[JsObject].fields.map(x => x._2)
    val value = fields.map(x => {
      val searchType = (x \ "searchType").as[String]
      if (searchType == "num") {
        val field = (x \ "field").as[String]
        val searchType = (x \ "searchType").as[String]
        val Jsobject2 = (x \ "data").as[JsValue]
        val min = if((Jsobject2 \ "min").isDefined)   (Jsobject2 \ "min").as[String] else ""
        val max = if((Jsobject2 \ "max").isDefined)   (Jsobject2 \ "max").as[String] else ""
        (field, searchType, List(min, max))
      } else {
        val field = (x \ "field").as[String]
        val data = (x \ "data").as[JsValue]
        val exact = if((data \ "exact").isDefined) (data \ "exact").as[String] else ""
        val fuzzy = if((data \ "fuzzy").isDefined) (data \ "fuzzy").as[String] else ""
        (field, searchType, List(fuzzy, exact))
      }
    })
    value
  }
}
