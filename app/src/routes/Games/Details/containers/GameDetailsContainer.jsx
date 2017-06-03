import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameDetails } from "../../../../store/games";
import GameDetails from "../components/GameDetails";

const propTypes = {
    game: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    game: null
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getGameDetails: dispatch(getGameDetails(ownProps.router.params.name))
});

const mapStateToProps = state => ({
    game: state.games.game
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGameDetails = this.getGameDetails.bind(this);
    }

    getGameDetails() {
    }

    render() {
        return (
            <GameDetails game={this.props.game} />);
    }
}

GameDetailsContainer.propTypes = propTypes;
GameDetailsContainer.defaultProps = defaultProps;

export default enhance(GameDetailsContainer);
