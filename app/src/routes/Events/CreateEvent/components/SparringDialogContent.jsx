import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import RadioGroup from "react-mdl/lib/RadioGroup";
import Radio from "react-mdl/lib/Radio";
import { DialogContent } from "../../../../components/Dialog";
import IconTextfield from "../../../../components/IconTextfield";
import GameSelect from "../../../../components/GameSelect";

const propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    minPlayers: PropTypes.string,
    maxPlayers: PropTypes.string,
    gameType: PropTypes.string,
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setMinPlayers: PropTypes.func.isRequired,
    setMaxPlayers: PropTypes.func.isRequired,
    setGameType: PropTypes.func.isRequired,
    setGameName: PropTypes.func.isRequired,
    gameName: PropTypes.string,
    setGame: PropTypes.func.isRequired,
    game: PropTypes.string
};

const defaultProps = {
    minPlayers: "0",
    maxPlayers: "2",
    gameType: "standard",
    gameName: "",
    game: null
};

const enhance = pure;

/* eslint-disable jsx-a11y/anchor-has-content */
const SparringDialogContent = ({ startDate, endDate, minPlayers, maxPlayers, gameType, setStartDate, setEndDate, setMinPlayers, setMaxPlayers,
setGameType, setGameName, gameName, setGame, game }) => (
    <DialogContent>
        <a tabIndex={0} className="create-event-dialog__focus-trap" />
        <div className="create-event-dialog__group">
            <IconTextfield
                label="Start time"
                icon="schedule"
                value={startDate}
                onChange={setStartDate}
                required
            />
            <IconTextfield
                label="Estimated end time"
                icon="schedule"
                value={endDate}
                onChange={setEndDate}
                required
            />
        </div>
        <RadioGroup
            className="create-event-dialog__group create-event-dialog__type"
            name="create-event-type"
            value={gameType}
            onChange={setGameType}
        >
            <Radio value="standard">Standard game</Radio>
            <Radio value="custom">Custom game</Radio>
        </RadioGroup>
        { gameType === "custom" ? (
            <IconTextfield
                label="Game name"
                icon="stars"
                value={gameName}
                onChange={setGameName}
                required
            />
        ) : (
            <GameSelect
                onChange={setGame}
                value={game}
            />
        )}
        <div className="create-event-dialog__group">
            <IconTextfield
                label="Min players"
                icon="people"
                value={minPlayers}
                onChange={setMinPlayers}
                required
            />
            <IconTextfield
                label="Max players"
                icon="people"
                value={maxPlayers}
                onChange={setMaxPlayers}
                required
            />
        </div>
    </DialogContent>
);

SparringDialogContent.propTypes = propTypes;
SparringDialogContent.defaultProps = defaultProps;

export default enhance(SparringDialogContent);
