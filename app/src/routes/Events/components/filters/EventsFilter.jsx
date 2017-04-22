import React from "react";
import PropTypes from "prop-types";
import Switch from "react-mdl/lib/Switch";
import "./EventsFilter.scss";

const propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

const EventsFilter = ({ name, id, children }) => (
    <div className={`events-filter ${id}-filter`}>
        <Switch
            id={`filter-${id}`}
            className="events-filter__toggle"
        >
            {name}
        </Switch>
        <div className="events-filter__options">
            {children}
        </div>
    </div>
);

EventsFilter.propTypes = propTypes;

export default EventsFilter;
