import React from "react";
import DrawerNavigationItem from "./DrawerNavigationItem.jsx";
import "./DrawerNavigation.scss";

const links = [{
    icon: "home",
    label: "Home"
}, {
    icon: "event",
    label: "Events"
}];

const DrawerNavigation = () => (
    <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        {links.map(({ icon, label }) =>
            <DrawerNavigationItem
                key={label}
                icon={icon}
                label={label}
            />
        )}
    </nav>
);

export default DrawerNavigation;
