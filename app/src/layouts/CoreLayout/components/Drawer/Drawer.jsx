import React from "react";
import PropTypes from "prop-types";
import DrawerHeader from "./DrawerHeader.jsx";
import DrawerNavigation from "./DrawerNavigation.jsx";
import "./Drawer.scss";

const propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }),
    links: PropTypes.array,
    actions: PropTypes.array
};

const defaultProps = {
    user: null,
    links: [],
    actions: []
};

export const Drawer = ({ user, links, actions }) => (
    <div className="drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <DrawerHeader
            user={user}
            actions={actions}
        />
        <DrawerNavigation
            links={links}
        />
    </div>
);

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

export default Drawer;
