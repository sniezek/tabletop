import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const propTypes = {
    redirectToTournamentTypes: PropTypes.func
};

const defaultProps = {
    redirectToTournamentTypes: () => {}
};

const enhance = pure;

const TournamentHeaderOptions = ({ redirectToTournamentTypes }) => (
    <div className="events-header__options">
        <Button onClick={redirectToTournamentTypes}>Tournament types</Button>
    </div>
);

TournamentHeaderOptions.propTypes = propTypes;
TournamentHeaderOptions.defaultProps = defaultProps;

export default enhance(TournamentHeaderOptions);

