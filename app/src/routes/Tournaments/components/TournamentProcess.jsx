import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TournamentFinalResultsContainer from "../containers/TournamentFinalResultsContainer";
import TournamentStatus from "./TournamentStatus";


const propTypes = {
    tournamentId: PropTypes.number,
    tournamentName: PropTypes.string,
    pairs: PropTypes.arrayOf(PropTypes.shape({
        host: PropTypes.object.isRequired,
        guest: PropTypes.object.isRequired,
        winner: PropTypes.number.isRequired
    })),
    setWinner: PropTypes.func.isRequired,
    nextRound: PropTypes.func.isRequired,
    finishTournament: PropTypes.func.isRequired,
    displayFinalResults: PropTypes.bool.isRequired,
    toggleFinalResults: PropTypes.func.isRequired
};

const defaultProps = {
};

class TournamentProcess extends PureComponent {
    constructor(props) {
        super(props);
        this.finishTournament = this.finishTournament.bind(this);
        this.state = {
            tournamentFinished: false
        };
    }

    finishTournament = () => {
        this.props.finishTournament();
        this.setState({
            tournamentFinished: true
        });
    };

    render() {
        return (
            <div>
              { this.state.tournamentFinished ? (
                  <TournamentFinalResultsContainer
                    tournamentId={this.props.tournamentId}
                  />
                ) : (
                  <TournamentStatus
                    tournamentId={this.props.tournamentId}
                    tournamentName={this.props.tournamentName}
                    pairs={this.props.pairs}
                    setWinner={this.props.setWinner}
                    nextRound={this.props.nextRound}
                    finishTournament={this.finishTournament}
                    displayFinalResults={this.props.displayFinalResults}
                  />
                )
              }
            </div>

        );
    }
}

TournamentProcess.propTypes = propTypes;
TournamentProcess.defaultProps = defaultProps;

export default TournamentProcess;
