import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Drawer from "../components/Drawer";

const links = [{
    icon: "home",
    label: "Home",
    path: "/"
}, {
    icon: "event",
    label: "Events",
    path: "/events"
}, {
    icon: "people",
    label: "Tournaments",
    path: "/tournament"
}];

const actions = [{
    label: "Login",
    icon: "lock_outline",
    url: "/login"
}, {
    label: "Create account",
    icon: "person_add",
    url: "/register"
}];

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const mapStateToProps = ({ user }) => ({
    user
});

const DrawerContainer = ({ user }) => (
    <Drawer
        user={user}
        links={links}
        actions={actions}
    />
);

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(DrawerContainer);
