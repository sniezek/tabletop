import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemAction, ListItemContent } from "react-mdl/lib/List";
import { Checkbox } from "react-mdl/lib";
import "./Match.scss";

const propTypes = {
    host: PropTypes.object.isRequired,
    guest: PropTypes.object.isRequired,
    winner: PropTypes.number.isRequired,
    win: PropTypes.func.isRequired
};

const defaultProps = {};

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
        let players = [{player: this.props.host, checked: this.state.winner === 1}, {player: this.props.guest, checked: this.state.winner === -1}];
        return (
            <div>
                <List style={{ width: "300px" }}>
                  {players.map((object,i) =>
                    <ListItem key={i}>
                      <ListItemContent avatar="person">{object.player.username}</ListItemContent>
                      <ListItemAction>
                        <Checkbox
                          checked={object.checked}
                          onChange={e => this.props.win(object.player)}
                          disabled={this.state.winner !== 0}
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
