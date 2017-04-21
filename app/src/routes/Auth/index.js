import { injectReducer } from "../../store/reducers";

const injectAuthReducer = (store) => {
    /* eslint-disable global-require */
    const reducer = require("./modules/Auth").default;
    injectReducer(store, { key: "user", reducer });
};

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
            injectAuthReducer(store);
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
            injectAuthReducer(store);
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
            injectAuthReducer(store);
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
            injectAuthReducer(store);
            cb(null, RemindView);
        }, "logout");
    }
});

export { LoginRoute, LogoutRoute, RegisterRoute, RemindRoute };
