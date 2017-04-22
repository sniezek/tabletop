import React, { Component } from "react";
import { connect } from "react-redux";
import Events from "../components/Events.jsx";

const mapDispatchToProps = {};

const mapStateToProps = ({ user }) => ({ user });

class EventsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapView: true,
            displayFilters: false
        };

        this.toggleMapView = this.toggleMapView.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
    }

    toggleMapView(mapView) {
        this.setState({
            mapView
        });
    }

    toggleFilters(displayFilters) {
        this.setState({
            displayFilters
        });
    }

    render() {
        const { mapView, displayFilters } = this.state;

        return (
            <Events
                mapView={mapView}
                toggleMapView={this.toggleMapView}
                toggleFilters={this.toggleFilters}
                displayFilters={displayFilters}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
