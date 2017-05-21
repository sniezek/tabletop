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
VALUES (0, 'Romero', '$2a$10$nnrqLHplDNisOTY1m1tHcuv6gCsULjyrVjNl9VpIZjDx/1pvQFLyO', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (1, 'Julianne', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (2, 'Kevin', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (3, 'Hector', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (4, 'Bob', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (5, 'Viktor', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (6, 'Zhao', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (7, 'William', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (8, 'Christos', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (9, 'Janette', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (10, 'Andrea', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (11, 'Oriol', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (12, 'Jan', '$2a$10$nnrqLHplDNisOTY1m1tHcuv6gCsULjyrVjNl9VpIZjDx/1pvQFLyO', 'user@user');
-- password Jan

INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (0, 'tournament1', '2016-12-16', '2016-12-18',  'CHESS', 2, 6, 'SWISS', false, 12);
INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (1, 'tournament2', '2017-05-10', '2017-05-16', 'CHESS', 2, 8, 'SWISS', false, 12);

INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (0, 0, 0, 10, 1);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (1, 0, 1, 9, 2);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (2, 0, 2, 8, 3);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (3, 0, 3, 1, 6);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (4, 0, 4, 5, 4);
INSERT INTO tournament_player_result(id, tournament, user, points, place)
VALUES (5, 0, 4, 3, 5);

INSERT INTO tournament_process(id, initialized)
VALUES (0, false);
INSERT INTO tournament_process(id, initialized)
VALUES (1, false);
INSERT INTO tournament_process(id, initialized)
VALUES (2, false);
INSERT INTO tournament_process(id, initialized)
VALUES (3, false);

INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (0, true, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (1, false, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (2, false, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (3, false, 2, null);

INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 1);
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
VALUES (1, 7);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 8);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 9);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (1, 0);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (0, 1);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (0, 2);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (0, 3);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (0, 4);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (0, 5);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (0, 0);

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (1, 1, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (2, 1, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (3, 1, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (4, 1, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (5, 1, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (6, 1, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (7, 1, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (8, 1, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (9, 1, 0, null, 0, TRUE);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (0, 1, 0, null, 0, TRUE );

-- events
INSERT INTO location(id, address, lat, lng, name)
VALUES (0, 'ul. Marszalkowska 115 Warszawa', 52.2412402, 21.003438, 'Games Pub');
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (0, 'Best chess event!', 'Super Chess Event', 0, 12);

INSERT INTO tournament(id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (2, 'ChessMaster Tournament', '2017-05-30 20:00:00.0', '2017-05-30 23:00:00.0', 'CHESS', 4, 16, 'SWISS', false, 12);

INSERT INTO tournament_users(tournament_id, users_id)
VALUES (2, 1);
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

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (1, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (2, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (3, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (4, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (5, 2, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (6, 2, 0, null, 0, TRUE );

INSERT INTO tournament(id, name, start_date, end_date, game, min_players, max_players, type, finished, creator_id)
VALUES (3, 'Chess Pro Tournament', '2017-05-30 20:30:00.0', '2017-05-30 22:00:00.0', 'CHESS', 2, 6, 'SWISS', false, 12);

INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 7);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 8);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 9);
INSERT INTO tournament_users(tournament_id, users_id)
VALUES (3, 10);

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (7, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (8, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (9, 3, 0, null, 0, TRUE );
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score, is_available)
VALUES (10, 3, 0, null, 0, TRUE );

INSERT INTO event_tournaments(event_id, tournaments_id)
VALUES (0, 2);
INSERT INTO event_tournaments(event_id, tournaments_id)
VALUES (0, 3);
--
