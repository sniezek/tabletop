import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const propTypes = {
    tournamentTypesView: PropTypes.bool.isRequired,
    redirectToTournamentTypes: PropTypes.func,
    redirectToTournaments: PropTypes.func
};

const defaultProps = {
    redirectToTournamentTypes: () => {},
    redirectToTournaments: () => {}
};

const enhance = pure;

const TournamentHeaderOptions = ({ tournamentTypesView, redirectToTournamentTypes, redirectToTournaments }) => (
    <div className="events-header__options">
        {tournamentTypesView ? (
            <Button onClick={redirectToTournaments}>Back to tournaments</Button>
      ) : (
          <Button onClick={redirectToTournamentTypes}>Tournament types</Button>
      )}
    </div>
);

TournamentHeaderOptions.propTypes = propTypes;
TournamentHeaderOptions.defaultProps = defaultProps;

export default enhance(TournamentHeaderOptions);


