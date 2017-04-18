import React from "react";
import PropTypes from "prop-types";
import "./DrawerNavigationItem.scss";

const propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

const DrawerNavigationItem = ({ icon, label }) => (
    <a className="mdl-navigation__link" href="">
        <i className="material-icons" role="presentation">{icon}</i>
        {label}
    </a>
);

DrawerNavigationItem.propTypes = propTypes;

export default DrawerNavigationItem;
