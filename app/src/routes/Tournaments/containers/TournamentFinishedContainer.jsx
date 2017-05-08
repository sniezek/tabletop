import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFinishedTournaments } from "../../../store/tournament";

const propTypes = {
    finishedTournamentsList: PropTypes.array
};

const defaultProps = {
    finishedTournamentsList: []
};

const mapDispatchToProps = dispatch => ({
    getFinishedTournaments: getFinishedTournaments(dispatch)
});

const mapStateToProps = (state) => {
    if (state.tournament !== null) {
        return {
            finishedTournamentsList: state.tournament.finishedTournamentsList
        };
    }
    return {
        finishedTournamentsList: []
    };
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentFinishedContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = null;
        this.getFinishedTournaments = this.getFinishedTournaments.bind(this);
    }

    getFinishedTournaments() {
    }

    render() {
        return (
            <div className="gamesList">
                {this.props.finishedTournamentsList.map(finishedTournament =>
                    <section key={finishedTournament.id} className="gameSection section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                        <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
                            <div className="mdl-card__supporting-text">
                                <h5>GAME: {finishedTournament.game.name}</h5>
                                <h5>TOURNAMENT: {finishedTournament.tournamentType.name}</h5>
                                <h7>DATES: {finishedTournament.startDate} {finishedTournament.endDate}</h7>

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

TournamentFinishedContainer.propTypes = propTypes;
TournamentFinishedContainer.defaultProps = defaultProps;

export default enhance(TournamentFinishedContainer);
