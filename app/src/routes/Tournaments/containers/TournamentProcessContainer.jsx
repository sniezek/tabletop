import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {initialRound, setWinner, nextRound} from "../../../store/tournament";
import TournamentProcess from "../components/TournamentProcess.jsx";

const propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.string.isRequired,
    guest: PropTypes.string.isRequired,
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
  pairs: [
    {host: "Player1", guest: "Player2", winner: "1"},
    {host: "Player3", guest: "Player4", winner: "2"},
    {host: "Player5", guest: "Player6", winner: "0"}
  ],
  tournamentId: 1,
  tournamentName: "MyTournament"
};

const mapDispatchToProps = dispatch => {
  return {
    initialRound: (id) => {
      dispatch(initialRound(id));
    },
    setWinner,
    nextRound
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
    const tournamentId = this.state.tournamentId;

    this.props.nextRound({tournamentId}, ({ok}) => {
      if (!ok) {
        console.log("Passing To Next Round failed")
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

  setWinner({player}) {
    const tournamentId = this.state.tournamentId;
    /* eslint-disable no-param-reassign */
    this.props.setWinner({tournamentId, player}, ({ok}) => {
      if (!ok) {
        console.log("Winner setting failed!")
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
