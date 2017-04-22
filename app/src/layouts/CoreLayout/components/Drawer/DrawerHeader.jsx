import React from "react";
import PropTypes from "prop-types";
import DrawerLogo from "./DrawerLogo.jsx";
import DrawerProfile from "./DrawerProfile.jsx";
import DrawerLogin from "./DrawerLogin.jsx";
import "./DrawerHeader.scss";

const propTypes = {
    user: PropTypes.object,
    actions: PropTypes.array
};

const defaultProps = {
    user: null,
    actions: []
};

const DrawerHeader = ({ user, actions }) => (
    <header className="drawer-header">
        <DrawerLogo />
        { (user && (
            <DrawerProfile
                name={user.name}
                avatar={user.avatar}
            />
        )) || (
            <DrawerLogin
                actions={actions}
            />
        )}
    </header>
);

DrawerHeader.propTypes = propTypes;
DrawerHeader.defaultProps = defaultProps;

export default DrawerHeader;
