import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "../../../../components/Dialog";
import Player from "./Player.jsx";
import "./Players.scss";

const propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};

const enhance = pure;

/* eslint-disable jsx-a11y/anchor-has-content */
const PlayersDialog = ({ players, open, close, title, ...rest }) => (
    <Dialog
        open={open}
        className="players"
    >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <a tabIndex={0} className="players__focus-trap" />
            {players.map(player => (
                <Player
                    key={player.id}
                    {...player}
                    {...rest}
                />
            ))}
        </DialogContent>
        <DialogActions>
            <Button onClick={close}>Close</Button>
        </DialogActions>
    </Dialog>
);

PlayersDialog.propTypes = propTypes;

export default enhance(PlayersDialog);
