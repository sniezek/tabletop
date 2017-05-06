import React, {Component} from "react";
import PropTypes from "prop-types";
import Match from "./Match";
import {Link} from "react-router";
import {Button} from "react-mdl/lib";


const propTypes = {
  tournamentId: PropTypes.number,
  tournamentName: PropTypes.string,
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.object.isRequired,
    guest: PropTypes.object.isRequired,
    winner: PropTypes.string.isRequired
  })),
  setWinner: PropTypes.func.isRequired,
  nextRound: PropTypes.func.isRequired
};

const defaultProps = {
};

class TournamentProcess extends Component {
  constructor(props) {
    super(props)
    this.nextRound = this.nextRound.bind(this)
  }

  nextRound = () => {
    this.props.nextRound()
  };

  render() {
    return (
      <div className="tournament-results-list">
        <h1>Tournament matches </h1>
        <ol>
          {this.props.pairs.map((pair, i) => <li key={i}>
            <Match
              host={pair.host}
              guest={pair.guest}
              winner={pair.winner}
              setWinner={this.props.setWinner}
              tournamentId={this.props.tournamentId}/>
          </li>)}
        </ol>
        <Button colored onClick={() => this.nextRound()}>Next round</Button>
        <div>
          <h1><Link to="/tournament-results">Finish tournament</Link></h1>
        </div>
      </div>
    )
  }
}

TournamentProcess.propTypes = propTypes;
TournamentProcess.defaultProps = defaultProps;

export default TournamentProcess;
