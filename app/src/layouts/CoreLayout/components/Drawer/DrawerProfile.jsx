import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import Gravatar from "react-gravatar";
import Icon from "../../../../components/Icon";
import "./DrawerProfile.scss";

const propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

const enhance = pure;

const DrawerProfile = ({ email, name }) => (
    <div className="drawer-profile">
        <Gravatar
            email={email}
            size={48}
            rating="pg"
            default="identicon"
            className="drawer-profile__avatar"
            alt={`${name}'s avatar`}
        />
        <div className="drawer-profile__links">
            <Link to={`/users/${name}`} className="drawer-profile__name">{name}</Link>
            <Link to={`/users/edit`} className="drawer-profile__edit-account">Edit Account</Link>
            <Link to="/logout" className="drawer-profile__logout">
                <Icon name="exit_to_app" className="drawer-profile__logout-icon" />
                Logout
            </Link>
        </div>
    </div>
);

DrawerProfile.propTypes = propTypes;

export default enhance(DrawerProfile);
