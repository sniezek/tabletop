import React from "react";
import PropTypes from "prop-types";
import DrawerLogo from "./DrawerLogo.jsx";
import DrawerProfile from "./DrawerProfile.jsx";
import "./DrawerHeader.scss";

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const DrawerHeader = ({ user }) => (
    <header className="drawer-header">
        <DrawerLogo />
        <DrawerProfile
            name={user.name}
            avatar={user.avatar}
        />
    </header>
);

DrawerHeader.propTypes = propTypes;
DrawerHeader.defaultProps = defaultProps;

export default DrawerHeader;
