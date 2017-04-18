import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import "./CoreLayout.scss";
import "../../styles/core.scss";

export const CoreLayout = ({ children }) => (
    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header />
        <Drawer />
        <main className="mdl-layout__content mdl-color--grey-100">
            {children}
        </main>
    </div>
);

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default CoreLayout;
