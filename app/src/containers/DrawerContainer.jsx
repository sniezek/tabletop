import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Drawer from "../components/Drawer";

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: {}
};

const mapStateToProps = ({ user }) => ({
    user
});

const DrawerContainer = ({ user }) => (
    <Drawer
        user={user}
    />
);

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(DrawerContainer);
