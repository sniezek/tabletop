import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setWinner} from "../../../store/tournament";
import Match from "../components/Match";

const propTypes = {
  host: PropTypes.object.isRequired,
  guest: PropTypes.object.isRequired,
  winner: PropTypes.number.isRequired,
  hostResult: PropTypes.number.isRequired,
  guestResult: PropTypes.number.isRequired,
  setWinner: PropTypes.func.isRequired,
  updateNextRoundButton: PropTypes.func.isRequired,
  creator: PropTypes.object,
  currentUser: PropTypes.object
};

const defaultProps = {};

const mapStateToProps = ({user, tournament}) => ({
  currentUser: user,
  creator: tournament.creator
});

const mapDispatchToProps = dispatch => ({
  setWinner: (id, winner, callback) => {
    dispatch(setWinner(id, winner, callback));
  }
});

class MatchContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.winCallback = this.winCallback.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.win = this.win.bind(this);
    this.state = {
      winner: this.props.winner
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.host !== nextProps.host || this.props.guest !== nextProps.guest) {
      this.setState({
        winner: nextProps.winner
      });
    }
  }

  setWinner(player, okCallback) {
    const tournamentId = this.props.tournamentId;
    this.props.setWinner(tournamentId, player, ({ok}) => {
      if (ok) {
        okCallback();
      }
    });
  }

  win = (winner) => {
    this.setWinner(winner, () => this.winCallback(winner === this.props.host));
  };

  winCallback(hostWon) {
    this.setState({
      winner: hostWon ? 1 : -1
    });
    this.props.updateNextRoundButton();
  }

  render() {
    return <Match
      host={this.props.host}
      guest={this.props.guest}
      winner={this.state.winner}
      hostResult={this.props.hostResult}
      guestResult={this.props.guestResult}
      win={this.win}
      creator={this.props.creator}
      currentUser={this.props.currentUser}
    />
  }
}

MatchContainer.propTypes = propTypes;
MatchContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(MatchContainer);
