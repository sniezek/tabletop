import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DetailsStep from "./DetailsStep.jsx";

const propTypes = {
    step: PropTypes.number.isRequired
};

const enhance = pure;

const StepContent = ({ step }) => {
    if (step === 0) {
        return (
            <DetailsStep />
        );
    }

    return null;
};

StepContent.propTypes = propTypes;

export default enhance(StepContent);
