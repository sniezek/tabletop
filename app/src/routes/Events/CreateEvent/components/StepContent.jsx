import React from "react";
import pure from "recompose/pure";
import IconTextfield from "../../../../components/IconTextfield";

const enhance = pure;

const StepContent = () => (
    <div className="create-event__tab-wrapper">
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
    </div>
);

export default enhance(StepContent);