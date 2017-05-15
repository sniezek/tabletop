import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import StepHeader from "./StepHeader.jsx";
import StepContent from "./StepContent.jsx";
import StepNavigation from "./StepNavigation.jsx";

const propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    setStep: PropTypes.func.isRequired,
    step: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired
};

const enhance = pure;

const CreateEventForm = ({ prevStep, nextStep, setStep, step, steps }) => (
    <div className="create-event__content mdl-shadow--2dp">
        <StepHeader
            setStep={setStep}
            step={step}
        />
        <StepContent />
        <StepNavigation
            prevStep={prevStep}
            nextStep={nextStep}
            step={step}
            steps={steps}
        />
    </div>
);

CreateEventForm.propTypes = propTypes;

export default enhance(CreateEventForm);
