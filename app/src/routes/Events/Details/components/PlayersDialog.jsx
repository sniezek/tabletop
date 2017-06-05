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
    title: PropTypes.string.isRequired
};

const enhance = pure;

const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

/* eslint-disable jsx-a11y/anchor-has-content */
const PlayersDialog = ({ open, close, title, ...rest }) => (
    <Dialog
        open={open}
        className="players"
    >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <a tabIndex={0} className="players__focus-trap" />
            {players.map(player => (
                <Player
                    key={player}
                    username="pwolaq"
                    email="pawelwolakk@gmail.com"
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
