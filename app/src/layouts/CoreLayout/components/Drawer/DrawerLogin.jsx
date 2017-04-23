import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import Icon from "../../../../components/Icon";
import "./DrawerLogin.scss";

const propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
};

const defaultProps = {
    actions: []
};

const enhance = pure;

const DrawerLogin = ({ actions }) => (
    <div className="drawer-login">
        <ul className="drawer-login__actions">
            { actions.map(({ label, icon, url }) => (
                <li className="drawer-login__action" key={label}>
                    <Link to={url} className="drawer-login__link">
                        <Icon name={icon} className="drawer-login__link-icon" />
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

DrawerLogin.propTypes = propTypes;
DrawerLogin.defaultProps = defaultProps;

export default enhance(DrawerLogin);
