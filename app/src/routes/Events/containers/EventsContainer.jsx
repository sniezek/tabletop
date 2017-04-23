import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setMapViewActive } from "../../../store/config";
import Events from "../components/Events.jsx";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    user: PropTypes.object
};

const defaultProps = {
    mapView: true,
    user: null,
    toggleMapView: () => {}
};

const mapDispatchToProps = dispatch => ({
    toggleMapView: active => dispatch(setMapViewActive(active))
});

const mapStateToProps = ({ user, config }) => ({
    user,
    mapView: config.mapView
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventsContainer extends PureComponent {
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
        const { mapView, toggleMapView, user } = this.props;
        const loggedIn = user !== null;

        return (
            <Events
                mapView={mapView}
                toggleMapView={toggleMapView}
                toggleFilters={this.toggleFilters}
                displayFilters={displayFilters}
                loggedIn={loggedIn}
                events={[]}
            />
        );
    }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;

export default enhance(EventsContainer);
