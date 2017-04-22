import React from "react";
import PropTypes from "prop-types";
import Switch from "react-mdl/lib/Switch";

const propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

const EventsFilter = ({ name, children }) => (
    <div className="events-filter">
        <Switch id={name}>{name}</Switch>
        {children}
    </div>
);

EventsFilter.propTypes = propTypes;

export default EventsFilter;
