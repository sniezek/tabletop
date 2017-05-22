import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TournamentFinalResultsContainer from "../containers/TournamentFinalResultsContainer";
import TournamentStatusContainer from "../containers/TournamentStatusContainer";


const propTypes = {
  tournamentId: PropTypes.number,
  finishTournament: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

const defaultProps = {
};

class TournamentProcess extends PureComponent {
  constructor(props) {
    super(props);
    this.finishTournament = this.finishTournament.bind(this);
    this.state = {
      tournamentFinished: false
    };
  }

  finishTournament = () => {
    this.props.finishTournament();
    this.setState({
      tournamentFinished: true
    });
  };

  render() {
    return (
      <div>
        { this.state.tournamentFinished ? (
          <TournamentFinalResultsContainer
            tournamentId={this.props.tournamentId}
          />
        ) : (
          <TournamentStatusContainer
            tournamentId={this.props.tournamentId}
            finishTournament={this.finishTournament}
            router={this.props.router}
          />
        )
        }
      </div>

    );
  }
}

TournamentProcess.propTypes = propTypes;
TournamentProcess.defaultProps = defaultProps;

export default TournamentProcess;
