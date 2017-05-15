import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import IconTextfield from "../../../../components/IconTextfield";
import StepWrapper from "./StepWrapper.jsx";

const propTypes = {
    setName: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const enhance = pure;

const DetailsStep = ({ setName, setLocation, setDescription, name, location, description }) => (
    <StepWrapper>
        <IconTextfield
            value={name}
            onChange={setName}
            label="Name"
            icon="stars"
            required
            className="create-event__input"
        />
        <IconTextfield
            value={location}
            onChange={setLocation}
            label="Location"
            icon="room"
            required
            className="create-event__input"
        />
        <IconTextfield
            value={description}
            onChange={setDescription}
            label="Description"
            icon="info_outline"
            className="create-event__input create-event__description"
            rows={3}
        />
    </StepWrapper>
);

DetailsStep.propTypes = propTypes;

export default enhance(DetailsStep);
