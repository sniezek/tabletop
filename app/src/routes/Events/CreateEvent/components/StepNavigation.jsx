import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    step: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    create: PropTypes.func.isRequired
};

const enhance = pure;

const StepNavigation = ({ prevStep, nextStep, step, steps, create }) => (
    <div className="create-event__navigation">
        { step > 0 && (
            <Button onClick={prevStep}>Previous</Button>
        )}
        { step === steps - 1 ? (
            <Button onClick={create} colored>Create</Button>
        ) : (
            <Button onClick={nextStep} colored>Next</Button>
        )}
    </div>
);

StepNavigation.propTypes = propTypes;

export default enhance(StepNavigation);
