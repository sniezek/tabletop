import React, { Component } from "react";
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

class TournamentProcess extends Component {
    constructor(props) {
        super(props);
        this.nextRound = this.nextRound.bind(this);
        this.finishTournament = this.finishTournament.bind(this);
        this.toggleFinalResults = this.toggleFinalResults.bind(this);
        this.state = {tournamentFinished: false}
    }

    nextRound = () => {
        this.props.nextRound();
    };

    finishTournament = () => {
        this.props.finishTournament();
        this.setState({tournamentFinished:true});
    };

    toggleFinalResults = () => {
        this.props.toggleFinalResults();
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
                                />
                            </li>)}
                        </ol>
                        <div>
                            <Button colored onClick={() => this.nextRound()}>Next round</Button>
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
