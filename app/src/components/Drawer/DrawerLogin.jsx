import React from "react";
import { Link } from "react-router";
import Icon from "../Icon";
import "./DrawerLogin.scss";

const actions = [{
    label: "Login",
    icon: "lock_outline",
    url: "/login"
}, {
    label: "Create account",
    icon: "person_add",
    url: "/register"
}];

const DrawerLogin = () => (
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

export default DrawerLogin;
