package tool

import play.api.data.Forms._
import play.api.data._
import tool.pojo._
import play.api.data.JodaForms.jodaDate

object FormTool {

  val userForm = Form(
    mapping(
      "name" -> text,
      "password" -> text
    )(UserData.apply)(UserData.unapply)
  )

  val changePasswordForm = Form(
    mapping(
      "password" -> text,
      "newPassword" -> text
    )(ChangePasswordData.apply)(ChangePasswordData.unapply)
  )

  val fileNameForm = Form(
    mapping(
      "filename" -> text
    )(FileNameData.apply)(FileNameData.unapply)
  )
}