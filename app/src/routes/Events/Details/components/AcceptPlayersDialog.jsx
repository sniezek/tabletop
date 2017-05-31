import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "../../../../components/Dialog";
import AcceptPlayer from "./AcceptPlayer.jsx";
import "./AcceptPlayers.scss";

const propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    accept: PropTypes.func.isRequired,
    revoke: PropTypes.func.isRequired
};

const enhance = pure;

const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

/* eslint-disable jsx-a11y/anchor-has-content */
const AcceptPlayersDialog = ({ open, close, accept, revoke }) => (
    <Dialog
        open={open}
        className="accept-players"
    >
        <DialogTitle>Accept players</DialogTitle>
        <DialogContent>
            <a tabIndex={0} className="accept-players__focus-trap" />
            {players.map(player => (
                <AcceptPlayer
                    key={player}
                    username="pwolaq"
                    email="pawelwolakk@gmail.com"
                    accept={accept}
                    revoke={revoke}
                />
            ))}
        </DialogContent>
        <DialogActions>
            <Button onClick={close}>Close</Button>
        </DialogActions>
    </Dialog>
);

AcceptPlayersDialog.propTypes = propTypes;

export default enhance(AcceptPlayersDialog);
