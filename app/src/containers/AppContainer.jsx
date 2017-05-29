import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { browserHistory, Router } from "react-router";
import { Provider, connect } from "react-redux";
import MainPreloader from "../components/MainPreloader";
import { data } from "../store/auth";
import { getGames } from "../store/games";

const propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    data: PropTypes.func.isRequired,
    getGames: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    data,
    getGames
};

const mapStateToProps = () => ({});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class AppContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            initialized: false
        };
    }

    componentDidMount() {
        this.props.data(() => {
            this.setState({
                initialized: true
            });
        });

        this.props.getGames();
    }

    render() {
        const { routes, store } = this.props;
        const { initialized } = this.state;

        return initialized ? (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {routes}
                </Router>
            </Provider>
        ) : (
            <MainPreloader />
        );
    }
}

AppContainer.propTypes = propTypes;

export default enhance(AppContainer);
