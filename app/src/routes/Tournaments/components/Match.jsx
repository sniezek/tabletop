import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Match.scss";
import {List, ListItem, ListItemAction, ListItemContent} from "react-mdl/lib/List";
import {Checkbox} from "react-mdl/lib";

const propTypes = {
  host: PropTypes.object.isRequired,
  guest: PropTypes.object.isRequired,
  winner: PropTypes.string.isRequired,
  setWinner: PropTypes.func.isRequired
};

const defaultProps = {};

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radiosDisabled: this.props.winner != "0",
      hostCheckboxValue: this.props.winner == "1" ? 1 : 0,
      guestCheckboxValue: this.props.winner == "-1" ? 1 : 0
    };
    this.winCallback = this.winCallback.bind(this)
    this.winNokCallback = this.winNokCallback.bind(this)
    this.win = this.win.bind(this)
  }

  win = (winner) => {
    this.props.setWinner(winner, () => this.winCallback(winner === this.props.host), this.winNokCallback)
  };

  winCallback(hostWon) {
    this.setState({
      hostCheckboxValue: hostWon ? 1 : 0,
      guestCheckboxValue: hostWon ? 0 : 1,
      radiosDisabled: true
    });
  }

  winNokCallback() {
    this.setState({
      hostCheckboxValue: 0,
      guestCheckboxValue: 0
    });
  }

  render() {
    return (
      <div>
        <List style={{width: '300px'}}>
          <ListItem>
            <ListItemContent avatar="person">{this.props.host["username"]}</ListItemContent>
            <ListItemAction>
              <Checkbox
                checked={this.state.hostCheckboxValue == 1}
                onChange={(e) => this.win(this.props.host)}
                disabled={this.state.radiosDisabled}/>
            </ListItemAction>
          </ListItem>
          <ListItem>
            <ListItemContent avatar="person">{this.props.guest["username"]}</ListItemContent>
            <ListItemAction>
              <Checkbox
                checked={this.state.guestCheckboxValue == 1}
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
