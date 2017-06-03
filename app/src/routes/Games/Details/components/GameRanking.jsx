import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { List, ListItem, ListItemContent } from "react-mdl/lib";

import "./GameRanking.scss";

const propTypes = {
    ranking: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
};

const enhance = pure;

export const GameRanking = ({ ranking, page }) => (
    <List className="width300">
        {ranking.map(({ username, points }, index) =>
            <ListItem twoLine key={username}>
                <h3 className="placeHeader">{((page - 1) * 5) + index + 1}.</h3>
                <ListItemContent avatar="person" subtitle={points}>{username}</ListItemContent>
            </ListItem>
      )}
    </List>

    );

GameRanking.propTypes = propTypes;

export default enhance(GameRanking);
