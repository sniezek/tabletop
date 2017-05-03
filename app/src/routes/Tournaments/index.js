const TournamentRoute = store => ({
    path: "/tournament",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const LoginView = require("./components/Tournament").default;
            cb(null, LoginView);
        }, "tournament");
    }
});

const TournamentResultsRoute = store => ({
    path: "/tournament-results",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const LoginView = require("./components/TournamentResultsView").default;
            cb(null, LoginView);
        }, "tournament-results");
    }
});

export { TournamentRoute, TournamentResultsRoute };

