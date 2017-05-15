import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ListItem from "./ListItem.jsx";
import StepWrapper from "./StepWrapper.jsx";

const propTypes = {
};

const enhance = pure;

const SparringsStep = () => (
    <StepWrapper>
        <ListItem
            name="Chess"
            minPlayers={2}
            maxPlayers={8}
        />
        <ListItem
            name="Warhammer 40k"
            minPlayers={2}
            maxPlayers={8}
        />
        <ListItem
            name="Ping pong"
            minPlayers={2}
            maxPlayers={8}
        />
    </StepWrapper>
);

SparringsStep.propTypes = propTypes;

export default enhance(SparringsStep);
