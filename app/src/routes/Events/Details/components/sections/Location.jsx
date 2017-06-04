import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Map from "../../../../../components/Map";
import MapMarker from "../../../Index/components/map/MapMarker.jsx";

const propTypes = {
    location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    })
};

const defaultProps = {
    location: null
};

const enhance = pure;

const containerElement = (
    <div className="event-section event-section--map mdl-shadow--2dp" />
);

const mapElement = (
    <div className="event-map" />
);

const noop = () => {};

const Location = ({ location }) => location && (
    <Map
        mapElement={mapElement}
        containerElement={containerElement}
        defaultZoom={14}
        defaultCenter={location}
    >
        <MapMarker
            event={{
                location
            }}
            showPopup={noop}
            hidePopup={noop}
            goToEvent={noop}
        />
    </Map>
);

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default enhance(Location);
