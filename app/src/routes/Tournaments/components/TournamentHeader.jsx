import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { ViewHeader } from "../../../components/View";
import TournamentHeaderOptions from "./TournamentHeaderOptions";

const propTypes = {
    title: PropTypes.string,
    tournamentTypesView: PropTypes.bool.isRequired,
    redirectToTournamentTypes: PropTypes.func,
    redirectToTournaments: PropTypes.func
};

const defaultProps = {
    title: "Tournaments",
    redirectToTournamentTypes: () => {},
    redirectToTournaments: () => {}
};

const enhance = pure;

const TournamentHeader = ({ title, tournamentTypesView, redirectToTournamentTypes, redirectToTournaments }) => (
    <ViewHeader
        title={title}
    >
        <TournamentHeaderOptions
            tournamentTypesView={tournamentTypesView}
            redirectToTournamentTypes={redirectToTournamentTypes}
            redirectToTournaments={redirectToTournaments}
        />
    </ViewHeader>
);

TournamentHeader.propTypes = propTypes;
TournamentHeader.defaultProps = defaultProps;

export default enhance(TournamentHeader);
