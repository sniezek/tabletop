import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import TournamentTypesHeaderOptions from "./TournamentHeaderOptions.jsx";
import "../../Events/components/EventsHeader.scss";

const propTypes = {
    tournamentTypesView: PropTypes.bool,
    loggedIn: PropTypes.bool,
    toggleTournamentTypesView: PropTypes.func
};

const defaultProps = {
    tournamentTypesView: true,
    loggedIn: false,
    toggleTournamentTypesView: () => {}
};

export const TournamentTypesHeader = ({ tournamentTypesView, loggedIn, toggleFinishedTournamentsView }) => (
    <div className="events-header mdl-shadow--2dp">
        <h2 className="events-header__title">
      Tournaments
    </h2>
        <TournamentTypesHeaderOptions
            tournamenTypesView={tournamentTypesView}
            loggedIn={loggedIn}
            toggleFinishedTournamentsView={toggleFinishedTournamentsView}
        />
    </div>
);

const enhance = pure;

TournamentTypesHeader.propTypes = propTypes;
TournamentTypesHeader.defaulProps = defaultProps;

export default enhance(TournamentTypesHeader);
