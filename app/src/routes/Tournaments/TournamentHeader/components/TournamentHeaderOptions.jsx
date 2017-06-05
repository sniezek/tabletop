import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const propTypes = {
    tournamentView: PropTypes.bool.isRequired,
    redirectToTournamentTypes: PropTypes.func,
    redirectToTournaments: PropTypes.func,
    redirectToFinishedTournaments: PropTypes.func
};

const defaultProps = {
    redirectToTournamentTypes: () => {},
    redirectToTournaments: () => {},
    redirectToFinishedTournaments: () => {}
};

const enhance = pure;

const TournamentHeaderOptions = ({ tournamentView, redirectToTournamentTypes, redirectToTournaments, redirectToFinishedTournaments }) => (
    <div className="events-header__options">
        {tournamentView ? (
            <Button onClick={redirectToTournamentTypes}>Tournament types</Button>
      ) : (
          <Button onClick={redirectToTournaments}>Back to tournament</Button>
      )}
        {tournamentView ? (
            <Button onClick={redirectToFinishedTournaments}>Finished tournaments</Button>
      ) : (<div />)}
    </div>
);

TournamentHeaderOptions.propTypes = propTypes;
TournamentHeaderOptions.defaultProps = defaultProps;

export default enhance(TournamentHeaderOptions);
