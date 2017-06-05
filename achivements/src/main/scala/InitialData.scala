

import slick.driver.H2Driver.api._

import scala.concurrent.Future

trait InitialData {
  self: DatabaseSchema =>

  def db: Database

  def insertInitialData(): Future[Unit] = {
    db.run(statistics.delete)
    db.run(achivements.delete)
    val queries = DBIO.seq(

      statistics += Statistic(playerId = 1, totalWins = 16),
      statistics += Statistic(playerId = 2, totalWins = 128),
      statistics += Statistic(playerId = 3, totalWins = 1024),
      statistics += Statistic(playerId = 4, tournamentWins = 16),
      statistics += Statistic(playerId = 5, tournamentWins = 128),
      statistics += Statistic(playerId = 6, tournamentWins = 1024),
      statistics += Statistic(playerId = 7, totalWins = 16, tournamentWins = 16),
      statistics += Statistic(playerId = 8, totalWins = 128, tournamentWins = 128),
      statistics += Statistic(playerId = 9, totalWins = 1024, tournamentWins = 1024)
    )

    for (i <- 10 to 99999) {
      db.run(statistics += Statistic(playerId = i))
    }

    val query = DBIO.seq(
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win First Tournament", minVal = 1, name = "Tournament First Blood", field = AchivementsFields.TournamentsWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983163_1318169638279820_31313036_n.png?oh=7e751329573dca777005d7e99d15564f&oe=59379E26"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 10 Tournaments", minVal = 10, name = "Tournament 10 Wins", field = AchivementsFields.TournamentsWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983247_1318172188279565_1726916437_n.png?oh=22e844f825e2b7cfb11e6670ad801ad2&oe=59387AA1"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 100 Tournaments", minVal = 100, name = "Tournament 100 Wins", field = AchivementsFields.TournamentsWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944656_1318172191612898_1593431959_n.jpg?oh=883b5bdfc22538707243862bbb2a2033&oe=59377755"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 1000 Tournaments", minVal = 1000, name = "Tournament 1000 Wins", field = AchivementsFields.TournamentsWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945204_1318176914945759_1957273619_n.png?oh=b83e1822f38cce3736b2876c37388884&oe=5937A848"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win First Sparring", minVal = 1, name = "Sparring First Blood", field = AchivementsFields.SparringWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983310_1318178308278953_1461999588_n.png?oh=008fa950b7359093a8299064a1176469&oe=59387D40"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 10 Sparrings", minVal = 10, name = "Sparring 10 Wins", field = AchivementsFields.SparringWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18902837_1318180234945427_1225240098_n.png?oh=f3e4f667727bc54adde067e9574bcf0c&oe=59379476"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 100 Sparrings", minVal = 100, name = "Sparring 100 Wins", field = AchivementsFields.SparringWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944395_1318180344945416_1963286450_n.png?oh=1a0eed9779df2e51b8d7a37ecb92f272&oe=59376AFC"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 1000 Sparrings", minVal = 1000, name = "Sparring 1000 Wins", field = AchivementsFields.SparringWins, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18871600_1318184274945023_552929954_n.png?oh=62489160ab6010f41cbdab273fa79786&oe=59376C3D"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize Your First Event", minVal = 1, name = "Event Organizer First Blood", field = AchivementsFields.EventOrganizer, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18870811_1318192444944206_406413053_n.gif?fallback=1&oh=5dde0c7e8481b2fe0b73760e62461ae4&oe=5937430C"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 10 Events", minVal = 10, name = "10 Events", field = AchivementsFields.EventOrganizer, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928408_1318193581610759_1386440901_n.gif?fallback=1&oh=d300f368d2f2348f2c57be954c51595c&oe=59377FAD"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 100 Events", minVal = 100, name = "100 Events", field = AchivementsFields.EventOrganizer, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18835426_1318194081610709_276027581_n.gif?fallback=1&oh=618cf01fcd08864632ae974f3baf49a3&oe=593887FB"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 1000 Events", minVal = 1000, name = "1000 Events", field = AchivementsFields.EventOrganizer, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944808_1318194538277330_1016204430_n.gif?fallback=1&oh=dc492ecfd9f8f9deb84acf103c8f9802&oe=5937CBF0"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Looser", minVal = 1, name = "Be 2nd in Tournament", field = AchivementsFields.TournamentLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18982987_1318203178276466_1467667196_n.jpg?oh=54d230fc16030201b5207d737fc1ce47&oe=5937646E"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Common Looser", minVal = 10, name = "Be 2nd 10 Times in Tournament", field = AchivementsFields.TournamentLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18985485_1318203184943132_709673934_n.jpg?oh=584437eb1bf61edc420d7743ef8ff62c&oe=59387674"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Epic Looser", minVal = 100, name = "Be 2nd 100 Times in Tournament", field = AchivementsFields.TournamentLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945081_1318203174943133_1572076980_n.jpg?oh=9b117d2938966306186fef0ec3adcef3&oe=59379F8C"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Legendary Looser", minVal = 1000, name = "Be 2nd 1000 Times in Tournament", field = AchivementsFields.TournamentLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944832_1318203181609799_1530776702_n.jpg?oh=0b69a803a22639ec12ced526dd58a567&oe=593749C2"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Looser", minVal = 1, name = "Be 2nd in Sparring", field = AchivementsFields.SparringLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18870866_1318206461609471_166229470_n.png?oh=86a61a8032b6a81e41973cff4e702277&oe=59388478"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Common Looser", minVal = 10, name = "Be 2nd 10 Times in Sparring", field = AchivementsFields.SparringLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945159_1318206451609472_573435375_n.png?oh=3e08e1686b329f6a22637d1169240955&oe=59376F6D"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Epic Looser", minVal = 100, name = "Be 2nd 100 Times in Sparring", field = AchivementsFields.SparringLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944804_1318206458276138_1667445924_n.png?oh=b1ee3972b7de217705544692545a94bc&oe=59376D36"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Legendary Looser", minVal = 1000, name = "Be 2nd 1000 Times in Sparring", field = AchivementsFields.SparringLooser, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928449_1318206441609473_755742953_n.png?oh=4f7514951e4501d9615099f0c2442c9b&oe=5937B8A1"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place", minVal = 1, name = "Be 3rd in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18871558_1318208778275906_1902796781_n.png?oh=e0edbd9fa0d26557d2fa5d05a1e24d0b&oe=59379430"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 10 Times", minVal = 10, name = "Be 3rd 10 Times in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18985288_1318208764942574_654729028_n.png?oh=add4b1c525c99eb0044695620a4c5efd&oe=593765A6"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 100 Times", minVal = 100, name = "Be 3rd 100 Times in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928538_1318208771609240_1777517144_n.png?oh=a28af3610c70175c3cbd31bc72beb4c7&oe=59388C4B"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 1000 Times", minVal = 1000, name = "Be 3rd 1000 Times in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945241_1318208774942573_469468490_n.png?oh=ea40293741ed37142e8dad497160c4f9&oe=59378CF2"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login once", minVal = 1, name = "First Login", field = AchivementsFields.Login, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945061_1318216384941812_520512431_n.jpg?oh=22f6e8aa556c082926ae8d0f6df13ee8&oe=59388EFE"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 10 Times", minVal = 10, name = "Login 10 Times", field = AchivementsFields.Login, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944397_1318216374941813_1836719957_n.jpg?oh=6244382577a5782dc70bf40a964beff1&oe=593880B9"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 100 Times", minVal = 100, name = "Login 100 Times", field = AchivementsFields.Login, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928486_1318216381608479_711615173_n.jpg?oh=f4098eafe2ee66dead297ff3d16ceda2&oe=5937A8E7"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 1000 Times", minVal = 1000, name = "Login 1000 Times", field = AchivementsFields.Login, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18902298_1318216388275145_744275952_n.jpg?oh=795b7ad16618592f156adada90e74827&oe=59377F8F"),



      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win 10 tournaments wihout any defeat", minVal = 10, name = "Never lose x10", field = AchivementsFields.NeverLoseTournament, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18903037_1318230991607018_729018384_n.png?oh=ad6c282afe81e2543c3bdeb03539cb41&oe=59375F01"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win 100 tournaments wihout any defeat", minVal = 100, name = "Never lose x100", field = AchivementsFields.NeverLoseTournament, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18982937_1318230998273684_66502341_n.png?oh=34831578a6c89adfe5d014d97cb05cba&oe=59388AFB"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win 1000 tournaments wihout any defeat", minVal = 1000, name = "Never lose x1000", field = AchivementsFields.NeverLoseTournament, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18985145_1318230994940351_586393124_n.png?oh=5d0a3884fb631ab682ac7f76698bec4a&oe=593775FB"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Battleship ranking", minVal = 1, name = "Battleship Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983067_1318236001606517_766717224_n.png?oh=f8ed5602d0f613dfd4b82928f89d6a4e&oe=593799E2", helper = "Battleship"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Battleship ranking", minVal = 2, name = "Battleship First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18870729_1318235998273184_1874436680_n.png?oh=d61aa0d31e6bc88e9b6bfddca1989a3e&oe=59387CFD", helper = "Battleship"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Battleship ranking", minVal = 3, name = "Battleship Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18985268_1318235994939851_539834247_n.png?oh=b04462f9dcb3d63bd34b8afce074c254&oe=59374B76", helper = "Battleship"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Checkers ranking", minVal = 1, name = "Checkers Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983357_1318237041606413_1422841653_n.png?oh=c61c270b804ece0cf2ca3dc6a9188f03&oe=593787E9", helper = "Checkers"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Checkers ranking", minVal = 2, name = "Checkers First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945070_1318237044939746_1135738470_n.png?oh=dc64587bf761600037d66524a7cc33ff&oe=593786CB", helper = "Checkers"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Checkers ranking", minVal = 3, name = "Checkers Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945064_1318237038273080_118031543_n.png?oh=db915b419f52aa2c556098462d44bcc4&oe=5937A9F8", helper = "Checkers"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Chess ranking", minVal = 1, name = "Chess Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945346_1318238704939580_1502701566_n.png?oh=a3c3f451c351c11590963eb2054cc2a6&oe=59378C55", helper = "Chess"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Chess ranking", minVal = 2, name = "Chess First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945115_1318238701606247_412087299_n.png?oh=b4b2bd9f3c80d836ebc9b50c5dd1924b&oe=59378207", helper = "Chess"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Chess ranking", minVal = 3, name = "Chess Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928216_1318238678272916_390439127_n.png?oh=3b3aae09afc54dd4027149ab7c734b2d&oe=5937B990", helper = "Chess"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Go ranking", minVal = 1, name = "Go Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944749_1318239678272816_2089466108_n.png?oh=8535ad03b0c655e860a4385789202276&oe=59379C22", helper = "Go"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Go ranking", minVal = 2, name = "Go First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/19021433_1318239681606149_1385079144_n.png?oh=423c4130b87644cd5c35d4611bb82a31&oe=59374A3C", helper = "Go"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Go ranking", minVal = 3, name = "Go Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/19021834_1318239674939483_1986008693_n.png?oh=802988d4b56e8ccd26bb44f797c30ac4&oe=59379603", helper = "Go"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Magic ranking", minVal = 1, name = "Magic Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983229_1318243414939109_1213281253_n.png?oh=163b482522988e3939a57f30bc290543&oe=59378584", helper = "Magic"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Magic ranking", minVal = 2, name = "Magic First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18870866_1318243401605777_445925880_n.png?oh=bc7727471e1d6cdad29329545548215d&oe=5937483E", helper = "Magic"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Magic ranking", minVal = 3, name = "Magic Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18985179_1318243404939110_917223339_n.png?oh=340e0d913859562a117961fbfdba795f&oe=593876A4", helper = "Magic"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Mahjong ranking", minVal = 1, name = "Mahjong Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18982991_1318245434938907_1510836077_n.png?oh=3739cd944b293d500512230b60db6ffc&oe=59374FB2", helper = "Mahjong"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Mahjong ranking", minVal = 2, name = "Mahjong First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928351_1318245431605574_1724642685_n.png?oh=937ec68f40731aba2b4a9cf9e3a5182c&oe=59388BD5", helper = "Mahjong"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Mahjong ranking", minVal = 3, name = "Mahjong Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945097_1318245438272240_1096767109_n.png?oh=ccf1e9050e5d8b8e9b5e2e41892a4606&oe=5937A347", helper = "Mahjong"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Monopoly ranking", minVal = 1, name = "Monopoly Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928162_1318248311605286_901516818_n.png?oh=7aa6e4eee3fac7e126c0a6818a7cb197&oe=593750B7", helper = "Monopoly"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Monopoly ranking", minVal = 2, name = "Monopoly First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/19021524_1318248314938619_1968360565_n.png?oh=c8f6b00d640b05af14cf2a92e40959e1&oe=59377C51", helper = "Monopoly"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Monopoly ranking", minVal = 3, name = "Monopoly Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983398_1318248308271953_242753316_n.png?oh=e7f27d989598fc2231d2e00c9e7f4707&oe=59387B5F", helper = "Monopoly"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Risk ranking", minVal = 1, name = "Risk Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928274_1318249458271838_218489062_n.png?oh=27fd3a811e9ecc1f84a9d6d20d3f8ca7&oe=59374F62", helper = "Risk"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Risk ranking", minVal = 2, name = "Risk First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18815876_1318249454938505_256511173_n.png?oh=8cac2291fa9a90c056463bbc3cf9c998&oe=59376A32", helper = "Risk"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Risk ranking", minVal = 3, name = "Risk Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18870884_1318249451605172_73251646_n.png?oh=f38239f875cc5ffb85b2539d8e3056f4&oe=5937B30D", helper = "Risk"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Scrabble ranking", minVal = 1, name = "Scrabble Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983320_1318255341604583_1648355062_n.png?oh=c1aeac852113a91bc2775271787465d8&oe=59377D41", helper = "Scrabble"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Scrabble ranking", minVal = 2, name = "Scrabble First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945319_1318255334937917_1284471704_n.png?oh=92c46091df79ca882763e942c81f50a2&oe=5937C66C", helper = "Scrabble"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Scrabble ranking", minVal = 3, name = "Scrabble Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18944395_1318255338271250_5392151_n.png?oh=b0396c28fb5f0e0449849600349ee463&oe=5937BD26", helper = "Scrabble"),

      achivements += Achivement(conditions = Conditions.Equals, description = "Have 1st place in Talisman ranking", minVal = 1, name = "Talisman Master", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18983126_1318256894937761_1459970995_n.png?oh=31fa162782089622e241536d964ccdc2&oe=59378DFD", helper = "Talisman"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 2nd place in Talisman ranking", minVal = 2, name = "Talisman First Officer", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18945388_1318256891604428_939293801_n.png?oh=024d214c6d6999a2117785ed5bb090e1&oe=59374708", helper = "Talisman"),
      achivements += Achivement(conditions = Conditions.Equals, description = "Have 3rd place in Talisman ranking", minVal = 3, name = "Talisman Navigator", field = AchivementsFields.Games, url = "https://scontent.fbud2-1.fna.fbcdn.net/v/t34.0-12/18928185_1318256888271095_492205753_n.png?oh=5a8c26175eecd2049a1a9a888e670885&oe=5937428A", helper = "Talisman")


    )

    db.run(query)
    println("Inserted\n")

    db.run(queries)

  }


}
