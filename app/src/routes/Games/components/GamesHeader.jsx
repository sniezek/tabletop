import React from "react";
import pure from "recompose/pure";
import PageHeader from "../../../components/PageHeader";

const enhance = pure;

const GamesHeader = () => (
    <PageHeader
        title="Available games"
    />
);


export default enhance(GamesHeader);
