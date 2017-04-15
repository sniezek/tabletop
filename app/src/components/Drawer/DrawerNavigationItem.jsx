import React from "react";
import PropTypes from "prop-types";
import "./DrawerNavigationItem.scss";

const propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

const DrawerNavigationItem = ({ icon, label }) => (
    <a className="mdl-navigation__link" href="">
        <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">{icon}</i>
        {label}
    </a>
);

DrawerNavigationItem.propTypes = propTypes;

export default DrawerNavigationItem;
