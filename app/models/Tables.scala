package models
// AUTO-GENERATED Slick data model
/** Stand-alone Slick data model for immediate use */
object Tables extends {
  val profile = utils.MyPostgresProfile
} with Tables

/** Slick data model trait for extension, choice of backend or usage in the cake pattern. (Make sure to initialize this late.) */
trait Tables {
  val profile: utils.MyPostgresProfile
  import profile.api._
  import com.github.tototoshi.slick.PostgresJodaSupport._
  import org.joda.time.DateTime
  import slick.model.ForeignKeyAction
  // NOTE: GetResult mappers for plain SQL are only generated for tables where Slick knows how to map the types of all columns.
  import slick.jdbc.{GetResult => GR}

  /** DDL for all tables. Call .create to execute. */
  lazy val schema: profile.SchemaDescription = Array(Account.schema, Kit.schema, MutationTable.schema, Patient.schema, PatientKit.schema, Sample.schema, SampleKit.schema, User.schema).reduceLeft(_ ++ _)
  @deprecated("Use .schema instead of .ddl", "3.0")
  def ddl = schema

  /** Entity class storing rows of table Account
   *  @param id Database column id SqlType(int2), AutoInc, PrimaryKey
   *  @param adminname Database column adminname SqlType(varchar), Length(255,true)
   *  @param password Database column password SqlType(varchar), Length(255,true) */
  case class AccountRow(id: Short, adminname: String, password: String)
  /** GetResult implicit for fetching AccountRow objects using plain SQL queries */
  implicit def GetResultAccountRow(implicit e0: GR[Short], e1: GR[String]): GR[AccountRow] = GR{
    prs => import prs._
    AccountRow.tupled((<<[Short], <<[String], <<[String]))
  }
  /** Table description of table account. Objects of this class serve as prototypes for rows in queries. */
  class Account(_tableTag: Tag) extends profile.api.Table[AccountRow](_tableTag, "account") {
    def * = (id, adminname, password) <> (AccountRow.tupled, AccountRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(adminname), Rep.Some(password))).shaped.<>({r=>import r._; _1.map(_=> AccountRow.tupled((_1.get, _2.get, _3.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(int2), AutoInc, PrimaryKey */
    val id: Rep[Short] = column[Short]("id", O.AutoInc, O.PrimaryKey)
    /** Database column adminname SqlType(varchar), Length(255,true) */
    val adminname: Rep[String] = column[String]("adminname", O.Length(255,varying=true))
    /** Database column password SqlType(varchar), Length(255,true) */
    val password: Rep[String] = column[String]("password", O.Length(255,varying=true))
  }
  /** Collection-like TableQuery object for table Account */
  lazy val Account = new TableQuery(tag => new Account(tag))

  /** Entity class storing rows of table Kit
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param data Database column data SqlType(jsonb) */
  case class KitRow(id: Int, data: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching KitRow objects using plain SQL queries */
  implicit def GetResultKitRow(implicit e0: GR[Int], e1: GR[play.api.libs.json.JsValue]): GR[KitRow] = GR{
    prs => import prs._
    KitRow.tupled((<<[Int], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table kit. Objects of this class serve as prototypes for rows in queries. */
  class Kit(_tableTag: Tag) extends profile.api.Table[KitRow](_tableTag, "kit") {
    def * = (id, data) <> (KitRow.tupled, KitRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(data))).shaped.<>({r=>import r._; _1.map(_=> KitRow.tupled((_1.get, _2.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
  }
  /** Collection-like TableQuery object for table Kit */
  lazy val Kit = new TableQuery(tag => new Kit(tag))

  /** Entity class storing rows of table MutationTable
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param data Database column data SqlType(jsonb)
   *  @param sampleBarcode Database column sample_barcode SqlType(varchar)
   *  @param kitId Database column kit_id SqlType(int4) */
  case class MutationTableRow(id: Int, data: play.api.libs.json.JsValue, sampleBarcode: String, kitId: Int)
  /** GetResult implicit for fetching MutationTableRow objects using plain SQL queries */
  implicit def GetResultMutationTableRow(implicit e0: GR[Int], e1: GR[play.api.libs.json.JsValue], e2: GR[String]): GR[MutationTableRow] = GR{
    prs => import prs._
    MutationTableRow.tupled((<<[Int], <<[play.api.libs.json.JsValue], <<[String], <<[Int]))
  }
  /** Table description of table mutation_table. Objects of this class serve as prototypes for rows in queries. */
  class MutationTable(_tableTag: Tag) extends profile.api.Table[MutationTableRow](_tableTag, "mutation_table") {
    def * = (id, data, sampleBarcode, kitId) <> (MutationTableRow.tupled, MutationTableRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(data), Rep.Some(sampleBarcode), Rep.Some(kitId))).shaped.<>({r=>import r._; _1.map(_=> MutationTableRow.tupled((_1.get, _2.get, _3.get, _4.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
    /** Database column sample_barcode SqlType(varchar) */
    val sampleBarcode: Rep[String] = column[String]("sample_barcode")
    /** Database column kit_id SqlType(int4) */
    val kitId: Rep[Int] = column[Int]("kit_id")

    /** Index over (data) (database name idx_chromosome) */
    val index1 = index("idx_chromosome", data)
  }
  /** Collection-like TableQuery object for table MutationTable */
  lazy val MutationTable = new TableQuery(tag => new MutationTable(tag))

  /** Entity class storing rows of table Patient
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param patientid Database column patientid SqlType(varchar)
   *  @param data Database column data SqlType(jsonb) */
  case class PatientRow(id: Int, patientid: String, data: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching PatientRow objects using plain SQL queries */
  implicit def GetResultPatientRow(implicit e0: GR[Int], e1: GR[String], e2: GR[play.api.libs.json.JsValue]): GR[PatientRow] = GR{
    prs => import prs._
    PatientRow.tupled((<<[Int], <<[String], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table patient. Objects of this class serve as prototypes for rows in queries. */
  class Patient(_tableTag: Tag) extends profile.api.Table[PatientRow](_tableTag, "patient") {
    def * = (id, patientid, data) <> (PatientRow.tupled, PatientRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(patientid), Rep.Some(data))).shaped.<>({r=>import r._; _1.map(_=> PatientRow.tupled((_1.get, _2.get, _3.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column patientid SqlType(varchar) */
    val patientid: Rep[String] = column[String]("patientid")
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
  }
  /** Collection-like TableQuery object for table Patient */
  lazy val Patient = new TableQuery(tag => new Patient(tag))

  /** Entity class storing rows of table PatientKit
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param data Database column data SqlType(jsonb) */
  case class PatientKitRow(id: Int, data: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching PatientKitRow objects using plain SQL queries */
  implicit def GetResultPatientKitRow(implicit e0: GR[Int], e1: GR[play.api.libs.json.JsValue]): GR[PatientKitRow] = GR{
    prs => import prs._
    PatientKitRow.tupled((<<[Int], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table patient_kit. Objects of this class serve as prototypes for rows in queries. */
  class PatientKit(_tableTag: Tag) extends profile.api.Table[PatientKitRow](_tableTag, "patient_kit") {
    def * = (id, data) <> (PatientKitRow.tupled, PatientKitRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(data))).shaped.<>({r=>import r._; _1.map(_=> PatientKitRow.tupled((_1.get, _2.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
  }
  /** Collection-like TableQuery object for table PatientKit */
  lazy val PatientKit = new TableQuery(tag => new PatientKit(tag))

  /** Entity class storing rows of table Sample
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param sampleid Database column sampleid SqlType(varchar)
   *  @param patientid Database column patientid SqlType(varchar)
   *  @param data Database column data SqlType(jsonb) */
  case class SampleRow(id: Int, sampleid: String, patientid: String, data: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching SampleRow objects using plain SQL queries */
  implicit def GetResultSampleRow(implicit e0: GR[Int], e1: GR[String], e2: GR[play.api.libs.json.JsValue]): GR[SampleRow] = GR{
    prs => import prs._
    SampleRow.tupled((<<[Int], <<[String], <<[String], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table sample. Objects of this class serve as prototypes for rows in queries. */
  class Sample(_tableTag: Tag) extends profile.api.Table[SampleRow](_tableTag, "sample") {
    def * = (id, sampleid, patientid, data) <> (SampleRow.tupled, SampleRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(sampleid), Rep.Some(patientid), Rep.Some(data))).shaped.<>({r=>import r._; _1.map(_=> SampleRow.tupled((_1.get, _2.get, _3.get, _4.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column sampleid SqlType(varchar) */
    val sampleid: Rep[String] = column[String]("sampleid")
    /** Database column patientid SqlType(varchar) */
    val patientid: Rep[String] = column[String]("patientid")
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
  }
  /** Collection-like TableQuery object for table Sample */
  lazy val Sample = new TableQuery(tag => new Sample(tag))

  /** Entity class storing rows of table SampleKit
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param data Database column data SqlType(jsonb) */
  case class SampleKitRow(id: Int, data: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching SampleKitRow objects using plain SQL queries */
  implicit def GetResultSampleKitRow(implicit e0: GR[Int], e1: GR[play.api.libs.json.JsValue]): GR[SampleKitRow] = GR{
    prs => import prs._
    SampleKitRow.tupled((<<[Int], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table sample_kit. Objects of this class serve as prototypes for rows in queries. */
  class SampleKit(_tableTag: Tag) extends profile.api.Table[SampleKitRow](_tableTag, "sample_kit") {
    def * = (id, data) <> (SampleKitRow.tupled, SampleKitRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(data))).shaped.<>({r=>import r._; _1.map(_=> SampleKitRow.tupled((_1.get, _2.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
  }
  /** Collection-like TableQuery object for table SampleKit */
  lazy val SampleKit = new TableQuery(tag => new SampleKit(tag))

  /** Entity class storing rows of table User
   *  @param id Database column id SqlType(int2), AutoInc, PrimaryKey
   *  @param username Database column username SqlType(varchar), Length(255,true)
   *  @param password Database column password SqlType(varchar), Length(255,true)
   *  @param `create-time` Database column create-time SqlType(date)
   *  @param kitvalue Database column kitvalue SqlType(jsonb)
   *  @param filtervalue Database column filtervalue SqlType(jsonb) */
  case class UserRow(id: Short, username: String, password: String, `create-time`: java.sql.Date, kitvalue: play.api.libs.json.JsValue, filtervalue: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching UserRow objects using plain SQL queries */
  implicit def GetResultUserRow(implicit e0: GR[Short], e1: GR[String], e2: GR[java.sql.Date], e3: GR[play.api.libs.json.JsValue]): GR[UserRow] = GR{
    prs => import prs._
    UserRow.tupled((<<[Short], <<[String], <<[String], <<[java.sql.Date], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table user. Objects of this class serve as prototypes for rows in queries. */
  class User(_tableTag: Tag) extends profile.api.Table[UserRow](_tableTag, "user") {
    def * = (id, username, password, `create-time`, kitvalue, filtervalue) <> (UserRow.tupled, UserRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(username), Rep.Some(password), Rep.Some(`create-time`), Rep.Some(kitvalue), Rep.Some(filtervalue))).shaped.<>({r=>import r._; _1.map(_=> UserRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(int2), AutoInc, PrimaryKey */
    val id: Rep[Short] = column[Short]("id", O.AutoInc, O.PrimaryKey)
    /** Database column username SqlType(varchar), Length(255,true) */
    val username: Rep[String] = column[String]("username", O.Length(255,varying=true))
    /** Database column password SqlType(varchar), Length(255,true) */
    val password: Rep[String] = column[String]("password", O.Length(255,varying=true))
    /** Database column create-time SqlType(date) */
    val `create-time`: Rep[java.sql.Date] = column[java.sql.Date]("create-time")
    /** Database column kitvalue SqlType(jsonb) */
    val kitvalue: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("kitvalue")
    /** Database column filtervalue SqlType(jsonb) */
    val filtervalue: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("filtervalue")
  }
  /** Collection-like TableQuery object for table User */
  lazy val User = new TableQuery(tag => new User(tag))
}
