import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import EventDetailsContainer from "../containers/EventDetailsContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const EventDetailsView = ({ router }) => (
    <EventDetailsContainer
        id={parseInt(router.params.id, 10)}
        router={router}
    />
);

EventDetailsView.propTypes = propTypes;

export default enhance(EventDetailsView);
