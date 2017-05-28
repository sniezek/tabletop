export default store => ({
    path: "/tournament",
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                const TournamentView = require("./components/Tournament").default;
                cb(null, TournamentView);
            }, "tournament");
        }
    },
    childRoutes: [{
        path: "/tournament/types",
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                const TournamentTypesView = require("./TournamentTypes/components/TournamentTypes.jsx").default;
                cb(null, TournamentTypesView);
            }, "tournament-types");
        }
    }]
});

