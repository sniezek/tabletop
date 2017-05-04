import React, { Component } from "react";
import PropTypes from "prop-types";
import Match from "./Match";
import {Link} from "react-router";


const propTypes = {
  tournamentId: PropTypes.number,
  tournamentName: PropTypes.string,
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.string.isRequired,
    guest: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired
  })),
};

const defaultProps = {
};

class TournamentProcess extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tournament-results-list">
        <h1>Tournament matches </h1>
        <ol>
          {this.props.pairs.map((pair, i) => <li key={i}>
            <Match
              host={pair.host}
              guest={pair.guest}
              winner={pair.winner}/>
          </li>)}
        </ol>
        <div>
          <h1><Link to="/tournament-results">Finish tournament</Link></h1>
        </div>
      </div>
    )
  }
};

TournamentProcess.propTypes = propTypes;
TournamentProcess.defaultProps = defaultProps;

export default TournamentProcess;
