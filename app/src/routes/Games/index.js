
const GamesRoute = () => ({
    path: "/games",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const GamesView = require("./components/GamesView").default;
            cb(null, GamesView);
        }, "games");
    }
});

const GameDetailsRoute = () => ({
    path: "/games/:name",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const GameDetailsView = require("./components/GameDetailsView").default;
            cb(null, GameDetailsView);
        }, "games");
    }
});

export { GamesRoute, GameDetailsRoute };
