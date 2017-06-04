import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {giveUp, nextRound} from "../../../store/tournament";
import TournamentStatusFooter from "../components/TournamentStatusFooter";

const propTypes = {
  tournamentId: PropTypes.number,
  pairsLength: PropTypes.number.isRequired,
  nextRound: PropTypes.func.isRequired,
  finishTournament: PropTypes.func.isRequired,
  giveUp: PropTypes.func.isRequired,
  matchesFinished: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
  creator: PropTypes.object,
  isCurrentUserParticipant: PropTypes.bool,
  router: PropTypes.object.isRequired
};

const defaultProps = {};

const mapStateToProps = ({user, tournament}) => ({
  currentUser: user,
  creator: tournament.creator,
  isCurrentUserParticipant: tournament.isCurrentUserParticipant
});

const mapDispatchToProps = dispatch => ({
  nextRound: (id, callback) => {
    dispatch(nextRound(id, callback));
  },
  giveUp: (id) => {
    dispatch(giveUp(id));
  }
});

class TournamentStatusFooterContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.nextRound = this.nextRound.bind(this);
    this.giveUp = this.giveUp.bind(this);
  }

  nextRound() {
    const tournamentId = this.props.tournamentId;
    this.props.nextRound(tournamentId, ({ok}) => {
    });
  }

  giveUp() {
    const tournamentId = this.props.tournamentId;
    this.props.giveUp(tournamentId);
  }

  render() {
    return <TournamentStatusFooter
      tournamentId={this.props.tournamentId}
      pairsLength={this.props.pairsLength}
      nextRound={this.nextRound}
      finishTournament={this.props.finishTournament}
      giveUp={this.giveUp}
      matchesFinished={this.props.matchesFinished}
      currentUser={this.props.currentUser}
      creator={this.props.creator}
      isCurrentUserParticipant={this.props.isCurrentUserParticipant}
      router={this.props.router}
    />
  }
}

TournamentStatusFooterContainer.propTypes = propTypes;
TournamentStatusFooterContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentStatusFooterContainer);
