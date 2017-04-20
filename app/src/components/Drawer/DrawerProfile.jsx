import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import Icon from "../Icon";
import "./DrawerProfile.scss";

const propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

const DrawerProfile = ({ avatar, name }) => (
    <div className="drawer-profile">
        <img src={avatar} className="drawer-profile__avatar" alt="avatar" />
        <div className="drawer-profile__links">
            <a href="#" className="drawer-profile__name">{name}</a>
            <Link to="/logout" className="drawer-profile__logout">
                <Icon name="exit_to_app" className="drawer-profile__logout-icon" />
                logout
            </Link>
        </div>
    </div>
);

DrawerProfile.propTypes = propTypes;

export default DrawerProfile;
