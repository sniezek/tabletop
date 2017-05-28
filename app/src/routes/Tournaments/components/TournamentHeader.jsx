import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { ViewHeader } from "../../../components/View";
import TournamentHeaderOptions from "./TournamentHeaderOptions";

const propTypes = {
    title: PropTypes.string,
    redirectToTournamentTypes: PropTypes.func
};

const defaultProps = {
    title: "Tournaments",
    redirectToTournamentTypes: () => {}
};

const enhance = pure;

const TournamentHeader = ({ title, redirectToTournamentTypes }) => (
    <ViewHeader
        title={title}
    >
        <TournamentHeaderOptions
            redirectToTournamentTypes={redirectToTournamentTypes}
        />
    </ViewHeader>
);

TournamentHeader.propTypes = propTypes;
TournamentHeader.defaultProps = defaultProps;

export default enhance(TournamentHeader);
