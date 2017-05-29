import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import IconTextfield from "../../../../components/IconTextfield";

const propTypes = {
    minPlayers: PropTypes.string,
    maxPlayers: PropTypes.string,
    setMinPlayers: PropTypes.func.isRequired,
    setMaxPlayers: PropTypes.func.isRequired,
};

const defaultProps = {
    minPlayers: "0",
    maxPlayers: "2"
};

const pattern = "[0-9]+";

const enhance = pure;

const PlayersCount = ({ minPlayers, maxPlayers, setMinPlayers, setMaxPlayers }) => (
    <div className="create-event-dialog__group">
        <IconTextfield
            label="Min players"
            icon="people"
            value={minPlayers}
            onChange={setMinPlayers}
            pattern={pattern}
            required
        />
        <IconTextfield
            label="Max players"
            icon="people"
            value={maxPlayers}
            onChange={setMaxPlayers}
            pattern={pattern}
            required
        />
    </div>
);

PlayersCount.propTypes = propTypes;
PlayersCount.defaultProps = defaultProps;

export default enhance(PlayersCount);
