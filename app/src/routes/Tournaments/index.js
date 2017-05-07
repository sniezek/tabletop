const TournamentRoute = store => ({
    path: "/tournament",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const LoginView = require("./components/Tournament").default;
            cb(null, LoginView);
        }, "tournament");
    }
});


export { TournamentRoute };

