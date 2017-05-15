import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DetailsStep from "./DetailsStep.jsx";

const propTypes = {
    step: PropTypes.number.isRequired,
    setName: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string
};

const defaultProps = {
    name: "",
    location: "",
    description: ""
};

const enhance = pure;

const StepContent = ({ step, setLocation, setDescription, setName, name, location, description }) => {
    if (step === 0) {
        return (
            <DetailsStep
                setLocation={setLocation}
                setDescription={setDescription}
                setName={setName}
                name={name}
                location={location}
                description={description}
            />
        );
    }

    return null;
};

StepContent.propTypes = propTypes;
StepContent.defaultProps = defaultProps;

export default enhance(StepContent);
