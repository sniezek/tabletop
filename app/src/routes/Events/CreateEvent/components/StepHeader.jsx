import React from "react";
import pure from "recompose/pure";
import { Tabs, Tab } from "react-mdl/lib/Tabs";

const enhance = pure;

const StepHeader = () => (
    <Tabs activeTab={0}>
        <Tab>Details</Tab>
        <Tab>Sparrings</Tab>
        <Tab>Tournaments</Tab>
    </Tabs>
);

export default enhance(StepHeader);
