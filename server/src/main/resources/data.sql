DELETE FROM tournament_player_result;
DELETE FROM tournament_users;
DELETE FROM swiss_users_played;
DELETE FROM swiss_player_result;
DELETE FROM user;
DELETE FROM tournament;
DELETE FROM swiss_tournament_process;
DELETE FROM tournament_process;
DELETE FROM game_ranking;

-- events
DELETE FROM location;
DELETE FROM event;
DELETE FROM event_tournaments;
DELETE FROM event_sparrings;
DELETE FROM sparring;
--

INSERT INTO user (id, username, password, email)
VALUES (1, 'Romero', '$2a$10$nnrqLHplDNisOTY1m1tHcuv6gCsULjyrVjNl9VpIZjDx/1pvQFLyO', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (2, 'Julianne', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (3, 'Kevin', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (4, 'Hector', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (5, 'Bob', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (6, 'Viktor', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (7, 'Zhao', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (8, 'William', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (9, 'Christos', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (10, 'Janette', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (11, 'Andrea', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (12, 'Oriol', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (13, 'Jan', '$2a$10$nnrqLHplDNisOTY1m1tHcuv6gCsULjyrVjNl9VpIZjDx/1pvQFLyO', 'user@user');
-- password Jan

INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (1, 'tournament1', '2016-12-16', '2016-12-18',  'CHESS', 2, 6, 'SWISS', false, 12);
INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (2, 'tournament2', '2017-05-10', '2017-05-16', 'CHESS', 2, 8, 'SWISS', false, 12);

INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (1, 1, 1, 10, 1);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (2, 1, 2, 9, 2);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (3, 1, 3, 8, 3);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (4, 1, 4, 1, 6);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (5, 1, 5, 5, 4);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (6, 1, 5, 3, 5);

INSERT INTO tournament_process(id, initialized)
VALUES (1, false);
INSERT INTO tournament_process(id, initialized)
VALUES (2, false);
INSERT INTO tournament_process(id, initialized)
VALUES (3, false);
INSERT INTO tournament_process(id, initialized)
VALUES (4, false);

INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (1, true, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (2, false, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (3, false, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (4, false, 2, null);

INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 2);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 3);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 4);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 5);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 6);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 7);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 8);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 9);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 10);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 1);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 2);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 3);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 4);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 5);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 6);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 1);

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (2, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (3, 2, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (4, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (5, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (6, 2, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (7, 2, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (8, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (9, 2, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (10, 2, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (1, 2, 0, null, 0, TRUE );

-- events
INSERT INTO location(id, address, lat, lng, name)
VALUES (1, 'ul. Marszalkowska 115 Warszawa', 52.2412402, 21.003438, 'Games Pub');
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (1, 'Best chess event!', 'Super Chess Event', 1, 13);

INSERT INTO tournament(id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (3, 'ChessMaster Tournament', '2017-05-30 20:00:00.0', '2017-05-30 23:00:00.0', 'CHESS', 4, 16, 'LADDER', false, 13);

INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 2);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 3);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 4);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 5);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 6);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 7);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 8);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 1);

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (2, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (3, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (4, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (5, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (6, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (7, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (8, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (1, 3, 0, null, 0, TRUE );

INSERT INTO tournament(id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (4, 'Chess Pro Tournament', '2017-05-30 20:30:00.0', '2017-05-30 22:00:00.0', 'CHESS', 2, 6, 'SWISS', false, 13);

INSERT INTO tournament_users(tournament_id, users_id)
VALUES (4, 11);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (4, 8);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (4, 9);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (4, 10);

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (11, 4, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (8, 4, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (9, 4, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (10, 4, 0, null, 0, TRUE );

INSERT INTO event_tournaments(event_id, tournaments_id)
VALUES (1, 3);
INSERT INTO event_tournaments(event_id, tournaments_id)
VALUES (1, 4);


--game rankings
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 10, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 98, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 12, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 37, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 65, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 1, 6);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 25, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 46, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 66, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 8, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 44, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 74, 6);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 25, 10);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 46, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 66, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 8, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 44, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 74, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 35, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 39, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 44, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Scrabble', 27, 9);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 2, 10);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 25, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 88, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 9, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 16, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 73, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 32, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 49, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 22, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Magic', 29, 9);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 8, 12);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 99, 11);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 15, 10);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 77, 9);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 189, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 30, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 47, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 20, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 69, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Checkers', 65, 3);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 65, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 48, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 41, 10);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 36, 9);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 19, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 37, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 98, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 11, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 12, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Talisman', 9, 3);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 84, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 45, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 16, 11);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 43, 9);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 12, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 84, 12);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 81, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 3, 10);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 12, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Go', 4, 3);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 63, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 19, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 48, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 73, 9);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 26, 10);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 15, 11);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 42, 12);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 75, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 73, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Mahjong', 86, 2);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 17, 12);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 7, 13);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 19, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 13, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 41, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 37, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 61, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 29, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 5, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Risk', 3, 8);
--
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 18, 12);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 14, 13);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 10, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 14, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 42, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 38, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 62, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 24, 6);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 46, 7);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 89, 8);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Battleship', 5, 11);

--locations
INSERT INTO location(id, address, lat, lng, name)
VALUES (2, 'os. Dywizjonu 303 23/8', 50.085782, 20.006929, 'Dywizjon');
INSERT INTO location(id, address, lat, lng, name)
VALUES (3, 'ul. Meissnera 6/26', 50.078947, 19.975193, 'Salon gier Chuck');
INSERT INTO location(id, address, lat, lng, name)
VALUES (4, 'ul. Dubois 33/35', 51.118346, 17.028938, 'Kawiarnia Hex');
INSERT INTO location(id, address, lat, lng, name)
VALUES (5, 'ul. Chwaliszewo 68', 52.408616, 16.942175, 'Kawroz Club');
INSERT INTO location(id, address, lat, lng, name)
VALUES (6, 'ul. Konrada Leczkowa 18', 54.379061, 18.618871, 'Pub Polufka');
INSERT INTO location(id, address, lat, lng, name)
VALUES (7, 'ul. Mariacka', 53.427607, 14.556759, 'Pub Exp');

--events
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (2, 'Chess mania!', 'Chess mania event', 2, 1);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (3, 'Monopoly is my life!', 'Monopoly games', 3, 2);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (4, 'Just playing some Scrabble', 'Scrabble: the gathering', 5, 7);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (5, 'Just playing some cards', 'Fantasy games rule', 4, 8);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (6, 'Checkers for all', 'Checkers lovers meetup', 6, 4);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (7, 'Bring pillows and blankets it is gonna be a long night', 'Adventure awaits', 4, 6);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (8, 'Superior minds gather around!', 'Go go go-rangers!', 7, 3);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (9, 'Not for amateurs', 'Mahjong Event', 6, 11);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (10, 'How much you wanna risk?', 'Risk campaign', 5, 5);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (11, 'Bring your own board or paper & pencil', 'Sea battles', 4, 9);
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (12, 'Whatever you like playing, play.', 'Board games of all sorts', 2, 2);

--sparrings
INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (1, '2017-06-18 18:00:00', 'INCORRECT', 'CHESS', 10, 2, '2017-06-18 10:00:00', 'Chess');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (2, 1);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (2, '2017-06-19 21:00:00', 'INCORRECT', 'MONOPOLY', 20, 2, '2017-06-19 16:00:00', 'Monopoly');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (3, 2);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (3, '2017-06-19 17:00:00', 'INCORRECT', 'CHESS', 10, 2, '2017-06-19 10:00:00', 'Chess');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (2, 3);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (4, '2017-06-19 18:00:00', 'INCORRECT', 'SCRABBLE', 20, 2, '2017-06-19 11:00:00', 'Scrabble');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (4, 4);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (5, '2017-06-19 18:00:00', 'INCORRECT', 'MAGIC', 18, 2, '2017-06-19 11:00:00', 'Magic');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (5, 5);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (6, '2017-06-10 18:00:00', 'INCORRECT', 'CHECKERS', 10, 2, '2017-06-10 16:00:00', 'Checkers');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (6, 6);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (7, '2017-06-20 23:00:00', 'INCORRECT', 'TALISMAN', 12, 2, '2017-06-20 16:00:00', 'Talisman');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (7, 7);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (8, '2017-06-20 20:00:00', 'INCORRECT', 'GO', 14, 2, '2017-06-20 16:00:00', 'Go');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (8, 8);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (9, '2017-06-21 20:00:00', 'INCORRECT', 'MAHJONG', 16, 4, '2017-06-21 15:00:00', 'Mahjong');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (9, 9);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (10, '2017-06-21 22:00:00', 'INCORRECT', 'RISK', 8, 4, '2017-06-21 18:00:00', 'Risk');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (10, 10);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (11, '2017-06-21 22:00:00', 'INCORRECT', 'BATTLESHIP', 8, 4, '2017-06-21 18:00:00', 'Battleship');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (11, 11);