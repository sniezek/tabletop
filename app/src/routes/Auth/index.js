import { injectReducer } from "../../store/reducers";

const LoginRoute = store => ({
    path: "login",
    onEnter: (nextState, replace) => {
        if (store.getState().user) {
            replace({
                pathname: "/"
            });
        }
    },
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const LoginView = require("./components/LoginView").default;
            const reducer = require("./modules/Auth").default;

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: "user", reducer });

            /*  Return getComponent   */
            cb(null, LoginView);

            /* Webpack named bundle   */
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
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const LoginView = require("./components/LogoutView").default;
            const reducer = require("./modules/Auth").default;

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: "user", reducer });

            /*  Return getComponent   */
            cb(null, LoginView);

            /* Webpack named bundle   */
        }, "logout");
    }
});

export { LoginRoute, LogoutRoute };
