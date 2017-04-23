import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setMapViewActive } from "../../../store/config";
import Events from "../components/Events.jsx";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {}
};

const mapDispatchToProps = dispatch => ({
    toggleMapView: active => dispatch(setMapViewActive(active))
});

const mapStateToProps = ({ user, config }) => ({
    user,
    mapView: config.mapView
});

class EventsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayFilters: false
        };

        this.toggleFilters = this.toggleFilters.bind(this);
    }

    toggleFilters(displayFilters) {
        this.setState({
            displayFilters
        });
    }

    render() {
        const { displayFilters } = this.state;
        const { mapView, toggleMapView } = this.props;

        return (
            <Events
                mapView={mapView}
                toggleMapView={toggleMapView}
                toggleFilters={this.toggleFilters}
                displayFilters={displayFilters}
            />
        );
    }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
