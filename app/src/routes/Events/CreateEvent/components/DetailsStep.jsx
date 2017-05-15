import React from "react";
import pure from "recompose/pure";
import IconTextfield from "../../../../components/IconTextfield";
import StepWrapper from "./StepWrapper.jsx";

const enhance = pure;

const DetailsStep = () => (
    <StepWrapper>
        <IconTextfield
            onChange={() => {}}
            label="Name"
            icon="stars"
            required
            className="create-event__input"
        />
        <IconTextfield
            onChange={() => {}}
            label="Location"
            icon="room"
            required
            className="create-event__input"
        />
        <IconTextfield
            onChange={() => {}}
            label="Description"
            icon="info_outline"
            className="create-event__input create-event__description"
            rows={3}
        />
    </StepWrapper>
);

export default enhance(DetailsStep);