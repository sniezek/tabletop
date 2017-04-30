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
              {this.props.gamesList.map(game =>
                <section key={game.name}  className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                      <header className="tileImage section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--blue-grey-50 mdl-color-text--white">
                      </header>
                        <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
                          <div className="mdl-card__supporting-text">
                            <h4>{game.name}</h4>


                            <div className="gameSettings">
                              <span><i className="material-icons">group</i> {game.minPlayers} - {game.maxPlayers} </span>
                            </div>

                            <div className="gameDescription">
                              {game.description}
                            </div>

                          </div>
                          <div className="mdl-card__actions">
                            <a href="#" className="mdl-button">Details</a>
                          </div>
                        </div>

                </section>
              )}
            </div>
        );
    }
}

GamesContainer.propTypes = propTypes;
GamesContainer.defaultProps = defaultProps;

export default enhance(GamesContainer);
