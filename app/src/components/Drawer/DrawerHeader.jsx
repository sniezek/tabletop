import React from "react";
import "./DrawerHeader.scss";

const DrawerHeader = () => (
    <header className="demo-drawer-header">
        <img src="images/user.jpg" className="demo-avatar" alt="avatar" />
        <div className="demo-avatar-dropdown">
            <span>hello@example.com</span>
        </div>
    </header>
);

export default DrawerHeader;
