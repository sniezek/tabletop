import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemAction, ListItemContent } from "react-mdl/lib/List";
import { Checkbox } from "react-mdl/lib";
import "./Match.scss";

const propTypes = {
    host: PropTypes.object.isRequired,
    guest: PropTypes.object.isRequired,
    winner: PropTypes.number.isRequired,
    hostResult: PropTypes.number.isRequired,
    guestResult: PropTypes.number.isRequired,
    win: PropTypes.func.isRequired,
    creator: PropTypes.object,
    currentUser: PropTypes.object
};

const defaultProps = {
    currentUser: null
};

class Match extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
          winner: this.props.winner
        }
    }

  componentWillReceiveProps(nextProps) {
    this.setState({
      winner: nextProps.winner
    })
  }

    render() {
        let players = [
          {player: this.props.host, checked: this.state.winner === 1, result: this.props.hostResult},
          {player: this.props.guest, checked: this.state.winner === -1, result: this.props.guestResult}];
        return (
            <div>
                <List className="match-list">
                  {players.map((object,i) =>
                    <ListItem twoLine key={i}>
                      <ListItemContent avatar="person" subtitle={`${object.result} wins so far`}>{object.player.username}</ListItemContent>
                      <ListItemAction>
                        <Checkbox
                          checked={object.checked}
                          onChange={e => this.props.win(object.player)}
                          disabled={this.state.winner !== 0 || this.props.currentUser === null || this.props.currentUser.name !== this.props.creator.username}
                        />
                      </ListItemAction>
                    </ListItem>
                  )}
                </List>
                <br />
            </div>
        );
    }
}

Match.propTypes = propTypes;
Match.defaultProps = defaultProps;

export default Match;
