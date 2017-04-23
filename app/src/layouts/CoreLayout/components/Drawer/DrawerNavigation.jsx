import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DrawerNavigationItem from "./DrawerNavigationItem.jsx";
import "./DrawerNavigation.scss";

const propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    }))
};

const defaultProps = {
    links: []
};

const enhance = pure;

const DrawerNavigation = ({ links }) => (
    <nav className="navigation mdl-navigation mdl-color--blue-grey-800">
        {links.map(({ icon, label, path }) =>
            <DrawerNavigationItem
                key={label}
                icon={icon}
                label={label}
                path={path}
            />
        )}
    </nav>
);

DrawerNavigation.propTypes = propTypes;
DrawerNavigation.defaultProps = defaultProps;

export default enhance(DrawerNavigation);
