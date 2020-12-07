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

  def dataFileCheck(file: File) = {
    DataFileValidTool.valid(file.xlsxLines())
  }

}
