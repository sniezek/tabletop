import React from "react";
import DrawerLogo from "./DrawerLogo.jsx";
import DrawerProfile from "./DrawerProfile.jsx";
import "./DrawerHeader.scss";

const DrawerHeader = () => (
    <header className="drawer-header">
        <DrawerLogo />
        <DrawerProfile
            name="John Doe"
            avatar="https://getmdl.io/templates/dashboard/images/user.jpg"
        />
    </header>
);

export default DrawerHeader;
