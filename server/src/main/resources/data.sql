DELETE FROM tournament_final_result;
DELETE FROM tournament_users;
DELETE FROM swiss_users_played;
DELETE FROM swiss_player_result;
DELETE FROM user;
DELETE FROM tournament;
DELETE FROM swiss_tournament_process;
DELETE FROM tournament_process;

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
VALUES (0, 'tournament1', '2016-12-16', '2016-12-18',  'CHESS', 2, 6, 'SWISS', 'results', true);
INSERT INTO tournament (id, name, start_date, end_date, game, min_players, max_players, type, results, finished)
VALUES (1, 'tournament2', '2017-05-10', '2017-05-16', 'CHESS', 2, 8, 'SWISS', 'results', false);

INSERT INTO tournament_final_result(id, tournament, user, points, place)
VALUES (0, 0, 0, 10, 1);
INSERT INTO tournament_final_result(id, tournament, user, points, place)
VALUES (1, 0, 1, 9, 2);
INSERT INTO tournament_final_result(id, tournament, user, points, place)
VALUES (2, 0, 2, 8, 3);
INSERT INTO tournament_final_result(id, tournament, user, points, place)
VALUES (3, 0, 3, 1, 6);
INSERT INTO tournament_final_result(id, tournament, user, points, place)
VALUES (4, 0, 4, 5, 4);
INSERT INTO tournament_final_result(id, tournament, user, points, place)
VALUES (5, 0, 4, 3, 5);

INSERT INTO tournament_process(id)
VALUES (0);
INSERT INTO tournament_process(id)
VALUES (1);

INSERT INTO swiss_tournament_process(id, ranked, bye_user)
VALUES (0, true, null);
INSERT INTO swiss_tournament_process(id, ranked, bye_user)
VALUES (1, false, null);

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