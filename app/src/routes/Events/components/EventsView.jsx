import React from "react";
import pure from "recompose/pure";
import EventsContainer from "../containers/EventsContainer.jsx";
import "./EventsView.scss";

const enhance = pure;

const EventsView = () => (
    <EventsContainer />
);

export default enhance(EventsView);
