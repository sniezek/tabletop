package com.schema

// AUTO-GENERATED Slick data model
/** Stand-alone Slick data model for immediate use */
object Tables extends {
  val profile = slick.driver.MySQLDriver
} with Tables

/** Slick data model trait for extension, choice of backend or usage in the cake pattern. (Make sure to initialize this late.) */
trait Tables {
  val profile: slick.driver.JdbcProfile

  import profile.api._
  import slick.model.ForeignKeyAction
  // NOTE: GetResult mappers for plain SQL are only generated for tables where Slick knows how to map the types of all columns.
  import slick.jdbc.{GetResult => GR}

  /** DDL for all tables. Call .create to execute. */
  lazy val schema = Array(Event.schema, EventSparrings.schema, EventTournaments.schema, GameRanking.schema, Location.schema, Sparring.schema, SwissPlayerResult.schema, SwissTournamentProcess.schema, SwissUsersPlayed.schema, Tournament.schema, TournamentPlayerResult.schema, TournamentProcess.schema, TournamentUsers.schema, User.schema).reduceLeft(_ ++ _)

  @deprecated("Use .schema instead of .ddl", "3.0")
  def ddl = schema

  /** Entity class storing rows of table Event
    *
    * @param id          Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param description Database column description SqlType(VARCHAR), Length(255,true)
    * @param name        Database column name SqlType(VARCHAR), Length(255,true)
    * @param locationId  Database column location_id SqlType(BIGINT)
    * @param organiserId Database column organiser_id SqlType(BIGINT), Default(None) */
  case class EventRow(id: Long, description: String, name: String, locationId: Long, organiserId: Option[Long] = None)

  /** GetResult implicit for fetching EventRow objects using plain SQL queries */
  implicit def GetResultEventRow(implicit e0: GR[Long], e1: GR[String], e2: GR[Option[Long]]): GR[EventRow] = GR {
    prs =>
      import prs._
      EventRow.tupled((<<[Long], <<[String], <<[String], <<[Long], <<?[Long]))
  }

  /** Table description of table event. Objects of this class serve as prototypes for rows in queries. */
  class Event(_tableTag: Tag) extends Table[EventRow](_tableTag, "event") {
    def * = (id, description, name, locationId, organiserId) <> (EventRow.tupled, EventRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), Rep.Some(description), Rep.Some(name), Rep.Some(locationId), organiserId).shaped.<>({ r => import r._; _1.map(_ => EventRow.tupled((_1.get, _2.get, _3.get, _4.get, _5))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column description SqlType(VARCHAR), Length(255,true) */
    val description: Rep[String] = column[String]("description", O.Length(255, varying = true))
    /** Database column name SqlType(VARCHAR), Length(255,true) */
    val name: Rep[String] = column[String]("name", O.Length(255, varying = true))
    /** Database column location_id SqlType(BIGINT) */
    val locationId: Rep[Long] = column[Long]("location_id")
    /** Database column organiser_id SqlType(BIGINT), Default(None) */
    val organiserId: Rep[Option[Long]] = column[Option[Long]]("organiser_id", O.Default(None))

    /** Foreign key referencing Location (database name FKbb6c0h5nhs5og47iem617ehrl) */
    lazy val locationFk = foreignKey("FKbb6c0h5nhs5og47iem617ehrl", locationId, Location)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FKmuuwnrsxvocaydecr7xglxti2) */
    lazy val userFk = foreignKey("FKmuuwnrsxvocaydecr7xglxti2", organiserId, User)(r => Rep.Some(r.id), onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table Event */
  lazy val Event = new TableQuery(tag => new Event(tag))

  /** Entity class storing rows of table EventSparrings
    *
    * @param eventId     Database column event_id SqlType(BIGINT)
    * @param sparringsId Database column sparrings_id SqlType(BIGINT) */
  case class EventSparringsRow(eventId: Long, sparringsId: Long)

  /** GetResult implicit for fetching EventSparringsRow objects using plain SQL queries */
  implicit def GetResultEventSparringsRow(implicit e0: GR[Long]): GR[EventSparringsRow] = GR {
    prs =>
      import prs._
      EventSparringsRow.tupled((<<[Long], <<[Long]))
  }

  /** Table description of table event_sparrings. Objects of this class serve as prototypes for rows in queries. */
  class EventSparrings(_tableTag: Tag) extends Table[EventSparringsRow](_tableTag, "event_sparrings") {
    def * = (eventId, sparringsId) <> (EventSparringsRow.tupled, EventSparringsRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(eventId), Rep.Some(sparringsId)).shaped.<>({ r => import r._; _1.map(_ => EventSparringsRow.tupled((_1.get, _2.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column event_id SqlType(BIGINT) */
    val eventId: Rep[Long] = column[Long]("event_id")
    /** Database column sparrings_id SqlType(BIGINT) */
    val sparringsId: Rep[Long] = column[Long]("sparrings_id")

    /** Primary key of EventSparrings (database name event_sparrings_PK) */
    val pk = primaryKey("event_sparrings_PK", (eventId, sparringsId))

    /** Foreign key referencing Event (database name FKd8j2gjsispy0wkgq1wmsll0r0) */
    lazy val eventFk = foreignKey("FKd8j2gjsispy0wkgq1wmsll0r0", eventId, Event)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing Sparring (database name FK7my7qocrbungi8nmksq7dphxp) */
    lazy val sparringFk = foreignKey("FK7my7qocrbungi8nmksq7dphxp", sparringsId, Sparring)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)

    /** Uniqueness Index over (sparringsId) (database name UK_1uxpt5349buqinwtkb0qp78nj) */
    val index1 = index("UK_1uxpt5349buqinwtkb0qp78nj", sparringsId, unique = true)
  }

  /** Collection-like TableQuery object for table EventSparrings */
  lazy val EventSparrings = new TableQuery(tag => new EventSparrings(tag))

  /** Entity class storing rows of table EventTournaments
    *
    * @param eventId       Database column event_id SqlType(BIGINT)
    * @param tournamentsId Database column tournaments_id SqlType(BIGINT) */
  case class EventTournamentsRow(eventId: Long, tournamentsId: Long)

  /** GetResult implicit for fetching EventTournamentsRow objects using plain SQL queries */
  implicit def GetResultEventTournamentsRow(implicit e0: GR[Long]): GR[EventTournamentsRow] = GR {
    prs =>
      import prs._
      EventTournamentsRow.tupled((<<[Long], <<[Long]))
  }

  /** Table description of table event_tournaments. Objects of this class serve as prototypes for rows in queries. */
  class EventTournaments(_tableTag: Tag) extends Table[EventTournamentsRow](_tableTag, "event_tournaments") {
    def * = (eventId, tournamentsId) <> (EventTournamentsRow.tupled, EventTournamentsRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(eventId), Rep.Some(tournamentsId)).shaped.<>({ r => import r._; _1.map(_ => EventTournamentsRow.tupled((_1.get, _2.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column event_id SqlType(BIGINT) */
    val eventId: Rep[Long] = column[Long]("event_id")
    /** Database column tournaments_id SqlType(BIGINT) */
    val tournamentsId: Rep[Long] = column[Long]("tournaments_id")

    /** Primary key of EventTournaments (database name event_tournaments_PK) */
    val pk = primaryKey("event_tournaments_PK", (eventId, tournamentsId))

    /** Foreign key referencing Event (database name FK40b2llgojaljdpqq1l0ovxvk9) */
    lazy val eventFk = foreignKey("FK40b2llgojaljdpqq1l0ovxvk9", eventId, Event)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing Tournament (database name FKbhoddyvhuqjcpfe6vmn1mgart) */
    lazy val tournamentFk = foreignKey("FKbhoddyvhuqjcpfe6vmn1mgart", tournamentsId, Tournament)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)

    /** Uniqueness Index over (tournamentsId) (database name UK_toc2acw9uyq6iux99jtdtvkg3) */
    val index1 = index("UK_toc2acw9uyq6iux99jtdtvkg3", tournamentsId, unique = true)
  }

  /** Collection-like TableQuery object for table EventTournaments */
  lazy val EventTournaments = new TableQuery(tag => new EventTournaments(tag))

  /** Entity class storing rows of table GameRanking
    *
    * @param id       Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param gameName Database column game_name SqlType(VARCHAR), Length(255,true)
    * @param points   Database column points SqlType(BIGINT), Default(None)
    * @param userId   Database column user_id SqlType(BIGINT) */
  case class GameRankingRow(id: Long, gameName: String, points: Option[Long] = None, userId: Long)

  /** GetResult implicit for fetching GameRankingRow objects using plain SQL queries */
  implicit def GetResultGameRankingRow(implicit e0: GR[Long], e1: GR[String], e2: GR[Option[Long]]): GR[GameRankingRow] = GR {
    prs =>
      import prs._
      GameRankingRow.tupled((<<[Long], <<[String], <<?[Long], <<[Long]))
  }

  /** Table description of table game_ranking. Objects of this class serve as prototypes for rows in queries. */
  class GameRanking(_tableTag: Tag) extends Table[GameRankingRow](_tableTag, "game_ranking") {
    def * = (id, gameName, points, userId) <> (GameRankingRow.tupled, GameRankingRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), Rep.Some(gameName), points, Rep.Some(userId)).shaped.<>({ r => import r._; _1.map(_ => GameRankingRow.tupled((_1.get, _2.get, _3, _4.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column game_name SqlType(VARCHAR), Length(255,true) */
    val gameName: Rep[String] = column[String]("game_name", O.Length(255, varying = true))
    /** Database column points SqlType(BIGINT), Default(None) */
    val points: Rep[Option[Long]] = column[Option[Long]]("points", O.Default(None))
    /** Database column user_id SqlType(BIGINT) */
    val userId: Rep[Long] = column[Long]("user_id")

    /** Uniqueness Index over (userId,gameName) (database name UKasqp6rlnesqjgts62360xo3db) */
    val index1 = index("UKasqp6rlnesqjgts62360xo3db", (userId, gameName), unique = true)
  }

  /** Collection-like TableQuery object for table GameRanking */
  lazy val GameRanking = new TableQuery(tag => new GameRanking(tag))

  /** Entity class storing rows of table Location
    *
    * @param id      Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param address Database column address SqlType(VARCHAR), Length(255,true), Default(None)
    * @param lat     Database column lat SqlType(DOUBLE)
    * @param lng     Database column lng SqlType(DOUBLE)
    * @param name    Database column name SqlType(VARCHAR), Length(255,true) */
  case class LocationRow(id: Long, address: Option[String] = None, lat: Double, lng: Double, name: String)

  /** GetResult implicit for fetching LocationRow objects using plain SQL queries */
  implicit def GetResultLocationRow(implicit e0: GR[Long], e1: GR[Option[String]], e2: GR[Double], e3: GR[String]): GR[LocationRow] = GR {
    prs =>
      import prs._
      LocationRow.tupled((<<[Long], <<?[String], <<[Double], <<[Double], <<[String]))
  }

  /** Table description of table location. Objects of this class serve as prototypes for rows in queries. */
  class Location(_tableTag: Tag) extends Table[LocationRow](_tableTag, "location") {
    def * = (id, address, lat, lng, name) <> (LocationRow.tupled, LocationRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), address, Rep.Some(lat), Rep.Some(lng), Rep.Some(name)).shaped.<>({ r => import r._; _1.map(_ => LocationRow.tupled((_1.get, _2, _3.get, _4.get, _5.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column address SqlType(VARCHAR), Length(255,true), Default(None) */
    val address: Rep[Option[String]] = column[Option[String]]("address", O.Length(255, varying = true), O.Default(None))
    /** Database column lat SqlType(DOUBLE) */
    val lat: Rep[Double] = column[Double]("lat")
    /** Database column lng SqlType(DOUBLE) */
    val lng: Rep[Double] = column[Double]("lng")
    /** Database column name SqlType(VARCHAR), Length(255,true) */
    val name: Rep[String] = column[String]("name", O.Length(255, varying = true))
  }

  /** Collection-like TableQuery object for table Location */
  lazy val Location = new TableQuery(tag => new Location(tag))

  /** Entity class storing rows of table Sparring
    *
    * @param id         Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param endDate    Database column end_date SqlType(DATETIME)
    * @param endStatus  Database column end_status SqlType(VARCHAR), Length(255,true), Default(None)
    * @param game       Database column game SqlType(VARCHAR), Length(255,true), Default(None)
    * @param maxPlayers Database column max_players SqlType(INT)
    * @param minPlayers Database column min_players SqlType(INT)
    * @param startDate  Database column start_date SqlType(DATETIME)
    * @param gameName   Database column game_name SqlType(VARCHAR), Length(255,true), Default(None) */
  case class SparringRow(id: Long, endDate: java.sql.Timestamp, endStatus: Option[String] = None, game: Option[String] = None, maxPlayers: Int, minPlayers: Int, startDate: java.sql.Timestamp, gameName: Option[String] = None)

  /** GetResult implicit for fetching SparringRow objects using plain SQL queries */
  implicit def GetResultSparringRow(implicit e0: GR[Long], e1: GR[java.sql.Timestamp], e2: GR[Option[String]], e3: GR[Int]): GR[SparringRow] = GR {
    prs =>
      import prs._
      SparringRow.tupled((<<[Long], <<[java.sql.Timestamp], <<?[String], <<?[String], <<[Int], <<[Int], <<[java.sql.Timestamp], <<?[String]))
  }

  /** Table description of table sparring. Objects of this class serve as prototypes for rows in queries. */
  class Sparring(_tableTag: Tag) extends Table[SparringRow](_tableTag, "sparring") {
    def * = (id, endDate, endStatus, game, maxPlayers, minPlayers, startDate, gameName) <> (SparringRow.tupled, SparringRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), Rep.Some(endDate), endStatus, game, Rep.Some(maxPlayers), Rep.Some(minPlayers), Rep.Some(startDate), gameName).shaped.<>({ r => import r._; _1.map(_ => SparringRow.tupled((_1.get, _2.get, _3, _4, _5.get, _6.get, _7.get, _8))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column end_date SqlType(DATETIME) */
    val endDate: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("end_date")
    /** Database column end_status SqlType(VARCHAR), Length(255,true), Default(None) */
    val endStatus: Rep[Option[String]] = column[Option[String]]("end_status", O.Length(255, varying = true), O.Default(None))
    /** Database column game SqlType(VARCHAR), Length(255,true), Default(None) */
    val game: Rep[Option[String]] = column[Option[String]]("game", O.Length(255, varying = true), O.Default(None))
    /** Database column max_players SqlType(INT) */
    val maxPlayers: Rep[Int] = column[Int]("max_players")
    /** Database column min_players SqlType(INT) */
    val minPlayers: Rep[Int] = column[Int]("min_players")
    /** Database column start_date SqlType(DATETIME) */
    val startDate: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("start_date")
    /** Database column game_name SqlType(VARCHAR), Length(255,true), Default(None) */
    val gameName: Rep[Option[String]] = column[Option[String]]("game_name", O.Length(255, varying = true), O.Default(None))
  }

  /** Collection-like TableQuery object for table Sparring */
  lazy val Sparring = new TableQuery(tag => new Sparring(tag))

  /** Entity class storing rows of table SwissPlayerResult
    *
    * @param currentScore      Database column current_score SqlType(INT)
    * @param isAvailable       Database column is_available SqlType(BIT)
    * @param result            Database column result SqlType(INT)
    * @param userId            Database column user_id SqlType(BIGINT)
    * @param tournamentId      Database column tournament_id SqlType(BIGINT)
    * @param currentOpponentId Database column current_opponent_id SqlType(BIGINT), Default(None) */
  case class SwissPlayerResultRow(currentScore: Int, isAvailable: Boolean, result: Int, userId: Long, tournamentId: Long, currentOpponentId: Option[Long] = None)

  /** GetResult implicit for fetching SwissPlayerResultRow objects using plain SQL queries */
  implicit def GetResultSwissPlayerResultRow(implicit e0: GR[Int], e1: GR[Boolean], e2: GR[Long], e3: GR[Option[Long]]): GR[SwissPlayerResultRow] = GR {
    prs =>
      import prs._
      SwissPlayerResultRow.tupled((<<[Int], <<[Boolean], <<[Int], <<[Long], <<[Long], <<?[Long]))
  }

  /** Table description of table swiss_player_result. Objects of this class serve as prototypes for rows in queries. */
  class SwissPlayerResult(_tableTag: Tag) extends Table[SwissPlayerResultRow](_tableTag, "swiss_player_result") {
    def * = (currentScore, isAvailable, result, userId, tournamentId, currentOpponentId) <> (SwissPlayerResultRow.tupled, SwissPlayerResultRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(currentScore), Rep.Some(isAvailable), Rep.Some(result), Rep.Some(userId), Rep.Some(tournamentId), currentOpponentId).shaped.<>({ r => import r._; _1.map(_ => SwissPlayerResultRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column current_score SqlType(INT) */
    val currentScore: Rep[Int] = column[Int]("current_score")
    /** Database column is_available SqlType(BIT) */
    val isAvailable: Rep[Boolean] = column[Boolean]("is_available")
    /** Database column result SqlType(INT) */
    val result: Rep[Int] = column[Int]("result")
    /** Database column user_id SqlType(BIGINT) */
    val userId: Rep[Long] = column[Long]("user_id")
    /** Database column tournament_id SqlType(BIGINT) */
    val tournamentId: Rep[Long] = column[Long]("tournament_id")
    /** Database column current_opponent_id SqlType(BIGINT), Default(None) */
    val currentOpponentId: Rep[Option[Long]] = column[Option[Long]]("current_opponent_id", O.Default(None))

    /** Primary key of SwissPlayerResult (database name swiss_player_result_PK) */
    val pk = primaryKey("swiss_player_result_PK", (tournamentId, userId))

    /** Foreign key referencing TournamentProcess (database name FK5ips5f0u49xgny9d21et1xfnf) */
    lazy val tournamentProcessFk = foreignKey("FK5ips5f0u49xgny9d21et1xfnf", tournamentId, TournamentProcess)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FKab7a4g9ykrylqrtebodquhvkv) */
    lazy val userFk2 = foreignKey("FKab7a4g9ykrylqrtebodquhvkv", userId, User)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FKbdjk9mjduhkcl3ty17qu9cnm3) */
    lazy val userFk3 = foreignKey("FKbdjk9mjduhkcl3ty17qu9cnm3", currentOpponentId, User)(r => Rep.Some(r.id), onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table SwissPlayerResult */
  lazy val SwissPlayerResult = new TableQuery(tag => new SwissPlayerResult(tag))

  /** Entity class storing rows of table SwissTournamentProcess
    *
    * @param ranked  Database column ranked SqlType(BIT)
    * @param rounds  Database column rounds SqlType(INT)
    * @param id      Database column id SqlType(BIGINT), PrimaryKey
    * @param byeUser Database column bye_user SqlType(BIGINT), Default(None) */
  case class SwissTournamentProcessRow(ranked: Boolean, rounds: Int, id: Long, byeUser: Option[Long] = None)

  /** GetResult implicit for fetching SwissTournamentProcessRow objects using plain SQL queries */
  implicit def GetResultSwissTournamentProcessRow(implicit e0: GR[Boolean], e1: GR[Int], e2: GR[Long], e3: GR[Option[Long]]): GR[SwissTournamentProcessRow] = GR {
    prs =>
      import prs._
      SwissTournamentProcessRow.tupled((<<[Boolean], <<[Int], <<[Long], <<?[Long]))
  }

  /** Table description of table swiss_tournament_process. Objects of this class serve as prototypes for rows in queries. */
  class SwissTournamentProcess(_tableTag: Tag) extends Table[SwissTournamentProcessRow](_tableTag, "swiss_tournament_process") {
    def * = (ranked, rounds, id, byeUser) <> (SwissTournamentProcessRow.tupled, SwissTournamentProcessRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(ranked), Rep.Some(rounds), Rep.Some(id), byeUser).shaped.<>({ r => import r._; _1.map(_ => SwissTournamentProcessRow.tupled((_1.get, _2.get, _3.get, _4))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column ranked SqlType(BIT) */
    val ranked: Rep[Boolean] = column[Boolean]("ranked")
    /** Database column rounds SqlType(INT) */
    val rounds: Rep[Int] = column[Int]("rounds")
    /** Database column id SqlType(BIGINT), PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.PrimaryKey)
    /** Database column bye_user SqlType(BIGINT), Default(None) */
    val byeUser: Rep[Option[Long]] = column[Option[Long]]("bye_user", O.Default(None))

    /** Foreign key referencing TournamentProcess (database name FKdqi17w27ci4qu60mpngekpdtb) */
    lazy val tournamentProcessFk = foreignKey("FKdqi17w27ci4qu60mpngekpdtb", id, TournamentProcess)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FKqknji65rlmfbwq479engvvqch) */
    lazy val userFk = foreignKey("FKqknji65rlmfbwq479engvvqch", byeUser, User)(r => Rep.Some(r.id), onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table SwissTournamentProcess */
  lazy val SwissTournamentProcess = new TableQuery(tag => new SwissTournamentProcess(tag))

  /** Entity class storing rows of table SwissUsersPlayed
    *
    * @param tournamentId Database column tournament_id SqlType(BIGINT)
    * @param userId       Database column user_id SqlType(BIGINT)
    * @param playedUserId Database column played_user_id SqlType(BIGINT) */
  case class SwissUsersPlayedRow(tournamentId: Long, userId: Long, playedUserId: Long)

  /** GetResult implicit for fetching SwissUsersPlayedRow objects using plain SQL queries */
  implicit def GetResultSwissUsersPlayedRow(implicit e0: GR[Long]): GR[SwissUsersPlayedRow] = GR {
    prs =>
      import prs._
      SwissUsersPlayedRow.tupled((<<[Long], <<[Long], <<[Long]))
  }

  /** Table description of table swiss_users_played. Objects of this class serve as prototypes for rows in queries. */
  class SwissUsersPlayed(_tableTag: Tag) extends Table[SwissUsersPlayedRow](_tableTag, "swiss_users_played") {
    def * = (tournamentId, userId, playedUserId) <> (SwissUsersPlayedRow.tupled, SwissUsersPlayedRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(tournamentId), Rep.Some(userId), Rep.Some(playedUserId)).shaped.<>({ r => import r._; _1.map(_ => SwissUsersPlayedRow.tupled((_1.get, _2.get, _3.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column tournament_id SqlType(BIGINT) */
    val tournamentId: Rep[Long] = column[Long]("tournament_id")
    /** Database column user_id SqlType(BIGINT) */
    val userId: Rep[Long] = column[Long]("user_id")
    /** Database column played_user_id SqlType(BIGINT) */
    val playedUserId: Rep[Long] = column[Long]("played_user_id")

    /** Foreign key referencing SwissPlayerResult (database name FKk6tsaetbs6bknd410rtl2a0go) */
    lazy val swissPlayerResultFk = foreignKey("FKk6tsaetbs6bknd410rtl2a0go", (tournamentId, userId), SwissPlayerResult)(r => (r.tournamentId, r.userId), onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FK5fpgypqlw682f8sb6lehtcmyv) */
    lazy val userFk = foreignKey("FK5fpgypqlw682f8sb6lehtcmyv", playedUserId, User)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table SwissUsersPlayed */
  lazy val SwissUsersPlayed = new TableQuery(tag => new SwissUsersPlayed(tag))

  /** Entity class storing rows of table Tournament
    *
    * @param id         Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param endDate    Database column end_date SqlType(DATETIME)
    * @param endStatus  Database column end_status SqlType(VARCHAR), Length(255,true), Default(None)
    * @param game       Database column game SqlType(VARCHAR), Length(255,true), Default(None)
    * @param maxPlayers Database column max_players SqlType(INT)
    * @param minPlayers Database column min_players SqlType(INT)
    * @param startDate  Database column start_date SqlType(DATETIME)
    * @param finished   Database column finished SqlType(BIT)
    * @param name       Database column name SqlType(VARCHAR), Length(255,true)
    * @param `type`     Database column type SqlType(VARCHAR), Length(255,true)
    * @param creatorId  Database column creator_id SqlType(BIGINT) */
  case class TournamentRow(id: Long, endDate: java.sql.Timestamp, endStatus: Option[String] = None, game: Option[String] = None, maxPlayers: Int, minPlayers: Int, startDate: java.sql.Timestamp, finished: Boolean, name: String, `type`: String, creatorId: Long)

  /** GetResult implicit for fetching TournamentRow objects using plain SQL queries */
  implicit def GetResultTournamentRow(implicit e0: GR[Long], e1: GR[java.sql.Timestamp], e2: GR[Option[String]], e3: GR[Int], e4: GR[Boolean], e5: GR[String]): GR[TournamentRow] = GR {
    prs =>
      import prs._
      TournamentRow.tupled((<<[Long], <<[java.sql.Timestamp], <<?[String], <<?[String], <<[Int], <<[Int], <<[java.sql.Timestamp], <<[Boolean], <<[String], <<[String], <<[Long]))
  }

  /** Table description of table tournament. Objects of this class serve as prototypes for rows in queries.
    * NOTE: The following names collided with Scala keywords and were escaped: type */
  class Tournament(_tableTag: Tag) extends Table[TournamentRow](_tableTag, "tournament") {
    def * = (id, endDate, endStatus, game, maxPlayers, minPlayers, startDate, finished, name, `type`, creatorId) <> (TournamentRow.tupled, TournamentRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), Rep.Some(endDate), endStatus, game, Rep.Some(maxPlayers), Rep.Some(minPlayers), Rep.Some(startDate), Rep.Some(finished), Rep.Some(name), Rep.Some(`type`), Rep.Some(creatorId)).shaped.<>({ r => import r._; _1.map(_ => TournamentRow.tupled((_1.get, _2.get, _3, _4, _5.get, _6.get, _7.get, _8.get, _9.get, _10.get, _11.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column end_date SqlType(DATETIME) */
    val endDate: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("end_date")
    /** Database column end_status SqlType(VARCHAR), Length(255,true), Default(None) */
    val endStatus: Rep[Option[String]] = column[Option[String]]("end_status", O.Length(255, varying = true), O.Default(None))
    /** Database column game SqlType(VARCHAR), Length(255,true), Default(None) */
    val game: Rep[Option[String]] = column[Option[String]]("game", O.Length(255, varying = true), O.Default(None))
    /** Database column max_players SqlType(INT) */
    val maxPlayers: Rep[Int] = column[Int]("max_players")
    /** Database column min_players SqlType(INT) */
    val minPlayers: Rep[Int] = column[Int]("min_players")
    /** Database column start_date SqlType(DATETIME) */
    val startDate: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("start_date")
    /** Database column finished SqlType(BIT) */
    val finished: Rep[Boolean] = column[Boolean]("finished")
    /** Database column name SqlType(VARCHAR), Length(255,true) */
    val name: Rep[String] = column[String]("name", O.Length(255, varying = true))
    /** Database column type SqlType(VARCHAR), Length(255,true)
      * NOTE: The name was escaped because it collided with a Scala keyword. */
    val `type`: Rep[String] = column[String]("type", O.Length(255, varying = true))
    /** Database column creator_id SqlType(BIGINT) */
    val creatorId: Rep[Long] = column[Long]("creator_id")

    /** Foreign key referencing User (database name FKcdhqe79l5q6ih7yyd9j642su3) */
    lazy val userFk = foreignKey("FKcdhqe79l5q6ih7yyd9j642su3", creatorId, User)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table Tournament */
  lazy val Tournament = new TableQuery(tag => new Tournament(tag))

  /** Entity class storing rows of table TournamentPlayerResult
    *
    * @param id         Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param place      Database column place SqlType(INT), Default(None)
    * @param points     Database column points SqlType(INT), Default(None)
    * @param tournament Database column tournament SqlType(BIGINT), Default(None)
    * @param user       Database column user SqlType(BIGINT), Default(None) */
  case class TournamentPlayerResultRow(id: Long, place: Option[Int] = None, points: Option[Int] = None, tournament: Option[Long] = None, user: Option[Long] = None)

  /** GetResult implicit for fetching TournamentPlayerResultRow objects using plain SQL queries */
  implicit def GetResultTournamentPlayerResultRow(implicit e0: GR[Long], e1: GR[Option[Int]], e2: GR[Option[Long]]): GR[TournamentPlayerResultRow] = GR {
    prs =>
      import prs._
      TournamentPlayerResultRow.tupled((<<[Long], <<?[Int], <<?[Int], <<?[Long], <<?[Long]))
  }

  /** Table description of table tournament_player_result. Objects of this class serve as prototypes for rows in queries. */
  class TournamentPlayerResult(_tableTag: Tag) extends Table[TournamentPlayerResultRow](_tableTag, "tournament_player_result") {
    def * = (id, place, points, tournament, user) <> (TournamentPlayerResultRow.tupled, TournamentPlayerResultRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), place, points, tournament, user).shaped.<>({ r => import r._; _1.map(_ => TournamentPlayerResultRow.tupled((_1.get, _2, _3, _4, _5))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column place SqlType(INT), Default(None) */
    val place: Rep[Option[Int]] = column[Option[Int]]("place", O.Default(None))
    /** Database column points SqlType(INT), Default(None) */
    val points: Rep[Option[Int]] = column[Option[Int]]("points", O.Default(None))
    /** Database column tournament SqlType(BIGINT), Default(None) */
    val tournament: Rep[Option[Long]] = column[Option[Long]]("tournament", O.Default(None))
    /** Database column user SqlType(BIGINT), Default(None) */
    val user: Rep[Option[Long]] = column[Option[Long]]("user", O.Default(None))

    /** Foreign key referencing Tournament (database name FKe9q15hcu1lgu7g1p1po9nru1s) */
    lazy val tournamentFk = foreignKey("FKe9q15hcu1lgu7g1p1po9nru1s", tournament, Tournament)(r => Rep.Some(r.id), onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FK8q42clscaukwp1ydgrtf1u2f3) */
    lazy val userFk = foreignKey("FK8q42clscaukwp1ydgrtf1u2f3", user, User)(r => Rep.Some(r.id), onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table TournamentPlayerResult */
  lazy val TournamentPlayerResult = new TableQuery(tag => new TournamentPlayerResult(tag))

  /** Entity class storing rows of table TournamentProcess
    *
    * @param id          Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param initialized Database column initialized SqlType(BIT) */
  case class TournamentProcessRow(id: Long, initialized: Boolean)

  /** GetResult implicit for fetching TournamentProcessRow objects using plain SQL queries */
  implicit def GetResultTournamentProcessRow(implicit e0: GR[Long], e1: GR[Boolean]): GR[TournamentProcessRow] = GR {
    prs =>
      import prs._
      TournamentProcessRow.tupled((<<[Long], <<[Boolean]))
  }

  /** Table description of table tournament_process. Objects of this class serve as prototypes for rows in queries. */
  class TournamentProcess(_tableTag: Tag) extends Table[TournamentProcessRow](_tableTag, "tournament_process") {
    def * = (id, initialized) <> (TournamentProcessRow.tupled, TournamentProcessRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), Rep.Some(initialized)).shaped.<>({ r => import r._; _1.map(_ => TournamentProcessRow.tupled((_1.get, _2.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column initialized SqlType(BIT) */
    val initialized: Rep[Boolean] = column[Boolean]("initialized")
  }

  /** Collection-like TableQuery object for table TournamentProcess */
  lazy val TournamentProcess = new TableQuery(tag => new TournamentProcess(tag))

  /** Entity class storing rows of table TournamentUsers
    *
    * @param tournamentId Database column tournament_id SqlType(BIGINT)
    * @param usersId      Database column users_id SqlType(BIGINT) */
  case class TournamentUsersRow(tournamentId: Long, usersId: Long)

  /** GetResult implicit for fetching TournamentUsersRow objects using plain SQL queries */
  implicit def GetResultTournamentUsersRow(implicit e0: GR[Long]): GR[TournamentUsersRow] = GR {
    prs =>
      import prs._
      TournamentUsersRow.tupled((<<[Long], <<[Long]))
  }

  /** Table description of table tournament_users. Objects of this class serve as prototypes for rows in queries. */
  class TournamentUsers(_tableTag: Tag) extends Table[TournamentUsersRow](_tableTag, "tournament_users") {
    def * = (tournamentId, usersId) <> (TournamentUsersRow.tupled, TournamentUsersRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(tournamentId), Rep.Some(usersId)).shaped.<>({ r => import r._; _1.map(_ => TournamentUsersRow.tupled((_1.get, _2.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column tournament_id SqlType(BIGINT) */
    val tournamentId: Rep[Long] = column[Long]("tournament_id")
    /** Database column users_id SqlType(BIGINT) */
    val usersId: Rep[Long] = column[Long]("users_id")

    /** Primary key of TournamentUsers (database name tournament_users_PK) */
    val pk = primaryKey("tournament_users_PK", (tournamentId, usersId))

    /** Foreign key referencing Tournament (database name FKiy5rw1t8n617ccia9vor4jxlm) */
    lazy val tournamentFk = foreignKey("FKiy5rw1t8n617ccia9vor4jxlm", tournamentId, Tournament)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
    /** Foreign key referencing User (database name FKdpp2lti7473jusv2ovsuffcu7) */
    lazy val userFk = foreignKey("FKdpp2lti7473jusv2ovsuffcu7", usersId, User)(r => r.id, onUpdate = ForeignKeyAction.NoAction, onDelete = ForeignKeyAction.NoAction)
  }

  /** Collection-like TableQuery object for table TournamentUsers */
  lazy val TournamentUsers = new TableQuery(tag => new TournamentUsers(tag))

  /** Entity class storing rows of table User
    *
    * @param id       Database column id SqlType(BIGINT), AutoInc, PrimaryKey
    * @param email    Database column email SqlType(VARCHAR), Length(255,true)
    * @param password Database column password SqlType(VARCHAR), Length(255,true)
    * @param username Database column username SqlType(VARCHAR), Length(255,true) */
  case class UserRow(id: Long, email: String, password: String, username: String)

  /** GetResult implicit for fetching UserRow objects using plain SQL queries */
  implicit def GetResultUserRow(implicit e0: GR[Long], e1: GR[String]): GR[UserRow] = GR {
    prs =>
      import prs._
      UserRow.tupled((<<[Long], <<[String], <<[String], <<[String]))
  }

  /** Table description of table user. Objects of this class serve as prototypes for rows in queries. */
  class User(_tableTag: Tag) extends Table[UserRow](_tableTag, "user") {
    def * = (id, email, password, username) <> (UserRow.tupled, UserRow.unapply)

    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(id), Rep.Some(email), Rep.Some(password), Rep.Some(username)).shaped.<>({ r => import r._; _1.map(_ => UserRow.tupled((_1.get, _2.get, _3.get, _4.get))) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(BIGINT), AutoInc, PrimaryKey */
    val id: Rep[Long] = column[Long]("id", O.AutoInc, O.PrimaryKey)
    /** Database column email SqlType(VARCHAR), Length(255,true) */
    val email: Rep[String] = column[String]("email", O.Length(255, varying = true))
    /** Database column password SqlType(VARCHAR), Length(255,true) */
    val password: Rep[String] = column[String]("password", O.Length(255, varying = true))
    /** Database column username SqlType(VARCHAR), Length(255,true) */
    val username: Rep[String] = column[String]("username", O.Length(255, varying = true))
  }

  /** Collection-like TableQuery object for table User */
  lazy val User = new TableQuery(tag => new User(tag))
}
