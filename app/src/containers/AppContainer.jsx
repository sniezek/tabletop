import React, { Component } from "react";
import PropTypes from "prop-types";
import { browserHistory, Router } from "react-router";
import { Provider } from "react-redux";

const propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

class AppContainer extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { routes, store } = this.props;

        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}

AppContainer.propTypes = propTypes;

export default AppContainer;
