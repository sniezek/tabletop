import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import RadioGroup from "react-mdl/lib/RadioGroup";
import Radio from "react-mdl/lib/Radio";
import { DialogContent } from "../../../../components/Dialog";
import IconTextfield from "../../../../components/IconTextfield";

const propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired
};

const defaultProps = {
    name: ""
};

const enhance = pure;

/* eslint-disable jsx-a11y/anchor-has-content */
const SparringDialogContent = ({ setName, name, startDate, endDate, setStartDate, setEndDate }) => (
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
    </DialogContent>
);

SparringDialogContent.propTypes = propTypes;
SparringDialogContent.defaultProps = defaultProps;

export default enhance(SparringDialogContent);
