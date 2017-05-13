import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { initialRound, setWinner, nextRound, finishTournament } from "../../../store/tournament";
import TournamentProcess from "../components/TournamentProcess.jsx";

const propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.object.isRequired,
    guest: PropTypes.object.isRequired,
    winner: PropTypes.number.isRequired
  })),
  tournamentId: PropTypes.number.isRequired,
  tournamentName: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  nextRound: PropTypes.func.isRequired,
  initialRound: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
  finishTournament: PropTypes.func.isRequired,
  displayFinalResults: PropTypes.bool.isRequired,
  toggleFinalResults: PropTypes.func.isRequired
};

const defaultProps = {
  pairs: [],
  tournamentId: 1,
  tournamentName: "MyTournament",
  displayFinalResults: false
};

const mapDispatchToProps = dispatch => ({
  initialRound: (id) => {
    dispatch(initialRound(id));
  },
  setWinner: (id, winner, callback) => {
    dispatch(setWinner(id, winner, callback));
  },
  nextRound: (id, callback) => {
    dispatch(nextRound(id, callback));
  },
  finishTournament: (id) => {
    dispatch(finishTournament(id));
  },
  toggleFinalResults: () => {
  }
});
const mapStateToProps = ({tournament}) => ({
  pairs: tournament.pairs,
  tournamentId: 1
});

const initialState = {};

class TournamentProcessContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);

    this.nextRound = this.nextRound.bind(this);
    this.initialRound = this.initialRound.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.finishTournament = this.finishTournament.bind(this);
    this.toggleFinalResults = this.toggleFinalResults.bind(this);
  }

  componentWillMount() {
    this.initialRound();
  }

  nextRound() {
    const tournamentId = this.props.tournamentId;

    this.props.nextRound(tournamentId, ({ ok }) => {
      if (!ok) {
        console.log("Passing To Next Round failed!");
      }
    });
  }

  initialRound() {
    const tournamentId = this.props.tournamentId;
    this.props.initialRound(tournamentId, ({ ok }) => {
      if (!ok) {
        console.log("Fetching First Round failed");
      }
    });
  }

  setWinner(player, okCallback) {
    const tournamentId = this.props.tournamentId;
    this.props.setWinner(tournamentId, player, ({ ok }) => {
      if (ok) {
        okCallback();
      }
    });
  }

  finishTournament() {
    const tournamentId = this.props.tournamentId;
    this.props.finishTournament(tournamentId, ({ ok }) => {
      if (ok) {
        this.props.displayFinalResults = true;
      } else {
        console.log("Finish tournament failed");
      }
    });
  }

  toggleFinalResults() {

  }

  render() {
    return (
      <TournamentProcess
        tournamentName={this.props.tournamentName}
        tournamentId={this.props.tournamentId}
        pairs={this.props.pairs}
        setWinner={this.setWinner}
        nextRound={this.nextRound}
        finishTournament={this.finishTournament}
        displayFinalResults={this.props.displayFinalResults}
        toggleFinalResults={this.toggleFinalResults}
      />
    );
  }
}

TournamentProcessContainer.propTypes = propTypes;
TournamentProcessContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentProcessContainer);
