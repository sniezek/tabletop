import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import moment from "moment";

const propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

const enhance = pure;

const endDate = (from, to) => {
    const parsedTo = moment(to);
    const parsedFrom = moment(from);
    const isSame = parsedTo.isSame(parsedFrom, "day");

    return (
        <time className="list-event__time-to">
            {parsedTo.format("h:mm A")}
            {!isSame && (
                <span className="list-event__time-date">
                    {parsedTo.format("DD MMM")}
                </span>
            )}
        </time>
    );
};

const ListEventTime = ({ from, to }) => (
    <div className="list-event__time">
        <time className="list-event__time-from">{moment(from).format("h:mm A")}</time>
        <span className="list-event__time-delemiter" />
        {endDate(from, to)}
    </div>
);

ListEventTime.propTypes = propTypes;

export default enhance(ListEventTime);
