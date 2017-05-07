import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DrawerLogo from "./DrawerLogo.jsx";
import DrawerProfile from "./DrawerProfile.jsx";
import DrawerLogin from "./DrawerLogin.jsx";
import "./DrawerHeader.scss";

const propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }),
    actions: PropTypes.array
};

const defaultProps = {
    user: null,
    actions: []
};

const enhance = pure;

const DrawerHeader = ({ user, actions }) => (
    <header className="drawer-header">
        <DrawerLogo />
        { (user && (
            <DrawerProfile
                name={user.name}
                email={user.email}
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

export default enhance(DrawerHeader);
