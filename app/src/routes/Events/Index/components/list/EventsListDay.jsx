import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ListEvent from "./ListEvent.jsx";

const propTypes = {
    date: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
};

const enhance = pure;

const EventsListDay = ({ events, date }) => (
    <div className="events-list-day">
        <h3 className="events-list-day__date">{date}</h3>
        <div className="events-list-day__events mdl-shadow--2dp">
            {events.map(props => (
                <ListEvent
                    key={props.id}
                    {...props}
                />
            ))}
        </div>
    </div>
);

EventsListDay.propTypes = propTypes;

export default enhance(EventsListDay);
