import GamesView from "./components/GamesView.jsx";

const GamesRoute = store => ({
    path: "/games",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const LoginView = require("./components/GamesView").default;
            cb(null, LoginView);
        }, "games");
    }
});


export default GamesRoute;
