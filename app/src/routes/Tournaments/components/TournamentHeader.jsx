import React from "react";
import pure from "recompose/pure";
import { ViewHeader } from "../../../components/View";

const enhance = pure;

const TournamentHeader = () => (
    <ViewHeader
        title="Tournaments"
    />
);

export default enhance(TournamentHeader);
