import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import withProps from "recompose/withProps";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const propTypes = {
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    })
};

const API_KEY = "AIzaSyCI1muQBeAuXVVcRS8hx9VK4ZQ2wssx3jo";

const defaultProps = {
    defaultZoom: 6,
    defaultCenter: {
        lat: 51.8335556,
        lng: 18.6491471
    }
};

const enhance = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`
    }),
    withScriptjs,
    withGoogleMap
);

const Map = ({ defaultZoom, defaultCenter, ...props }) => (
    <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        {...props}
    />
);

Map.defaultProps = defaultProps;
Map.propTypes = propTypes;

export default enhance(Map);
