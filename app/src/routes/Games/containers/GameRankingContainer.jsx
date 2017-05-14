import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameRanking } from "../../../store/games";
import GameRanking from "../components/GameRanking";

const propTypes = {
    router: PropTypes.object.isRequired,
    gameRankingList: PropTypes.array
};

const defaultProps = {
    gameRankingList: []
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getGameRanking: dispatch(getGameRanking(ownProps.router.params.name))
});

const mapStateToProps = state => ({
    gameRankingList: state.games.gameRankingList
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameRankingContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGameRanking = this.getGameRanking.bind(this);
    }

    getGameRanking() {
    }

    render() {
        return (
            <GameRanking ranking={this.props.gameRankingList} />);
    }
}

GameRankingContainer.propTypes = propTypes;
GameRankingContainer.defaultProps = defaultProps;

export default enhance(GameRankingContainer);
