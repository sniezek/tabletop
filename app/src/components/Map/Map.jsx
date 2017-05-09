import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { withGoogleMap, GoogleMap } from "react-google-maps";

const propTypes = {
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    })
};

const defaultProps = {
    defaultZoom: 6,
    defaultCenter: {
        lat: 51.8335556,
        lng: 18.6491471
    }
};

const enhance = compose(
    pure,
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
