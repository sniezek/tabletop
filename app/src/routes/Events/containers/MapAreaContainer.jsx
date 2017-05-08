import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import pure from "recompose/pure";
import compose from "recompose/compose";
import MapArea from "../components/map/MapArea.jsx";

const propTypes = {
    location: PropTypes.object,
    radius: PropTypes.number.isRequired
};

const defaultProps = {
    location: null
};

const mapStateToProps = ({ locationFilter }) => locationFilter;
const mapDispatchToProps = {};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure
);

const MapAreaContainer = ({ location, radius }) => (location !== null ? (
    <MapArea
        center={location}
        radius={radius}
    />
) : null);

MapAreaContainer.propTypes = propTypes;
MapAreaContainer.defaultProps = defaultProps;

export default enhance(MapAreaContainer);
