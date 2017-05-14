import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl/lib";
import "./GameRanking.scss";

const propTypes = {
    ranking: PropTypes.object.isRequired
};

const enhance = pure;

export const GameRanking = ranking => (
    <Grid>
        <Cell className="rankingContainer" shadow={1} col={8} offsetDesktop={2}>
            <List className="width300">
                <ListItem twoLine>
                    <h3 className="placeHeader"> 1. </h3>
                    <ListItemContent avatar="person" subtitle="12010 points">Bryan Cranston</ListItemContent>
                </ListItem>
                <ListItem twoLine>
                    <h3 className="placeHeader"> 2. </h3>
                    <ListItemContent avatar="person" subtitle="11023 points">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem twoLine>
                    <h3 className="placeHeader"> 3. </h3>
                    <ListItemContent avatar="person" subtitle="1323 points">Bob Odenkirk</ListItemContent>
                </ListItem>
            </List>
        </Cell>
    </Grid>
);

GameRanking.propTypes = propTypes;

export default enhance(GameRanking);
