
const GamesRoute = () => ({
    path: "/games",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const GamesView = require("./components/GamesView").default;
            cb(null, GamesView);
        }, "games");
    }
});


export default GamesRoute;
