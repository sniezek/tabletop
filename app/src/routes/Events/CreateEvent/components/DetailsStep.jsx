import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Geosuggest from "react-geosuggest";
import IconTextfield from "../../../../components/IconTextfield";
import StepWrapper from "./StepWrapper.jsx";

const propTypes = {
    setName: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    clearInput: PropTypes.func.isRequired,
    setRef: PropTypes.func.isRequired
};

const enhance = pure;

const DetailsStep = ({ setName, setLocation, setDescription, name, description, clearInput, setRef }) => (
    <StepWrapper className="create-event-tab--details">
        <IconTextfield
            value={name}
            onChange={setName}
            label="Name"
            icon="stars"
            required
            className="create-event__input"
        />
        <Geosuggest
            inputClassName="mdl-textfield__input"
            suggestsClassName="mdl-shadow--2dp"
            onSuggestSelect={setLocation}
            onBlur={clearInput}
            ref={setRef}
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
