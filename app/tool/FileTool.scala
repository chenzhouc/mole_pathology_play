package tool

import implicits.Implicits._

import java.io.File

/**
 * Created by yz on 12/3/2020
 */
object FileTool {

  def fileCheck(file: File) = {
   FileTool.dataFileCheck(file)
  }

  def PatientFileCheck(file: File) = {
    DataFileValidTool.validPatient(file.xlsxLines())
  }

  def SampleFileCheck(file: File) = {
    DataFileValidTool.validSample(file.xlsxLines())
  }

  def dataFileCheck(file: File) = {
    DataFileValidTool.valid(file.xlsxLines())
  }

  def MutationNoNGSFileCheck(file: File) = {
    DataFileValidTool.validNoNGS(file.xlsxLines())
  }

}
