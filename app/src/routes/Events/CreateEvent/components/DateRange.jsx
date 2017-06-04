import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import IconTextfield from "../../../../components/IconTextfield";

const propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
};

const pattern = "([01]?[0-9]|2[0-3]):[0-5][0-9] (0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}";

const enhance = pure;

const DateRange = ({ startDate, endDate, setStartDate, setEndDate }) => (
    <div className="create-event-dialog__group">
        <IconTextfield
            label="Start time"
            icon="schedule"
            value={startDate}
            onChange={setStartDate}
            required
            pattern={pattern}
        />
        <IconTextfield
            label="Estimated end time"
            icon="schedule"
            value={endDate}
            onChange={setEndDate}
            required
            pattern={pattern}
        />
    </div>
);

DateRange.propTypes = propTypes;

export default enhance(DateRange);
