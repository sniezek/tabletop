import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import { Button } from "react-mdl/lib";

const propTypes = {
    router: PropTypes.object.isRequired,
    initialRound: PropTypes.func,
    showTournament: PropTypes.func,
    initialized: PropTypes.bool.isRequired
};

const defaultProps = {
    initialRound: () => {},
    showTournament: () => {}
};

const enhance = pure;

const TournamentDemoPlay = ({ initialRound, showTournament, initialized }) => (
    <div>
        <h2>Play demo</h2>
        {initialized ?
            <Button colored type="button" onClick={showTournament}>Show tournament</Button>
        :
            <Button colored type="button" onClick={initialRound}>Init tournament</Button>
      }
    </div>
);

TournamentDemoPlay.propTypes = propTypes;
TournamentDemoPlay.defaultProps = defaultProps;

export default enhance(TournamentDemoPlay);
