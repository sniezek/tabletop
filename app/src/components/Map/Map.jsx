import React from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const propTypes = {
    googleMapURL: PropTypes.string,
    containerElement: PropTypes.node.isRequired,
    mapElement: PropTypes.node.isRequired,
    loadingElement: PropTypes.node.isRequired,
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    })
};

const API_KEY = "AIzaSyCI1muQBeAuXVVcRS8hx9VK4ZQ2wssx3jo";

const defaultProps = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`,
    defaultZoom: 6,
    defaultCenter: {
        lat: 51.8335556,
        lng: 18.6491471
    }
};

const Map = withScriptjs(
    withGoogleMap(
        ({ defaultZoom, defaultCenter, ...props }) => (
            <GoogleMap
                defaultZoom={defaultZoom}
                defaultCenter={defaultCenter}
                {...props}
            />
        )
    )
);

Map.defaultProps = defaultProps;
Map.propTypes = propTypes;

export default Map;
