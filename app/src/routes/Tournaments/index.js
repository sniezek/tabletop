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
                const TournamentTypesView = require("./TournamentTypes/components/TournamentTypes").default;
                cb(null, TournamentTypesView);
            }, "tournament-types");
        }
    }, {
        path: "/tournament/demo",
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            const TournamentDemo= require("./TournamentDemo/components/TournamentDemo").default;
            cb(null, TournamentDemo);
          }, "tournament-demo");
        }
    }
    ]
});

