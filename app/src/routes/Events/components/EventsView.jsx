import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import EventsContainer from "../containers/EventsContainer.jsx";
import "./EventsView.scss";

const propTypes = {
    location: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
};

const enhance = pure;

const EventsView = ({ router, location: { query: { lat, lng } } }) => (
    <EventsContainer
        lat={lat}
        lng={lng}
        router={router}
    />
);

EventsView.propTypes = propTypes;

export default enhance(EventsView);
