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
  val mutationNoNgsHeaders = VarTool.MutationNoNGSHeaders

  def validHeadersRepeat = {
    val repeatHeaders = headers.diff(headers.distinct)
    val valid = repeatHeaders.isEmpty
    Validated.cond(valid, true, s"${fileInfo}表头 ${repeatHeaders.head} 重复!")
  }


  //检验mutation的表头是否一致
  def validHeadersExist = {
    val noExistHeaders = mutationHeaders.diff(headers)
    val valid = (noExistHeaders.isEmpty)
    Validated.cond(valid, true, s"${fileInfo}表头不存在!!!")
  }

  def validNoNGSHeadersExist = {
    val noExistHeadersNoNGS = mutationNoNgsHeaders.diff(headers)
    val valid = (noExistHeadersNoNGS.isEmpty)
    Validated.cond(valid,true,s"${fileInfo}表头不存在!!!")
  }

  //检验病人信息表的表头和数据是否一致
  def validPatientHeadersExist = {
    val noPatient = patientHeaders.diff(headers)
    val valid = (noPatient).isEmpty
    Validated.cond(valid,true,s"${fileInfo}表头不存在!!!")
  }

  //检验样本信息表的表头和数据是否一致
  def validSampleHeadersExist = {
    val noSample = sampleHeaders.diff(headers)
    val valid = (noSample).isEmpty
    Validated.cond(valid,true,s"${fileInfo}表头不存在!!!")
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

  //检验突变信息表
  def valid(lines: List[List[String]]) = {
    val fileValidTool = new DataFileValidTool(lines)
    import fileValidTool._
    validHeadersRepeat.andThen { b =>
      validHeadersExist
    }.andThen { b =>
      //检验 一行列的数量和表头的数量是否一致
      validColumnNum
    }.leftMap { x =>
      s"数据文件格式有误!\n${x}"
    }
  }

  def validNoNGS(lines: List[List[String]]) = {
    val fileValidTool = new DataFileValidTool(lines)
    import fileValidTool._
    validHeadersRepeat.andThen { b =>
      validNoNGSHeadersExist
    }.andThen { b =>
      //检验 一行列的数量和表头的数量是否一致
      validColumnNum
    }.leftMap { x =>
      s"数据文件格式有误!\n${x}"
    }
  }

  //检验病人表
  def validPatient(lines: List[List[String]]) = {
    val fileValidTool = new DataFileValidTool(lines)
    import fileValidTool._
    validHeadersRepeat.andThen { b =>
      validPatientHeadersExist
    }.andThen { b =>
      //检验 一行列的数量和表头的数量是否一致
      validColumnNum
    }.leftMap { x =>
      s"数据文件格式有误!\n${x}"
    }
  }

  //检验样本信息表
  def validSample(lines: List[List[String]]) = {
    val fileValidTool = new DataFileValidTool(lines)
    import fileValidTool._
    validHeadersRepeat.andThen { b =>
      validSampleHeadersExist
    }.andThen { b =>
      //检验 一行列的数量和表头的数量是否一致
      validColumnNum
    }.leftMap { x =>
      s"数据文件格式有误!\n${x}"
    }
  }

}
