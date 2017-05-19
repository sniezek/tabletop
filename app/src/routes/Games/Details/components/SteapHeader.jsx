import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Tabs, Tab } from "react-mdl/lib/Tabs";

const propTypes = {
    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired
};

const enhance = pure;

const StepHeader = ({ setStep, step }) => (
    <Tabs
        style={{ backgroundColor: "white", marginTop: "5px" }}
        activeTab={step}
        onChange={setStep}
    >
        <Tab>Details</Tab>
        <Tab>Ranking</Tab>
        <Tab>Incoming events</Tab>
    </Tabs>
);

StepHeader.propTypes = propTypes;

export default enhance(StepHeader);
