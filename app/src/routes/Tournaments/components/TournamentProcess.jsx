import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button } from "react-mdl/lib";
import "./TournamentStatus.scss";
import MatchContainer from "../containers/MatchContainer";

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
    displayFinalResults: PropTypes.bool.isRequired
};

const defaultProps = {
};

class TournamentProcess extends PureComponent {
    constructor(props) {
        super(props);
        this.updateNextRoundButton = this.updateNextRoundButton.bind(this);
        this.state = {
            matchesFinished: this.props.pairs.filter(pair => pair.winner !== 0).length
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            matchesFinished: nextProps.pairs.filter(pair => pair.winner !== 0).length
        });
    }

    updateNextRoundButton = () => {
        this.setState({
            matchesFinished: this.state.matchesFinished + 1
        });
    };

    render() {
        return (
              <div className="tournament-results-list">
                  <h1>Tournament matches </h1>
                  <ol>
                      {this.props.pairs.map((pair, i) => <li className="tournament-process-list" key={i}>
                          <MatchContainer
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
                          onClick={() => this.props.nextRound()}
                          disabled={this.state.matchesFinished !== this.props.pairs.length || this.props.pairs.length === 0}
                      >Next round</Button>
                  </div>
              </div>
        );
    }
}

TournamentProcess.propTypes = propTypes;
TournamentProcess.defaultProps = defaultProps;

export default TournamentProcess;
