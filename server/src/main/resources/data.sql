DELETE FROM tournament_final_result;
DELETE FROM user;
DELETE FROM tournament;

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

INSERT INTO tournament (id, start_date, end_date, game, min_players, max_players, tournament_type, results, finished)
VALUES (0, '2016-12-16', '2016-12-18',  'CHESS', 2, 6, 'SWISS', 'results', true);
INSERT INTO tournament (id, start_date, end_date, game, min_players, max_players, tournament_type, results, finished)
VALUES (1, '2017-05-10', '2017-05-16', 'CHESS', 2, 8, 'SWISS', 'results', false);

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