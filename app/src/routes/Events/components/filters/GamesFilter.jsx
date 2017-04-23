import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import EventsFilter from "./EventsFilter.jsx";
import "./GamesFilter.scss";

const propTypes = {
    setActive: PropTypes.func,
    active: PropTypes.bool
};

const defaultProps = {
    setActive: () => {},
    active: false
};

const enhance = pure;

const GamesFilter = ({ setActive, active }) => (
    <EventsFilter
        name="Games"
        id="games"
        setActive={setActive}
        active={active}
    >
        <span>...</span>
    </EventsFilter>
);

GamesFilter.propTypes = propTypes;
GamesFilter.defaultProps = defaultProps;

export default enhance(GamesFilter);
