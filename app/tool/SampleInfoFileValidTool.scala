package tool

import cats.data.Validated
import implicits.Implicits._

/**
 * Created by yz on 12/3/2020
 */

class DataFileValidTool(lines: List[List[String]]) {

  val headers = lines.head
  val fileInfo = "数据文件"
  val mutationHeaders = VarTool.dataHeaders
  val patientHeaders = VarTool.patientHeaders
  val sampleHeaders = VarTool.sampleHeaders

  def validHeadersRepeat = {
    val repeatHeaders = headers.diff(headers.distinct)
    val valid = repeatHeaders.isEmpty
    Validated.cond(valid, true, s"${fileInfo}表头 ${repeatHeaders.head} 重复!")
  }

  def validHeadersExist = {
    val noExistHeaders = mutationHeaders.diff(headers)
    val noPatient = patientHeaders.diff(headers)
    val noSample = sampleHeaders.diff(headers)
    println(headers)
    println(noExistHeaders)
    println(noPatient)
    println(noSample)
    val valid = (noExistHeaders.isEmpty || noPatient.isEmpty || noSample.isEmpty)
    println(valid)
    Validated.cond(valid, true, s"${fileInfo}表头不存在！！!")
  }


  def validColumnNum = {
    val info = lines.drop(1).zipWithIndex.map { case (tmpColumns, i) =>
      val columns = tmpColumns
      val inValid = columns.size <= headers.size
      val inMessage = if (!inValid) {
        s"${fileInfo}第${i + 2}行列数不正确,存在多余列!"
      } else ""
      (inValid, inMessage)
    }
    val valid = info.forall(_._1)
    val messages = info.map(_._2).notEmptyLines
    Validated.cond(valid, true, messages.head)
  }

}

object DataFileValidTool {

  def valid(lines: List[List[String]]) = {
    val fileValidTool = new DataFileValidTool(lines)
    import fileValidTool._
    validHeadersRepeat.andThen { b =>
      validHeadersExist
    }.andThen { b =>
      validColumnNum
    }.leftMap { x =>
      s"数据文件格式有误!\n${x}"
    }

  }

}
