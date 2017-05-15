import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import StepWrapper from "./StepWrapper.jsx";

const propTypes = {
};

const enhance = pure;

const SparringsStep = () => (
    <StepWrapper>
        Sparrings
    </StepWrapper>
);

SparringsStep.propTypes = propTypes;

export default enhance(SparringsStep);
