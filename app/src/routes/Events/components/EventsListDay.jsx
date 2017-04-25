import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ListEvent from "./ListEvent.jsx";

const propTypes = {
    date: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired
};

const enhance = pure;

const EventsListDay = () => (
    <div className="events-list-day">
        <h3 className="events-list-day__date">Monday, April 24</h3>
        <div className="events-list-day__events mdl-shadow--2dp">
            <ListEvent />
            <ListEvent joined />
            <ListEvent />
        </div>
    </div>
);

EventsListDay.propTypes = propTypes;

export default enhance(EventsListDay);
