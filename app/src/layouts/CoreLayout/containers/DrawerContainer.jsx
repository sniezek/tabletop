import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { connect } from "react-redux";
import Drawer from "../components/Drawer";

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const mapStateToProps = ({ user }) => ({
    user
});

const enhance = compose(
    connect(mapStateToProps),
    pure
);

const links = [{
    icon: "home",
    label: "Home",
    path: "/"
}, {
    icon: "event",
    label: "Events",
    path: "/events"
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

const DrawerContainer = ({ user }) => (
    <Drawer
        user={user}
        links={links}
        actions={actions}
    />
);

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default enhance(DrawerContainer);
