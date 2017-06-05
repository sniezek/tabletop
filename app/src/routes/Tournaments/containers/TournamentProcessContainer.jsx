import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {finishTournament} from "../../../store/tournament";
import TournamentProcess from "../components/TournamentProcess.jsx";

const propTypes = {
  router: PropTypes.object.isRequired,
  finishTournament: PropTypes.func.isRequired
};

const defaultProps = {};

const mapDispatchToProps = dispatch => ({
  finishTournament: (id) => {
    dispatch(finishTournament(id));
  }
});

const mapStateToProps = ({tournament}) => ({
  tournamentId: 3
});

const initialState = {};

class TournamentProcessContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
    this.finishTournament = this.finishTournament.bind(this);
  }

  finishTournament() {
    const tournamentId = this.props.tournamentId;
    this.props.finishTournament(tournamentId, ({ok}) => {
      if (ok) {
        this.props.displayFinalResults = true;
      }
    });
  }

  render() {
    return (
      <TournamentProcess
        tournamentId={this.props.tournamentId}
        router={this.props.router}
        finishTournament={this.finishTournament}
      />
    );
  }
}

TournamentProcessContainer.propTypes = propTypes;
TournamentProcessContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentProcessContainer);
