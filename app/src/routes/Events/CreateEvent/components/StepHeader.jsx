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
        activeTab={step}
        onChange={setStep}
    >
        <Tab>Details</Tab>
        <Tab>Sparrings</Tab>
        <Tab>Tournaments</Tab>
    </Tabs>
);

StepHeader.propTypes = propTypes;

export default enhance(StepHeader);
