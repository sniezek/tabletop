import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";
import { Dialog, DialogTitle, DialogActions } from "../../../../components/Dialog";
import SparringDialogContent from "./SparringDialogContent.jsx";
import TournamentDialogContent from "./TournamentDialogContent.jsx";
import "./ListItemDialog.scss";

const propTypes = {
    close: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    type: PropTypes.string,
    model: PropTypes.object
};

const defaultProps = {
    type: undefined,
    model: null
};

const getTitle = (model, type) => (model ? `Edit ${type}` : `Add new ${type}`);

const enhance = pure;

const ListItemDialog = ({ close, save, model, type, ...rest }) => (
    <Dialog
        className="create-event-dialog"
        open={!!type}
    >
        <DialogTitle>{getTitle(model, type)}</DialogTitle>
        { type === "sparring" && (
            <SparringDialogContent
                {...rest}
            />
        )}
        { type === "tournament" && (
            <TournamentDialogContent
                {...rest}
            />
        )}
        <DialogActions>
            <Button colored onClick={save}>Save</Button>
            <Button onClick={close}>Close</Button>
        </DialogActions>
    </Dialog>
);

ListItemDialog.propTypes = propTypes;
ListItemDialog.defaultProps = defaultProps;

export default enhance(ListItemDialog);
