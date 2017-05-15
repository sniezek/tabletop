import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
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

const mapDispatchToProps = {};

class TournamentStatusFooterContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <TournamentStatusFooter
      tournamentId={this.props.tournamentId}
      pairsLength={this.props.pairsLength}
      nextRound={this.props.nextRound}
      finishTournament={this.props.finishTournament}
      giveUp={this.props.giveUp}
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
