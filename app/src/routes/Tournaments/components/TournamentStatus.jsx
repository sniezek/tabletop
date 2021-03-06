import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MatchContainer from "../containers/MatchContainer";
import {Cell, Grid} from "react-mdl/lib/Grid";
import {Button} from "react-mdl/lib";
import "./TournamentStatus.scss";
import TournamentStatusFooterContainer from "../containers/TournamentStatusFooterContainer";

const propTypes = {
  tournamentId: PropTypes.number,
  tournamentName: PropTypes.string,
  pairs: PropTypes.arrayOf(PropTypes.shape({
    host: PropTypes.object.isRequired,
    guest: PropTypes.object.isRequired,
    hostResult: PropTypes.number.isRequired,
    guestResult: PropTypes.number.isRequired,
    winner: PropTypes.number.isRequired
  })),
  finishTournament: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  showTournament: PropTypes.func.isRequired,
  initialRound: PropTypes.func.isRequired
};

const defaultProps = {};

class TournamentStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.updateNextRoundButton = this.updateNextRoundButton.bind(this);
    this.initialRound = this.initialRound.bind(this);
    this.show = this.show.bind(this);
    this.state = {
      matchesFinished: this.props.pairs.filter(pair => pair.winner !== 0).length,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      matchesFinished: nextProps.pairs.filter(pair => pair.winner !== 0).length
    });
  }

  initialRound() {
    const tournamentId = 3;
    this.props.initialRound(tournamentId);
  }

  show() {
    this.props.showTournament(3);
    const {router} = this.props;
    router.push(`/tournament`);
  }

  updateNextRoundButton = () => {
    this.setState({
      matchesFinished: this.state.matchesFinished + 1
    });
  };

  render() {
    let i, j, chunk = 3;
    let columns = []
    for (i = 0, j = this.props.pairs.length; i < j; i += chunk) {
      columns.push(this.props.pairs.slice(i, i + chunk));
    }

    return (
      <div className="tournament-results-list">
        <h1 className="tournament-name-label">{this.props.tournamentName}</h1>
        <div style={{width: '80%', margin: 'auto', marginTop: 'initial'}}>
          {
            columns.map((pairs, i) =>
              <Grid key={i} className="demo-grid-ruler">
                {
                  pairs.map((pair, i) =>
                    <Cell key={i} col={4} shadow={2} className="match-main">
                      <MatchContainer
                        host={pair.host}
                        guest={pair.guest}
                        winner={pair.winner}
                        hostResult={pair.hostResult}
                        guestResult={pair.guestResult}
                        tournamentId={this.props.tournamentId}
                        updateNextRoundButton={this.updateNextRoundButton}
                        creator={this.props.creator}
                      />
                    </Cell>
                  )
                }
              </Grid>
            )
          }
        </div>
        <TournamentStatusFooterContainer
          tournamentId={this.props.tournamentId}
          pairsLength={this.props.pairs.length}
          finishTournament={this.props.finishTournament}
          matchesFinished={this.state.matchesFinished}
          router={this.props.router}
        />
        <Button colored onClick={() => this.initialRound()}>Init</Button>
        <Button colored onClick={() => this.show()}>Show</Button>
      </div>
    );
  }
}

TournamentStatus.propTypes = propTypes;
TournamentStatus.defaultProps = defaultProps;

export default TournamentStatus;
