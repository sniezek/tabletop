import React, { Component } from "react";
import { connect } from "react-redux";
import Events from "../components/Events.jsx";

const mapDispatchToProps = {};

const mapStateToProps = ({ user }) => ({ user });

class EventsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapView: true
        };

        this.toggleMapView = this.toggleMapView.bind(this);
    }

    toggleMapView(mapView) {
        this.setState({
            mapView
        });
    }

    render() {
        const { mapView } = this.state;

        return (
            <Events
                mapView={mapView}
                toggleMapView={this.toggleMapView}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
