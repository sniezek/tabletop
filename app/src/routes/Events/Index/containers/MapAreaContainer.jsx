import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import branch from "recompose/branch";
import renderNothing from "recompose/renderNothing";
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

const hideIfNoData = hasNoData =>
    branch(
        hasNoData,
        renderNothing
    );

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure,
    hideIfNoData(
        props => !props.active || props.location === null
    )
);

const MapAreaContainer = ({ location, radius }) => (
    <MapArea
        center={location}
        radius={radius}
    />
);

MapAreaContainer.propTypes = propTypes;
MapAreaContainer.defaultProps = defaultProps;

export default enhance(MapAreaContainer);
