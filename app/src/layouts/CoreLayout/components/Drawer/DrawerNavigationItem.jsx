import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import Icon from "../../../../components/Icon";
import "./DrawerNavigationItem.scss";

const propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

const enhance = pure;

const DrawerNavigationItem = ({ icon, label, path }) => (
    <Link
        to={path}
        className="mdl-navigation__link"
    >
        <Icon name={icon} />
        {label}
    </Link>
);

DrawerNavigationItem.propTypes = propTypes;

export default enhance(DrawerNavigationItem);
