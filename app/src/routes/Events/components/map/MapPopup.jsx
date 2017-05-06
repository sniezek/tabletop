/* global google */
import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import compose from "recompose/compose";
import branch from "recompose/branch";
import renderNothing from "recompose/renderNothing";
import { InfoWindow } from "react-google-maps";
import MapPopupContent from "./MapPopupContent.jsx";

const propTypes = {
    event: PropTypes.shape({
        location: PropTypes.object.isRequired
    }).isRequired
};

const hideIfNoData = hasNoData =>
    branch(
        hasNoData,
        renderNothing
    );

const enhance = compose(
    pure,
    hideIfNoData(
        props => !props.event
    )
);

const MapPopup = ({ event }) => (
    <InfoWindow
        position={event.location}
        options={{ pixelOffset: new google.maps.Size(0, -40) }}
    >
        <MapPopupContent
            {...event}
        />
    </InfoWindow>
);

MapPopup.propTypes = propTypes;

export default enhance(MapPopup);
