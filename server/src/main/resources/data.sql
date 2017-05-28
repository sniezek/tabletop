DELETE FROM tournament_player_result;
DELETE FROM tournament_users;
DELETE FROM swiss_users_played;
DELETE FROM swiss_player_result;
DELETE FROM user;
DELETE FROM tournament;
DELETE FROM swiss_tournament_process;
DELETE FROM tournament_process;

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
VALUES (3, 'ChessMaster Tournament', '2017-05-30 20:00:00.0', '2017-05-30 23:00:00.0', 'CHESS', 4, 16, 'SWISS', false, 13);

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

INSERT INTO location(id, address, lat, lng, name)
VALUES (2, 'os. Dywizjonu 303 23/8', 50.085782, 20.006929, 'Dywizjon');
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (2, 'Best chess event!', 'Super Chess Event', 2, 2);

INSERT INTO location(id, address, lat, lng, name)
VALUES (3, 'ul. Meissnera 6/26', 50.078947, 19.975193, 'Salon gier Chuck');
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (3, 'Monpoly is my life!', 'Monopoly games', 3, 3);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (1, '2017-06-18 18:00:00', 'INCORRECT', 'CHESS', 10, 2, '2017-06-18 10:00:00', 'CHESS');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (2, 1);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (2, '2017-06-19 21:00:00', 'INCORRECT', 'MONOPOLY', 20, 2, '2017-06-19 16:00:00', 'MONOPOLY');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (3, 2);