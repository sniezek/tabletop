import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EventDetails from "../components/EventDetails.jsx";
import { loadEvent } from "../../Index/modules/EventActions";

const propTypes = {
    id: PropTypes.number.isRequired,
    loadDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    loadDetails: id => loadEvent(id)(dispatch)
});

const mapStateToProps = ({ event }) => ({
    ...event
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { loadDetails, id } = this.props;

        loadDetails(id);
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
