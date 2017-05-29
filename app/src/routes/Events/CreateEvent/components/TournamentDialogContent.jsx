import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { DialogContent } from "../../../../components/Dialog";
import IconTextfield from "../../../../components/IconTextfield";
import GameSelect from "../../../../components/GameSelect";

const propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setGame: PropTypes.func.isRequired
};

const defaultProps = {
    name: "",
    game: null
};

const enhance = pure;

/* eslint-disable jsx-a11y/anchor-has-content */
const SparringDialogContent = ({ setName, name, startDate, endDate, setStartDate, setEndDate, game, setGame }) => (
    <DialogContent>
        <a tabIndex={0} className="create-event-dialog__focus-trap" />
        <IconTextfield
            label="Tournament name"
            icon="stars"
            value={name}
            onChange={setName}
            required
        />
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
        <GameSelect
            onChange={setGame}
            value={game}
        />
    </DialogContent>
);

SparringDialogContent.propTypes = propTypes;
SparringDialogContent.defaultProps = defaultProps;

export default enhance(SparringDialogContent);
