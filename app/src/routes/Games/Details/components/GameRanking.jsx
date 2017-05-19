import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl/lib";
import "./GameRanking.scss";

const propTypes = {
    ranking: PropTypes.array.isRequired
};

const enhance = pure;

export const GameRanking = ranking => (<Grid>
    <Cell className="rankingContainer" shadow={1} col={8}>
        <List className="width300">
            {ranking.ranking.map(({ username, points }, index) =>
                <ListItem twoLine key={username}>
                    <h3 className="placeHeader">{index + 1}.</h3>
                    <ListItemContent avatar="person" subtitle={points}>{username}</ListItemContent>
                </ListItem>
      )}
        </List>
    </Cell>
</Grid>
    );

GameRanking.propTypes = propTypes;

export default enhance(GameRanking);
