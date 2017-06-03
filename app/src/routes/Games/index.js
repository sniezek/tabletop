
const GamesRoute = () => ({
    path: "/games",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const GamesView = require("./Index/components/GamesView").default;
            cb(null, GamesView);
        }, "games");
    }
});

const GameDetailsRoute = () => ({
    path: "/games/:name",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const GameDetailsView = require("./Details/components/GameDetailsView").default;
            cb(null, GameDetailsView);
        }, "games");
    }
});

export { GamesRoute, GameDetailsRoute };
