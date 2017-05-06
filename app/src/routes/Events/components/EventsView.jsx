import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import EventsContainer from "../containers/EventsContainer.jsx";
import "./EventsView.scss";

const propTypes = {
    location: PropTypes.object.isRequired
};

const enhance = pure;

const EventsView = ({ location: { query: { lat, lng }} }) => (
    <EventsContainer
        lat={lat}
        lng={lng}
    />
);

EventsView.propTypes = propTypes;

export default enhance(EventsView);
