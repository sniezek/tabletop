import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameStats } from "../../../../store/games";
import GameStats from "../components/GameStats";

const propTypes = {
    gameStats: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    gameStats: null
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getGameStats: dispatch(getGameStats(ownProps.router.params.name))
});

const mapStateToProps = state => ({
    gameStats: state.games.gameStats
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class StatisticsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.gameStats = this.getGameStats.bind(this);
    }

    getGameStats() {
    }

    render() {
        return (
            <GameStats gameStats={this.props.gameStats} />);
    }
}

StatisticsContainer.propTypes = propTypes;
StatisticsContainer.defaultProps = defaultProps;

export default enhance(StatisticsContainer);
