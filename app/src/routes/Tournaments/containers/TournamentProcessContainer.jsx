import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {initialRound, setWinner, nextRound} from "../../../store/tournament";
import TournamentProcess from "../components/TournamentProcess.jsx";

const propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.object.isRequired,
    guest: PropTypes.object.isRequired,
    winner: PropTypes.string.isRequired
  })),
  tournamentId: PropTypes.number.isRequired,
  tournamentName: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  nextRound: PropTypes.func.isRequired,
  initialRound: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired
};

const defaultProps = {
  pairs: [],
  tournamentId: 1,
  tournamentName: "MyTournament"
};

const mapDispatchToProps = dispatch => {
  return {
    initialRound: (id) => {
      dispatch(initialRound(id));
    },
    setWinner: (id, winner, callback) => {
      dispatch(setWinner(id, winner, callback));
    },
    nextRound: (id, callback) => {
      dispatch(nextRound(id, callback));
    },
  };
};
const mapStateToProps = (state) => {
  if (state.tournament != null) {
    return {
      pairs: state.tournament.pairs,
      tournamentId: 1
    };
  } else {
    return {
      pairs: [],
      tournamentId: 1
    };
  }
};
const initialState = {};

class TournamentProcessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);

    this.nextRound = this.nextRound.bind(this);
    this.initialRound = this.initialRound.bind(this);
    this.setWinner = this.setWinner.bind(this);
  }

  componentWillMount() {
    this.initialRound();
  }

  nextRound() {
    const tournamentId = this.props.tournamentId;

    this.props.nextRound(tournamentId, ({ok}) => {
      if (!ok) {
        console.log("Passing To Next Round failed!")
      }
    });
  }

  initialRound() {
    const tournamentId = this.props.tournamentId;
    this.props.initialRound(tournamentId, ({ok}) => {
      if (!ok) {
        console.log("Fetching First Round failed")
      }
    });
  }

  setWinner(player, okCallback, nokCallback) {
    const tournamentId = this.props.tournamentId;
    this.props.setWinner(tournamentId, player, ({ok}) => {
      if (ok) {
        okCallback()
      } else {
        nokCallback()
      }
    });
  }

  render() {
    return (
      <TournamentProcess
        tournamentName={this.props.tournamentName}
        tournamentId={this.props.tournamentId}
        pairs={this.props.pairs}
        setWinner={this.setWinner}
        nextRound={this.nextRound}
      />
    );
  }
}

TournamentProcessContainer.propTypes = propTypes;
TournamentProcessContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentProcessContainer);
