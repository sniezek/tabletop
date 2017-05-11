import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";


const propTypes = {
    game: PropTypes.object.isRequired
};

const enhance = pure;

export const GameDetails = game => (
    <div>To be implemented...{game.name}</div>
);

GameDetails.propTypes = propTypes;

export default enhance(GameDetails);
