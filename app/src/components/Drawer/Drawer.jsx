import React from "react";
import DrawerHeader from "./DrawerHeader.jsx";
import DrawerNavigation from "./DrawerNavigation.jsx";
import "./Drawer.scss";

export const Drawer = () => (
    <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <DrawerHeader />
        <DrawerNavigation />
    </div>
);

export default Drawer;
