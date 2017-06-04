import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { ViewHeader } from "../../../../components/View/index";
import TournamentHeaderOptions from "./TournamentHeaderOptions";

const propTypes = {
    title: PropTypes.string,
    tournamentTypesView: PropTypes.bool.isRequired,
    finishedTournamentsView: PropTypes.bool,
    redirectToTournamentTypes: PropTypes.func,
    redirectToTournaments: PropTypes.func
};

const defaultProps = {
    title: "Tournaments",
    finishedTournamentsView: false,
    redirectToTournamentTypes: () => {},
    redirectToTournaments: () => {}
};

const enhance = pure;

const TournamentHeader = ({ title, tournamentTypesView, finishedTournamentsView, redirectToTournamentTypes, redirectToTournaments }) => (
    <ViewHeader
        title={title}
    >
        <TournamentHeaderOptions
            tournamentTypesView={tournamentTypesView}
            finishedTournamentsView={finishedTournamentsView}
            redirectToTournamentTypes={redirectToTournamentTypes}
            redirectToTournaments={redirectToTournaments}
        />
    </ViewHeader>
);

TournamentHeader.propTypes = propTypes;
TournamentHeader.defaultProps = defaultProps;

export default enhance(TournamentHeader);
