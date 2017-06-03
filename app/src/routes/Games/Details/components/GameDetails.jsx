import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell, Card, CardTitle, CardText, CardActions } from "react-mdl/lib";
import { FaHourglass3, FaChild, FaGroup, FaTicket, FaBolt, FaTag } from "react-icons/lib/fa";
import "./GameDetails.scss";

const propTypes = {
    game: PropTypes.object.isRequired
};

const enhance = pure;

function formatNumberOfPlayers(minPlayers, maxPlayers) {
    if (minPlayers === maxPlayers) {
        return maxPlayers;
    } else if (maxPlayers === -1) {
        return `${minPlayers}+`;
    }
    return `${minPlayers} - ${maxPlayers}`;
}


function lightUpRandomness(rate) {
    let i;
    const randomnessIndicator = [];
    for (i = 1; i <= 5; i += 1) {
        if (i <= rate) {
            randomnessIndicator.push(<FaTicket key={i} size={24} color="#80d4ff" />);
        } else {
            randomnessIndicator.push(<FaTicket key={i} size={24} />);
        }
    }

    return randomnessIndicator;
}

function lightUpDifficulty(rate) {
    let i;
    const randomnessIndicator = [];
    for (i = 1; i <= 5; i += 1) {
        if (i <= rate) {
            randomnessIndicator.push(<FaBolt key={i} size={24} color="#80d4ff" />);
        } else {
            randomnessIndicator.push(<FaBolt key={i} size={24} />);
        }
    }

    return randomnessIndicator;
}

function formatCategories(categories) {
    let i;
    const formatedCategories = [];
    for (i = 0; i < categories.length; i += 1) {
        if (i === categories.length - 1) {
            formatedCategories.push(<span key={categories[i].name}>{categories[i].name} </span>);
        } else {
            formatedCategories.push(<span key={categories[i].name}>{categories[i].name}, </span>);
        }
    }
    return formatedCategories;
}

export const GameDetails = game => (
    <div>
        <Grid style={{ margin: "auto" }}>
            <Cell className="cardContainer" shadow={1} col={8} tablet={8} phone={4}>
                <Card shadow={0} className="width100" >
                    <CardTitle
                        className="detailsCardTitle"
                        style={{ background: `url(${game.game.bannerUrl}) center / cover`, textShadow: "2px 2px grey" }}
                    >
                        {game.game.displayName}
                    </CardTitle>
                    <CardText>
                        <div>
                            {game.game.longDescription}
                        </div>
                    </CardText>
                    <CardActions border >
                        <span style={{ marginTop: "20px" }}>Game parameters</span>
                        <Grid>
                            <Cell col={6}>
                                <div>
                                    <span className="parameterIcon"><FaGroup size={24} />
                                        Number of players: {formatNumberOfPlayers(game.game.minPlayers, game.game.maxPlayers)}
                                    </span>
                                </div>
                                <div>
                                    <span className="parameterIcon"><FaHourglass3 size={24} />
                                        Play time: { game.game.time }
                                    </span>
                                </div>
                                <div>
                                    <span className="parameterIcon"><FaChild size={24} />
                                        Age: { game.game.minAge }+
                                    </span>
                                </div>
                                <div>
                                    <span className="parameterIcon"><FaTag size={24} />
                                        Category: {formatCategories(game.game.gameCategories).map(x => x)}
                                    </span>
                                </div>
                            </Cell>
                            <Cell col={6}>
                                <table>
                                    <tr>
                                        <td>
                                                Random chance:
                                            </td>
                                        <td>
                                            <span className="indicator">
                                                {lightUpRandomness(game.game.randomChance).map(x => x)}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                              Difficulty:
                                          </td>
                                        <td>
                                            <span className="indicator">
                                                {lightUpDifficulty(game.game.difficulty).map(x => x)}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </Cell>
                        </Grid>
                    </CardActions>
                </Card>
            </Cell>
        </Grid>

    </div>
);

GameDetails.propTypes = propTypes;

export default enhance(GameDetails);
