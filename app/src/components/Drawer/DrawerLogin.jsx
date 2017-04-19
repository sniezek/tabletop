import React from "react";
import Icon from "../Icon";
import "./DrawerLogin.scss";

const actions = [{
    label: "Login",
    icon: "lock_outline"
}, {
    label: "Create account",
    icon: "person_add"
}];

const DrawerLogin = () => (
    <div className="drawer-login">
        <ul className="drawer-login__actions">
            { actions.map(({ label, icon }) => (
                <li className="drawer-login__action" key={label}>
                    <a href="#" className="drawer-login__link">
                        <Icon name={icon} className="drawer-login__link-icon" />
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default DrawerLogin;
