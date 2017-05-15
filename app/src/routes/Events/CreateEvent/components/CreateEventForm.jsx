import React from "react";
import pure from "recompose/pure";
import StepHeader from "./StepHeader.jsx";
import StepContent from "./StepContent.jsx";
import StepNavigation from "./StepNavigation.jsx";

const enhance = pure;

const CreateEventForm = () => (
    <div className="create-event__content mdl-shadow--2dp">
        <StepHeader />
        <StepContent />
        <StepNavigation />
    </div>
);

export default enhance(CreateEventForm);
