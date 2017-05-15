import React from "react";
import pure from "recompose/pure";
import TournamentFinishedContainer from "../containers/TournamentFinishedContainer";

const enhance = pure;

const TournamentsFinishedList = () => (
    <TournamentFinishedContainer />
);

export default enhance(TournamentsFinishedList);
