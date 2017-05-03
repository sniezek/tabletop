import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

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

const enhance = pure;

const TournamentTypesHeaderOptions = ({ tournamentTypesView, loggedIn, toggleFinishedTournamentsView }) => (
    <div className="events-header__options">
        <Button onClick={() => toggleFinishedTournamentsView(true)}>
            { tournamentTypesView ? "Finished tournaments" : "Tournament types" }
        </Button>
    </div>
);

TournamentTypesHeaderOptions.propTypes = propTypes;
TournamentTypesHeaderOptions.defaultProps = defaultProps;

export default enhance(TournamentTypesHeaderOptions);
