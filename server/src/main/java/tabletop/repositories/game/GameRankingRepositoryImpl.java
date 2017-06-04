package tabletop.repositories.game;

import com.querydsl.core.types.ExpressionBase;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import tabletop.controllers.game.GameRankingResponse;
import tabletop.controllers.game.GameStatisticsResponse;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.event.QEvent;
import tabletop.domain.event.QLocation;
import tabletop.domain.game.Game;
import tabletop.domain.match.QSparring;
import tabletop.domain.match.tournament.QTournament;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.ranking.QGameRanking;
import tabletop.domain.user.QUser;
import tabletop.domain.user.User;
import tabletop.repositories.match.SparringRepository;
import tabletop.repositories.match.tournament.TournamentRepository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Transactional
public class GameRankingRepositoryImpl implements GameRankingRepositoryCustom {
    private static final Long PAGE_SIZE = 5L;

    @Autowired
    private EntityManager entityManager;
    @Autowired
    private GameRankingRepository gameRankingRepository;

    @Autowired
    private TournamentRepository tournamentRepository;

    @Autowired
    private SparringRepository sparringRepository;

    @Override
    public List<GameRanking> getUsersRankingsForGame(List<User> users, Game game) {
        Set<Long> userIds = users.stream().map(User::getId).collect(Collectors.toSet());

        QGameRanking gameRanking = QGameRanking.gameRanking;
        Predicate predicate = gameRanking.userId.in(userIds).and(gameRanking.gameName.eq(game.getName()));

        return gameRankingRepository.findAll(predicate);
    }

    @Override
    public List<GameRankingResponse> getTopUsers(Game game, int pageNum) {
        QGameRanking gameRanking = QGameRanking.gameRanking;
        QUser user = QUser.user;
        JPAQuery<GameRankingResponse> query = new JPAQuery(entityManager);
        query.from(gameRanking, user)
                .where(gameRanking.userId.eq(user.id), gameRanking.gameName.eq(game.getName()));
        return query.select(Projections.bean(GameRankingResponse.class, user.username, gameRanking.points)).orderBy(gameRanking.points.desc()).limit(PAGE_SIZE).offset((pageNum - 1) * PAGE_SIZE).fetch();
    }

    @Override
    public GameStatisticsResponse getGameStatistics(Game game) {
        QEvent event = QEvent.event;
        QTournament tournament = QTournament.tournament;
        QSparring sparring = QSparring.sparring;
        QLocation location = QLocation.location;

        JPAQuery<Event> eventQuery = new JPAQuery(entityManager);
        eventQuery
                .from(event)
                .where(event.tournaments.any().game.eq(game).or(event.sparrings.any().game.eq(game)));
        Long eventsCount = eventQuery.select(event.id.countDistinct()).fetchFirst();

        Predicate tournamentPredicate = tournament.game.eq(game);
        Long tournamentCount = tournamentRepository.count(tournamentPredicate);

        Predicate sparringPredicate = sparring.game.eq(game);
        Long sparringCount = sparringRepository.count(sparringPredicate);

        JPAQuery<Location> locationQuery = new JPAQuery<>(entityManager);
        locationQuery
                .from(location, event)
                .where(location.id.eq(event.location.id).and(event.tournaments.any().game.eq(game).or(event.sparrings.any().game.eq(game))))
                .groupBy(location.id)
                .orderBy(event.countDistinct().desc());
        List<Location> topLocations = locationQuery.select(location).limit(5L).fetch();

        return new GameStatisticsResponse(sparringCount, tournamentCount, eventsCount, topLocations);
    }

    @Override
    public Long getRankingSize(Game game) {
        QGameRanking gameRanking = QGameRanking.gameRanking;
        QUser user = QUser.user;

        JPAQuery<GameRankingResponse> query = new JPAQuery<>(entityManager);

        query.from(gameRanking, user)
                .where(gameRanking.userId.eq(user.id), gameRanking.gameName.eq(game.getName()));

        return query.fetchCount();
    }
}
