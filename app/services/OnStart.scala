package services

import dao.mutationDao
import javax.inject.{Inject, Singleton}
import utils.{TableUtils, Utils}

import scala.concurrent.{Await, ExecutionContext, Future}
import scala.concurrent.duration.Duration

@Singleton
class OnStart @Inject()(mutationDao: mutationDao)(implicit exec: ExecutionContext) {

  println("success")

}
