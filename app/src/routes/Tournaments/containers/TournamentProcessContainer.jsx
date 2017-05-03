import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {nextRound, setWinner} from "../../../store/tournament";
import TournamentProcess from "../components/TournamentProcess.jsx";

const propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.string.isRequired,
    guest: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired
  })),
  tournamentId: PropTypes.string.isRequired,
  tournamentName: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  nextRound: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired
};

const defaultProps = {
  pairs: [
    {host: "Player1", guest: "Player2", winner: "1"},
    {host: "Player3", guest: "Player4", winner: "2"},
    {host: "Player5", guest: "Player6", winner: "0"}
  ],
  tournamentId: "21",
  tournamentName: "MyTournament"
};

const mapDispatchToProps = {
  nextRound,
  setWinner
};

const mapStateToProps = ({}) => ({});

const initialState = {};

class TournamentProcessContainer extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, initialState);

    this.nextRound = this.nextRound.bind(this);
    this.setWinner = this.setWinner.bind(this);
  }

  nextRound() {
    const tournamentId = this.state.tournamentId;

    this.props.nextRound({tournamentId}, ({ok}) => {
      if (!ok) {
        console.log("Passing To Next Round failed")
      }
    });
  }

  setWinner({player}) {
    const tournamentId = this.state.tournamentId;
    /* eslint-disable no-param-reassign */
    this.props.setWinner({tournamentId, player}, ({ok}) => {
      if (!ok) {
        console.log("Winner setting failed")
      }
    });
  }

  render() {
    return (
      <TournamentProcess
        tournamentName={this.props.tournamentName}
        tournamentId={this.props.tournamentId}
        pairs={this.props.pairs}
      />
    );
  }
}

TournamentProcessContainer.propTypes = propTypes;
TournamentProcessContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentProcessContainer);
