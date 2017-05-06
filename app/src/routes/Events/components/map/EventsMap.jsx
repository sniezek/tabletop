import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Spinner from "react-mdl/lib/Spinner";
import Map from "../../../../components/Map";
import MapPopup from "./MapPopup.jsx";
import MapMarker from "./MapMarker.jsx";
import "./EventsMap.scss";

const propTypes = {
    events: PropTypes.array,
    currentEvent: PropTypes.object,
    showPopup: PropTypes.func,
    hidePopup: PropTypes.func
};

const defaultProps = {
    events: [],
    currentEvent: null,
    showPopup: () => {},
    hidePopup: () => {}
};

const enhance = pure;

const containerElement = (
    <div className="events-map" />
);

const mapElement = (
    <div className="events-map__map" />
);

const loadingElement = (
    <div className="events-map">
        <Spinner className="events-map__spinner" />
    </div>
);

const EventsMap = ({ events, currentEvent, showPopup, hidePopup }) => (
    <Map
        containerElement={containerElement}
        loadingElement={loadingElement}
        mapElement={mapElement}
    >
        { events.map(event => (
            <MapMarker
                key={event.id}
                event={event}
                showPopup={showPopup}
                hidePopup={hidePopup}
            />
        ))}
        <MapPopup
            event={currentEvent}
        />
    </Map>
);

EventsMap.propTypes = propTypes;
EventsMap.defaultProps = defaultProps;

export default enhance(EventsMap);
