import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Match.scss";
import {List, ListItem, ListItemAction, ListItemContent} from "react-mdl/lib/List";
import {Checkbox} from "react-mdl/lib";

const propTypes = {
  host: PropTypes.string.isRequired,
  guest: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
  setWinner: PropTypes.func.isRequired
};

const defaultProps = {};

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radiosDisabled: this.props.winner != "0",
      hostRadioValue: this.props.winner == "1" ? 1 : 0,
      guestRadioValue: this.props.winner == "-1" ? 1 : 0
    };
    this.winCallback = this.winCallback.bind(this)
    this.winNokCallback = this.winNokCallback.bind(this)
    this.win = this.win.bind(this)
  }

  win = (winner) => {
    this.props.setWinner({winner}, this.winCallback, this.winNokCallback)
  };

  winCallback() {
    this.setState({
      radiosDisabled: true
    });
  }

  winNokCallback() {
    this.setState({
      hostRadioValue: 0,
      guestRadioValue: 0
    });
  }

  render() {
    return (
      <div>
        <List style={{width: '300px'}}>
          <ListItem>
            <ListItemContent avatar="person">{this.props.host}</ListItemContent>
            <ListItemAction>
              <Checkbox
                checked={this.state.hostRadioValue == 1}
                onChange={(e) => this.win(this.props.host)}
                disabled={this.state.radiosDisabled}/>
            </ListItemAction>
          </ListItem>
          <ListItem>
            <ListItemContent avatar="person">{this.props.guest}</ListItemContent>
            <ListItemAction>
              <Checkbox
                checked={this.state.guestRadioValue == 1}
                onChange={(e) => this.win(this.props.guest)}
                disabled={this.state.radiosDisabled}/>
            </ListItemAction>
          </ListItem>
        </List>
        <br/>
      </div>
    )
  }
}

Match.propTypes = propTypes;
Match.defaultProps = defaultProps;

export default Match;
