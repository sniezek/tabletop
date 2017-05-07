import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTournamentTypes } from "../../../store/tournament";

const propTypes = {
    tournamentTypesList: PropTypes.array
};

const defaultProps = {
    tournamentTypesList: []
};

const mapDispatchToProps = dispatch => ({
    getTournamentTypes: getTournamentTypes(dispatch)
});

const mapStateToProps = (state) => {
    if (state.tournament !== null) {
        return {
            tournamentTypesList: state.tournament.tournamentTypesList
        };
    }
    return {
        tournamentTypesList: []
    };
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentTypesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = null;
        this.getTournamentTypes = this.getTournamentTypes.bind(this);
    }

    getTournamentTypes() {
    }

    render() {
        return (
            <div className="gamesList">
                {this.props.tournamentTypesList.map(tournament =>
                    <section key={tournament.name} className="gameSection section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                        <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
                            <div className="mdl-card__supporting-text">
                                <h4>{tournament.name}</h4>
                                <h7>{tournament.eliminating ? "ELIMINATING  " : "NON-ELIMINATING"}</h7>


                                <div className="gameSettings">
                                    <span><i className="material-icons">group</i> {tournament.minPlayers} - {tournament.maxPlayers} </span>
                                </div>

                                <div className="gameDescription">
                                    {tournament.description}
                                </div>

                            </div>
                            <div className="mdl-card__actions">
                                {/* add it in the future*/}
                                {/* <a href="#" className="mdl-button">Details</a>    */}

                                {/* 'Start tournament' is a temporary button for demo*/}
                                <a href="#" className="mdl-button">Start tournament</a>
                            </div>
                        </div>

                    </section>
        )}
            </div>
        );
    }

}

TournamentTypesContainer.propTypes = propTypes;
TournamentTypesContainer.defaultProps = defaultProps;

export default enhance(TournamentTypesContainer);

