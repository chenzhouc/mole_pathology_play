package tool

import java.io.File
import java.nio.file.Files

import implicits.Implicits.MyXlxsFile
import utils.{DesEncrypter, Utils}



/**
 * Created by yz on 3/7/2020
 */
object Tool {

  val registerDesEncrypter = new DesEncrypter("register12345678")
  val newPasswordDesEncrypter = new DesEncrypter("newPassword12345")
  val playPath = new File("../").getAbsolutePath
  val windowsTestDir = new File("C:\\temp")
  val linuxTestDir = new File(playPath, "workspace")
  val testDir = if (windowsTestDir.exists()) windowsTestDir else linuxTestDir
  val dbName = "mole_pathology_database"
  val projectName = "mole_pathology_scala_js"
  val windowsPath = s"C:\\${dbName}"
  val linuxPath = playPath + s"/${dbName}"
  val path = {
    if (new File(windowsPath).exists()) windowsPath else linuxPath
  }
  val userDir = new File(path, "user")
  val dataDir = new File(path, "data")
  val exampleDir = new File(path, "example")
  val softExampleDir = new File(exampleDir, "soft")
  val dataAvatarDir = new File(dataDir, "avatar")
  val rPath = {
    val rPath = s"C:\\workspaceForIDEA\\${projectName}\\server\\rScripts"
    val linuxRPath = linuxPath + "/rScripts"
    if (new File(rPath).exists()) rPath else linuxRPath
  }

  def createTempDirectory(prefix: String) = {
   Files.createTempDirectory(prefix).toFile
  }

  def fileCheck(file: File) = {
    dataFileCheck(file)
  }

  def dataFileCheck(file: File) = {
    DataFileValidTool.valid(file.xlsxLines())
  }

  def deleteDirectory(direcotry: File) = {
     Utils.deleteDirectory(direcotry)
  }

}
