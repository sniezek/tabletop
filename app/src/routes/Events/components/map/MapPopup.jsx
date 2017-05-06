/* global google */
import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import compose from "recompose/compose";
import branch from "recompose/branch";
import renderNothing from "recompose/renderNothing";
import { InfoWindow } from "react-google-maps";

const propTypes = {
    event: PropTypes.object.isRequired
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

const EventsMapPopup = ({ event: { location } }) => (
    <InfoWindow
        position={location}
        options={{ pixelOffset: new google.maps.Size(0, -40) }}
    >
        <div>Example</div>
    </InfoWindow>
);

EventsMapPopup.propTypes = propTypes;

export default enhance(EventsMapPopup);
