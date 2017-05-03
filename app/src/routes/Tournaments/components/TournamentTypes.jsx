import React from "react";
import pure from "recompose/pure";
import TournamentTypesContainer from "../containers/TournamentTypesContainer.jsx";

const enhance = pure;

const TournamentTypes = () => (
    <TournamentTypesContainer />
);

export default enhance(TournamentTypes);

