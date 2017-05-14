import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Button} from "react-mdl/lib";
import {Cell, Grid} from "react-mdl/lib/Grid";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "react-mdl/lib/Dialog";
import "./TournamentStatusFooter.scss";

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

class TournamentStatusFooter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openResignDialog: false
    };
    this.handleOpenResignDialog = this.handleOpenResignDialog.bind(this);
    this.handleCloseResignDialog = this.handleCloseResignDialog.bind(this);
    this.handleResign = this.handleResign.bind(this);
  }

  handleOpenResignDialog() {
    this.setState({
      openResignDialog: true
    });
  }

  handleCloseResignDialog() {
    this.setState({
      openResignDialog: false
    });
    const {router} = this.props;
    router.push("/");
  }

  handleResign() {
    this.props.giveUp(this.props.tournamentId);
    this.handleCloseResignDialog()
  }

  render() {
    return (
      <div style={{width: '100%', margin: 'auto', marginTop: 'initial'}}>
        <Grid className="demo-grid-ruler">
          <Cell col={6}>
            {
              this.props.currentUser !== null && this.props.currentUser.name === this.props.creator.username &&
              <Button
                colored
                onClick={() => this.props.nextRound()}
                disabled={this.props.matchesFinished !== this.props.pairsLength}
              >Next round</Button>
            }
          </Cell>
          <Cell col={6} style={{textAlign: "right"}}>
            {
              this.props.isCurrentUserParticipant &&
              <Button colored onClick={this.handleOpenResignDialog}>Give up</Button>
            }
            {
              this.props.currentUser !== null && this.props.currentUser.name === this.props.creator.username &&
              <Button colored onClick={() => this.props.finishTournament()}>Finish tournament</Button>
            }
          </Cell>
        </Grid>
        <Dialog
          className="resign-dialog"
          open={this.state.openResignDialog}>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent>
            <p>Remember that once You resign You will not be able to participate again.</p>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleResign}>Confirm</Button>
            <Button type='button' onClick={this.handleCloseResignDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TournamentStatusFooter.propTypes = propTypes;
TournamentStatusFooter.defaultProps = defaultProps;

export default TournamentStatusFooter;
