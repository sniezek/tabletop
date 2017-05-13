import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import pure from "recompose/pure";
import compose from "recompose/compose";
import MapArea from "../components/map/MapArea.jsx";

const propTypes = {
    location: PropTypes.object,
    active: PropTypes.bool,
    radius: PropTypes.number.isRequired
};

const defaultProps = {
    location: null,
    active: false
};

const mapStateToProps = ({ locationFilter }) => locationFilter;
const mapDispatchToProps = {};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure
);

const MapAreaContainer = ({ active, location, radius }) => (active && location !== null ? (
    <MapArea
        center={location}
        radius={radius}
    />
) : null);

MapAreaContainer.propTypes = propTypes;
MapAreaContainer.defaultProps = defaultProps;

export default enhance(MapAreaContainer);
