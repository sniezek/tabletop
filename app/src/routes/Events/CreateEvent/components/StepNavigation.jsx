import React from "react";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const enhance = pure;

const StepNavigation = () => (
    <div className="create-event__navigation">
        <Button>Previous</Button>
        <Button colored>Next</Button>
    </div>
);

export default enhance(StepNavigation);
