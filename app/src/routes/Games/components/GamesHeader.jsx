import React from "react";
import pure from "recompose/pure";
import { ViewHeader } from "../../../components/View";

const enhance = pure;

const GamesHeader = () => (
    <ViewHeader
        title="Available games"
    />
);


export default enhance(GamesHeader);
