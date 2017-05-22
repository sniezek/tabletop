DELETE FROM tournament_player_result;
DELETE FROM tournament_users;
DELETE FROM swiss_users_played;
DELETE FROM swiss_player_result;
DELETE FROM user;
DELETE FROM tournament;
DELETE FROM swiss_tournament_process;
DELETE FROM tournament_process;
DELETE FROM event;
DELETE FROM sparring;
DELETE FROM event_sparrings;
DELETE FROM location;

INSERT INTO user (id, username, password, email)
VALUES (0, 'user0', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (1, 'user1', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (2, 'user2', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (3, 'user3', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (4, 'user4', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');
INSERT INTO user (id, username, password, email)
VALUES (5, 'user5', '$2a$10$ebyC4Z5WtCXXc.HGDc1Yoe6CLFzcntFmfse6/pTj7CeDY5I05w16C', 'user@user');

INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, results, finished)
VALUES (0, 'tournament1', '2016-12-16', '2016-12-18',  'CHESS', 2, 6, 'SWISS', 'results', false);
INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, results, finished)
VALUES (1, 'tournament2', '2017-05-10', '2017-05-16', 'CHESS', 2, 8, 'SWISS', 'results', false);

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

INSERT INTO tournament_process(id)
VALUES (0);
INSERT INTO tournament_process(id)
VALUES (1);

INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (0, true, 2, null);
INSERT INTO swiss_tournament_process(id, ranked, rounds, bye_user)
VALUES (1, false, 2, null);

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

INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score)
VALUES (1, 1, 0, null, 0);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score)
VALUES (2, 1, 0, null, 0);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score)
VALUES (3, 1, 0, null, 0);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score)
VALUES (4, 1, 0, null, 0);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score)
VALUES (5, 1, 0, null, 0);
INSERT INTO swiss_player_result(user_id, tournament_id, result, current_opponent_id, current_score)
VALUES (0, 1, 0, null, 0);

INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 10, 0);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 98, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 12, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 37, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 65, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Chess', 1, 5);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 25, 0);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 46, 1);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 66, 2);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 8, 3);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 44, 4);
INSERT INTO game_ranking(game_name, points, user_id)
VALUES ('Monopoly', 74, 5);

INSERT INTO location(id, address, lat, lng, name)
VALUES (0, 'os. Dywizjonu 303 23/8', 50.085782, 20.006929, 'Dywizjon');
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (0, 'Best chess event!', 'Super Chess Event', 0, 1);

INSERT INTO location(id, address, lat, lng, name)
VALUES (1, 'ul. Meissnera 6/26', 50.078947, 19.975193, 'Salon gier Chuck');
INSERT INTO event(id, description, name, location_id, organiser_id)
VALUES (1, 'Monpoly is my life!', 'Monopoly games', 1, 2);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (0, '2017-06-18 18:00:00', 'INCORRECT', 'CHESS', 10, 2, '2017-06-18 10:00:00', 'CHESS');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (0, 0);

INSERT INTO sparring(id, end_date, end_status, game, max_players, min_players, start_date, game_name)
VALUES (1, '2017-06-19 21:00:00', 'INCORRECT', 'MONOPOLY', 20, 2, '2017-06-19 16:00:00', 'MONOPOLY');
INSERT INTO event_sparrings(event_id, sparrings_id)
VALUES (1, 1);