const LoginRoute = store => ({
    path: "login",
    onEnter: (nextState, replace) => {
        if (store.getState().user) {
            replace({
                pathname: "/"
            });
        }
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const LoginView = require("./components/LoginView").default;
            cb(null, LoginView);
        }, "login");
    }
});

const LogoutRoute = store => ({
    path: "logout",
    onEnter: (nextState, replace) => {
        if (!store.getState().user) {
            replace({
                pathname: "/"
            });
        }
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const LoginView = require("./components/LogoutView").default;
            cb(null, LoginView);
        }, "logout");
    }
});

const RegisterRoute = store => ({
    path: "register",
    onEnter: (nextState, replace) => {
        if (store.getState().user) {
            replace({
                pathname: "/"
            });
        }
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const RegisterView = require("./components/RegisterView").default;
            cb(null, RegisterView);
        }, "logout");
    }
});

const RemindRoute = store => ({
    path: "remind-password",
    onEnter: (nextState, replace) => {
        if (store.getState().user) {
            replace({
                pathname: "/"
            });
        }
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const RemindView = require("./components/RemindView").default;
            cb(null, RemindView);
        }, "logout");
    }
});

const ResetRoute = store => ({
    path: "/user/reset",
    onEnter: (nextState, replace) => {
        if (store.getState().user) {
            replace({
                pathname: "/"
            });
        }
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const ResetView = require("./components/ResetView").default;
            cb(null, ResetView);
        }, "logout");
    }
});

export { LoginRoute, LogoutRoute, RegisterRoute, RemindRoute, ResetRoute };
