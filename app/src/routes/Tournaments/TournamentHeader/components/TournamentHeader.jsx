import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { ViewHeader } from "../../../../components/View/index";
import TournamentHeaderOptions from "./TournamentHeaderOptions";

const propTypes = {
    title: PropTypes.string,
    tournamentView: PropTypes.bool.isRequired,
    tournamentTypesView: PropTypes.bool,
    finishedTournamentsView: PropTypes.bool,
    redirectToTournamentTypes: PropTypes.func,
    redirectToTournaments: PropTypes.func,
    redirectToFinishedTournaments: PropTypes.func
};

const defaultProps = {
    title: "Tournaments",
    tournamentTypesView: false,
    finishedTournamentsView: false,
    redirectToTournamentTypes: () => {},
    redirectToTournaments: () => {},
    redirectToFinishedTournaments: () => {}
};

const enhance = pure;

const TournamentHeader = ({ title, tournamentView, tournamentTypesView, finishedTournamentsView, redirectToTournamentTypes, redirectToTournaments, redirectToFinishedTournaments }) => (
    <ViewHeader
        title={title}
    >
        <TournamentHeaderOptions
            tournamentView={tournamentView}
            tournamentTypesView={tournamentTypesView}
            finishedTournamentsView={finishedTournamentsView}
            redirectToTournamentTypes={redirectToTournamentTypes}
            redirectToTournaments={redirectToTournaments}
            redirectToFinishedTournaments={redirectToFinishedTournaments}
        />
    </ViewHeader>
);

TournamentHeader.propTypes = propTypes;
TournamentHeader.defaultProps = defaultProps;

export default enhance(TournamentHeader);
