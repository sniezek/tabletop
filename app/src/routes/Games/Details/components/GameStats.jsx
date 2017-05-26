import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell, Card, CardTitle, CardText, Icon, CardActions } from "react-mdl/lib";
import "./GameDetails.scss";

const propTypes = {
    gameStats: PropTypes.object.isRequired
};


const enhance = pure;

export const GameStats = gameStats => (
    <div>
        <Grid style={{ margin: "auto" }}>
            <Cell className="cardContainer" shadow={1} col={8} tablet={8} phone={4}>
                <Card shadow={0} className="width100" >
                    <span>{gameStats.sparringsCount}</span>
                </Card>
            </Cell>
        </Grid>

    </div>
);

GameStats.propTypes = propTypes;

export default enhance(GameStats);
