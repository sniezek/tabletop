import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGames } from "../../../store/games";

const propTypes = {
    gamesList: PropTypes.array
};

const defaultProps = {
    gamesList: []
};

const mapDispatchToProps = dispatch => ({
    getGames: getGames(dispatch)
});

const mapStateToProps = (state) => {
    if (state.games !== null) {
        return {
            gamesList: state.games.gamesList
        };
    } else {
        return {
            gamesList: state.gamesList
        };
    }
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

class GamesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = null;

        this.getGames = this.getGames.bind(this);
    }

    getGames() {
/*        this.props.getGames(({ ok }) => {
            console.log("getGames w GamesContainer");
            if (!ok) {
                console.log("Getting list of games failed");
            }
        });*/
    }

    render() {
        return (

            <div className="gamesList">
                <h1>Games </h1>
                <ol>
                    {this.props.gamesList.map(game =>
                        <li key={game.name}>
                            {game.name}
                        </li>
                  )}
                </ol>
            </div>
        );
    }
}

GamesContainer.propTypes = propTypes;
GamesContainer.defaultProps = defaultProps;

export default enhance(GamesContainer);
