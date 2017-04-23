import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Switch from "react-mdl/lib/Switch";
import "./EventsFilter.scss";

const propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    setActive: PropTypes.func
};

const defaultProps = {
    active: false,
    setActive: () => {}
};

const enhance = pure;

const EventsFilter = ({ name, id, children, active, setActive }) => (
    <div className={`events-filter ${id}-filter`}>
        <Switch
            id={`filter-${id}`}
            className="events-filter__toggle"
            checked={active}
            onChange={setActive}
        >
            {name}
        </Switch>
        <div className="events-filter__options">
            {children}
        </div>
    </div>
);

EventsFilter.propTypes = propTypes;
EventsFilter.defaultProps = defaultProps;

export default enhance(EventsFilter);
