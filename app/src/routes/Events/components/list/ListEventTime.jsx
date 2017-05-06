import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import moment from "moment";

const propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

const enhance = pure;

const ListEventTime = ({ from, to }) => (
    <div className="list-event__time">
        <time className="list-event__time-from">{moment(from).format("h:mm A")}</time>
        <span className="list-event__time-delemiter" />
        <time className="list-event__time-to">{moment(to).format("h:mm A")}</time>
    </div>
);

ListEventTime.propTypes = propTypes;

export default enhance(ListEventTime);
