import React, { Component } from "react";
import { connect } from "react-redux";
import Events from "../components/Events.jsx";

const mapDispatchToProps = {};

const mapStateToProps = ({ user }) => ({ user });

class EventsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Events />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
