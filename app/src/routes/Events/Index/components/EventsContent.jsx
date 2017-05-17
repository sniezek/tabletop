import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { ViewContent } from "../../../../components/View";
import EventsMapContainer from "../containers/EventsMapContainer.jsx";
import EventsList from "./list/EventsList.jsx";

const propTypes = {
    events: PropTypes.array.isRequired,
    mapView: PropTypes.bool.isRequired,
    lat: PropTypes.number,
    lng: PropTypes.number
};

const defaultProps = {
    lat: undefined,
    lng: undefined
};

const enhance = pure;

const EventsContent = ({ events, mapView, lat, lng }) => (
    <ViewContent>
        { mapView ? (
            <EventsMapContainer
                events={events}
                lat={lat}
                lng={lng}
            />
        ) : (
            <EventsList
                events={events}
            />
        )}
    </ViewContent>
);

EventsContent.propTypes = propTypes;
EventsContent.defaultProps = defaultProps;

export default enhance(EventsContent);
