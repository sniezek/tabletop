import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import DrawerContainer from "../../containers/DrawerContainer.jsx";
import "./CoreLayout.scss";
import "../../styles/core.scss";

const CoreLayout = ({ children }) => (
    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header />
        <DrawerContainer />
        <main className="mdl-layout__content mdl-color--grey-100">
            {children}
        </main>
    </div>
);

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default CoreLayout;
