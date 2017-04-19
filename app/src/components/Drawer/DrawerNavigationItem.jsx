import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import "./DrawerNavigationItem.scss";

const propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

const DrawerNavigationItem = ({ icon, label }) => (
    <a className="mdl-navigation__link" href="">
        <Icon name={icon} />
        {label}
    </a>
);

DrawerNavigationItem.propTypes = propTypes;

export default DrawerNavigationItem;
