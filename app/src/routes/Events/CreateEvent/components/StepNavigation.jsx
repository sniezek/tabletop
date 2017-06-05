import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    step: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    create: PropTypes.func.isRequired,
    addSparring: PropTypes.func.isRequired,
    addTournament: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired
};

const enhance = pure;

const StepNavigation = ({ prevStep, nextStep, step, steps, create, addSparring, addTournament, edit }) => (
    <div className="create-event__navigation">
        <div className="create-event__navigation-left">
            { step === 1 && (
                <Button onClick={addSparring} colored>Add sparring</Button>
            ) }
            { step === 2 && (
                <Button onClick={addTournament} colored>Add tournament</Button>
            ) }
        </div>
        <div className="create-event__navigation-right">
            { step > 0 && (
                <Button onClick={prevStep}>Previous</Button>
            )}
            { step === steps - 1 ? (
                <Button onClick={create} colored>{edit ? "Save" : "Create"}</Button>
            ) : (
                <Button onClick={nextStep} colored>Next</Button>
            )}
        </div>
    </div>
);

StepNavigation.propTypes = propTypes;

export default enhance(StepNavigation);
