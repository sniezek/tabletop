import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell, Card, CardTitle, CardText, Icon, CardActions } from "react-mdl/lib";
import "./GameDetails.scss";

const propTypes = {
    game: PropTypes.object.isRequired
};

const enhance = pure;

export const GameDetails = game => (
    <div>
        <Grid style={{ margin: "auto" }}>
            <Cell className="cardContainer" shadow={1} col={8} tablet={8} phone={4}>
                <Card shadow={0} className="width100" >
                    <CardTitle
                        className="detailsCardTitle"
                        style={{ background: `url(${game.game.bannerUrl}) center / cover` }}
                    >
                        {game.game.name}
                    </CardTitle>
                    <CardText>
                        <div>
                            {game.game.longDescription}
                        </div>
                    </CardText>
                    <CardActions border>
                        <span>Game parameters</span>
                        <div>
                            <span className="parameterIcon"><Icon name="group" />
                                Number of players: {game.game.minPlayers} - {game.game.maxPlayers}
                            </span>
                        </div>
                    </CardActions>
                </Card>
            </Cell>
        </Grid>

    </div>
);

GameDetails.propTypes = propTypes;

export default enhance(GameDetails);
