package controllers

import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}

/**
 * Created by yz on 2019/4/29
 */
class DatumController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def datumBefore = Action {
    implicit request =>
    Ok(views.html.datum.datum())
  }
}
