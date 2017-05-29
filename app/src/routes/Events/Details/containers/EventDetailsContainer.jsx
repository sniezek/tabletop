import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EventDetails from "../components/EventDetails.jsx";

const propTypes = {
    id: PropTypes.number.isRequired
};

const mapDispatchToProps = {};

const mapStateToProps = ({ event }) => ({
    ...event
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.id);
    }

    render() {
        return (
            <EventDetails
                {...this.props}
            />
        );
    }
}

EventDetailsContainer.propTypes = propTypes;

export default enhance(EventDetailsContainer);
