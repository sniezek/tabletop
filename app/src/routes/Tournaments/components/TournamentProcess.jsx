import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Match from "./Match";
import { Link } from "react-router";
import { Button } from "react-mdl/lib";
import TournamentFinalResultsContainer from "../containers/TournamentFinalResultsContainer";


const propTypes = {
    tournamentId: PropTypes.number,
    tournamentName: PropTypes.string,
    pairs: PropTypes.arrayOf(PropTypes.shape({
        host: PropTypes.object.isRequired,
        guest: PropTypes.object.isRequired,
        winner: PropTypes.string.isRequired
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
        this.nextRound = this.nextRound.bind(this);
        this.finishTournament = this.finishTournament.bind(this);
        this.toggleFinalResults = this.toggleFinalResults.bind(this);
        this.updateNextRoundButton = this.updateNextRoundButton.bind(this);
        this.state = {
            tournamentFinished: false,
            matchesFinished: this.props.pairs.filter(pair => pair.winner != "0").length
        };
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            tournamentFinished: this.state.tournamentFinished,
            matchesFinished: nextProps.pairs.filter(pair => pair.winner != "0").length
        };
    }

    nextRound = () => {
        this.props.nextRound();
    };

    finishTournament = () => {
        this.props.finishTournament();
        this.setState({
            tournamentFinished: true,
            matchesFinished: this.state.matchesFinished
        });
    };

    toggleFinalResults = () => {
        this.props.toggleFinalResults();
    };

    updateNextRoundButton = () => {
        this.setState({
            tournamentFinished: this.state.tournamentFinished,
            matchesFinished: this.state.matchesFinished + 1
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
                    <div className="tournament-results-list">
                        <h1>Tournament matches </h1>
                        <ol>
                            {this.props.pairs.map((pair, i) => <li key={i}>
                                <Match
                                    host={pair.host}
                                    guest={pair.guest}
                                    winner={pair.winner}
                                    setWinner={this.props.setWinner}
                                    tournamentId={this.props.tournamentId}
                                    updateNextRoundButton={this.updateNextRoundButton}
                                />
                            </li>)}
                        </ol>
                        <div>
                            <Button
                                colored
                                onClick={() => this.nextRound()}
                                disabled={this.state.matchesFinished != this.props.pairs.length}
                            >Next round</Button>
                        </div>
                        <div>
                            <Button colored onClick={() => this.finishTournament()}>Finish tournament</Button>
                        </div>
                    </div>
                )}
            </div>

        );
    }
}

TournamentProcess.propTypes = propTypes;
TournamentProcess.defaultProps = defaultProps;

export default TournamentProcess;
