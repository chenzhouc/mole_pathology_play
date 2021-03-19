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
  lazy val schema: profile.SchemaDescription = Array(Account.schema, Alias.schema, Kit.schema, MutationTable.schema, MutationTableNongs.schema, Patient.schema, Sample.schema, Searchtype.schema, User.schema).reduceLeft(_ ++ _)
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

  /** Entity class storing rows of table Alias
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param `type` Database column type SqlType(varchar)
   *  @param name Database column name SqlType(varchar)
   *  @param alias Database column alias SqlType(varchar) */
  case class AliasRow(id: Int, `type`: String, name: String, alias: String)
  /** GetResult implicit for fetching AliasRow objects using plain SQL queries */
  implicit def GetResultAliasRow(implicit e0: GR[Int], e1: GR[String]): GR[AliasRow] = GR{
    prs => import prs._
    AliasRow.tupled((<<[Int], <<[String], <<[String], <<[String]))
  }
  /** Table description of table alias. Objects of this class serve as prototypes for rows in queries.
   *  NOTE: The following names collided with Scala keywords and were escaped: type */
  class Alias(_tableTag: Tag) extends profile.api.Table[AliasRow](_tableTag, "alias") {
    def * = (id, `type`, name, alias) <> (AliasRow.tupled, AliasRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(`type`), Rep.Some(name), Rep.Some(alias))).shaped.<>({r=>import r._; _1.map(_=> AliasRow.tupled((_1.get, _2.get, _3.get, _4.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column type SqlType(varchar)
     *  NOTE: The name was escaped because it collided with a Scala keyword. */
    val `type`: Rep[String] = column[String]("type")
    /** Database column name SqlType(varchar) */
    val name: Rep[String] = column[String]("name")
    /** Database column alias SqlType(varchar) */
    val alias: Rep[String] = column[String]("alias")
  }
  /** Collection-like TableQuery object for table Alias */
  lazy val Alias = new TableQuery(tag => new Alias(tag))

  /** Entity class storing rows of table Kit
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param `type` Database column type SqlType(varchar)
   *  @param data Database column data SqlType(jsonb) */
  case class KitRow(id: Int, `type`: String, data: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching KitRow objects using plain SQL queries */
  implicit def GetResultKitRow(implicit e0: GR[Int], e1: GR[String], e2: GR[play.api.libs.json.JsValue]): GR[KitRow] = GR{
    prs => import prs._
    KitRow.tupled((<<[Int], <<[String], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table Kit. Objects of this class serve as prototypes for rows in queries.
   *  NOTE: The following names collided with Scala keywords and were escaped: type */
  class Kit(_tableTag: Tag) extends profile.api.Table[KitRow](_tableTag, "Kit") {
    def * = (id, `type`, data) <> (KitRow.tupled, KitRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(`type`), Rep.Some(data))).shaped.<>({r=>import r._; _1.map(_=> KitRow.tupled((_1.get, _2.get, _3.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column type SqlType(varchar)
     *  NOTE: The name was escaped because it collided with a Scala keyword. */
    val `type`: Rep[String] = column[String]("type")
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
  }
  /** Collection-like TableQuery object for table Kit */
  lazy val Kit = new TableQuery(tag => new Kit(tag))

  /** Entity class storing rows of table MutationTable
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param data Database column data SqlType(jsonb)
   *  @param sampleBarcode Database column sample_barcode SqlType(varchar) */
  case class MutationTableRow(id: Int, data: play.api.libs.json.JsValue, sampleBarcode: String)
  /** GetResult implicit for fetching MutationTableRow objects using plain SQL queries */
  implicit def GetResultMutationTableRow(implicit e0: GR[Int], e1: GR[play.api.libs.json.JsValue], e2: GR[String]): GR[MutationTableRow] = GR{
    prs => import prs._
    MutationTableRow.tupled((<<[Int], <<[play.api.libs.json.JsValue], <<[String]))
  }
  /** Table description of table mutation_table. Objects of this class serve as prototypes for rows in queries. */
  class MutationTable(_tableTag: Tag) extends profile.api.Table[MutationTableRow](_tableTag, "mutation_table") {
    def * = (id, data, sampleBarcode) <> (MutationTableRow.tupled, MutationTableRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(data), Rep.Some(sampleBarcode))).shaped.<>({r=>import r._; _1.map(_=> MutationTableRow.tupled((_1.get, _2.get, _3.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
    /** Database column sample_barcode SqlType(varchar) */
    val sampleBarcode: Rep[String] = column[String]("sample_barcode")

    /** Index over (data) (database name idx_chromosome) */
    val index1 = index("idx_chromosome", data)
  }
  /** Collection-like TableQuery object for table MutationTable */
  lazy val MutationTable = new TableQuery(tag => new MutationTable(tag))

  /** Entity class storing rows of table MutationTableNongs
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param data Database column data SqlType(jsonb)
   *  @param sampleId Database column sample_id SqlType(varchar) */
  case class MutationTableNongsRow(id: Int, data: play.api.libs.json.JsValue, sampleId: String)
  /** GetResult implicit for fetching MutationTableNongsRow objects using plain SQL queries */
  implicit def GetResultMutationTableNongsRow(implicit e0: GR[Int], e1: GR[play.api.libs.json.JsValue], e2: GR[String]): GR[MutationTableNongsRow] = GR{
    prs => import prs._
    MutationTableNongsRow.tupled((<<[Int], <<[play.api.libs.json.JsValue], <<[String]))
  }
  /** Table description of table mutation_table_noNgs. Objects of this class serve as prototypes for rows in queries. */
  class MutationTableNongs(_tableTag: Tag) extends profile.api.Table[MutationTableNongsRow](_tableTag, "mutation_table_noNgs") {
    def * = (id, data, sampleId) <> (MutationTableNongsRow.tupled, MutationTableNongsRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(data), Rep.Some(sampleId))).shaped.<>({r=>import r._; _1.map(_=> MutationTableNongsRow.tupled((_1.get, _2.get, _3.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column data SqlType(jsonb) */
    val data: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("data")
    /** Database column sample_id SqlType(varchar) */
    val sampleId: Rep[String] = column[String]("sample_id")
  }
  /** Collection-like TableQuery object for table MutationTableNongs */
  lazy val MutationTableNongs = new TableQuery(tag => new MutationTableNongs(tag))

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

  /** Entity class storing rows of table Searchtype
   *  @param id Database column id SqlType(serial), AutoInc, PrimaryKey
   *  @param tableNameX Database column table_name SqlType(varchar)
   *  @param fieldName Database column field_name SqlType(varchar)
   *  @param value Database column value SqlType(varchar) */
  case class SearchtypeRow(id: Int, tableNameX: String, fieldName: String, value: String)
  /** GetResult implicit for fetching SearchtypeRow objects using plain SQL queries */
  implicit def GetResultSearchtypeRow(implicit e0: GR[Int], e1: GR[String]): GR[SearchtypeRow] = GR{
    prs => import prs._
    SearchtypeRow.tupled((<<[Int], <<[String], <<[String], <<[String]))
  }
  /** Table description of table SearchType. Objects of this class serve as prototypes for rows in queries.
   *  NOTE: The following names collided with Scala method names and were disambiguated: tableName */
  class Searchtype(_tableTag: Tag) extends profile.api.Table[SearchtypeRow](_tableTag, "SearchType") {
    def * = (id, tableNameX, fieldName, value) <> (SearchtypeRow.tupled, SearchtypeRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(tableNameX), Rep.Some(fieldName), Rep.Some(value))).shaped.<>({r=>import r._; _1.map(_=> SearchtypeRow.tupled((_1.get, _2.get, _3.get, _4.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(serial), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column table_name SqlType(varchar)
     *  NOTE: The name was disambiguated because it collided with Slick's method Table#tableName. */
    val tableNameX: Rep[String] = column[String]("table_name")
    /** Database column field_name SqlType(varchar) */
    val fieldName: Rep[String] = column[String]("field_name")
    /** Database column value SqlType(varchar) */
    val value: Rep[String] = column[String]("value")
  }
  /** Collection-like TableQuery object for table Searchtype */
  lazy val Searchtype = new TableQuery(tag => new Searchtype(tag))

  /** Entity class storing rows of table User
   *  @param id Database column id SqlType(int2), AutoInc, PrimaryKey
   *  @param username Database column username SqlType(varchar), Length(255,true)
   *  @param password Database column password SqlType(varchar), Length(255,true)
   *  @param `create-time` Database column create-time SqlType(date)
   *  @param kitvalue Database column kitvalue SqlType(jsonb)
   *  @param filtervalue Database column filtervalue SqlType(jsonb)
   *  @param selectColumns Database column select_columns SqlType(jsonb)
   *  @param selectPatientColumns Database column select_patient_columns SqlType(jsonb)
   *  @param selectSampleColumns Database column select_sample_columns SqlType(jsonb)
   *  @param kitvalueRaw Database column kitvalue_raw SqlType(jsonb)
   *  @param filtervalueRaw Database column filtervalue_raw SqlType(jsonb)
   *  @param selectMutationnongsColumns Database column select_mutationNoNGS_columns SqlType(jsonb) */
  case class UserRow(id: Short, username: String, password: String, `create-time`: java.sql.Date, kitvalue: play.api.libs.json.JsValue, filtervalue: play.api.libs.json.JsValue, selectColumns: play.api.libs.json.JsValue, selectPatientColumns: play.api.libs.json.JsValue, selectSampleColumns: play.api.libs.json.JsValue, kitvalueRaw: play.api.libs.json.JsValue, filtervalueRaw: play.api.libs.json.JsValue, selectMutationnongsColumns: play.api.libs.json.JsValue)
  /** GetResult implicit for fetching UserRow objects using plain SQL queries */
  implicit def GetResultUserRow(implicit e0: GR[Short], e1: GR[String], e2: GR[java.sql.Date], e3: GR[play.api.libs.json.JsValue]): GR[UserRow] = GR{
    prs => import prs._
    UserRow.tupled((<<[Short], <<[String], <<[String], <<[java.sql.Date], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue], <<[play.api.libs.json.JsValue]))
  }
  /** Table description of table user. Objects of this class serve as prototypes for rows in queries. */
  class User(_tableTag: Tag) extends profile.api.Table[UserRow](_tableTag, "user") {
    def * = (id, username, password, `create-time`, kitvalue, filtervalue, selectColumns, selectPatientColumns, selectSampleColumns, kitvalueRaw, filtervalueRaw, selectMutationnongsColumns) <> (UserRow.tupled, UserRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(username), Rep.Some(password), Rep.Some(`create-time`), Rep.Some(kitvalue), Rep.Some(filtervalue), Rep.Some(selectColumns), Rep.Some(selectPatientColumns), Rep.Some(selectSampleColumns), Rep.Some(kitvalueRaw), Rep.Some(filtervalueRaw), Rep.Some(selectMutationnongsColumns))).shaped.<>({r=>import r._; _1.map(_=> UserRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get, _9.get, _10.get, _11.get, _12.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

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
    /** Database column select_columns SqlType(jsonb) */
    val selectColumns: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("select_columns")
    /** Database column select_patient_columns SqlType(jsonb) */
    val selectPatientColumns: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("select_patient_columns")
    /** Database column select_sample_columns SqlType(jsonb) */
    val selectSampleColumns: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("select_sample_columns")
    /** Database column kitvalue_raw SqlType(jsonb) */
    val kitvalueRaw: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("kitvalue_raw")
    /** Database column filtervalue_raw SqlType(jsonb) */
    val filtervalueRaw: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("filtervalue_raw")
    /** Database column select_mutationNoNGS_columns SqlType(jsonb) */
    val selectMutationnongsColumns: Rep[play.api.libs.json.JsValue] = column[play.api.libs.json.JsValue]("select_mutationNoNGS_columns")
  }
  /** Collection-like TableQuery object for table User */
  lazy val User = new TableQuery(tag => new User(tag))
}
