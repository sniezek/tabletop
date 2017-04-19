import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Drawer from "../components/Drawer";

const propTypes = {
    user: PropTypes.object.isRequired
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

export default connect(mapStateToProps)(DrawerContainer);
