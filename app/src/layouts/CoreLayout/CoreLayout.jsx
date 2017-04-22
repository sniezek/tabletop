import React from "react";
import PropTypes from "prop-types";
import DrawerContainer from "./containers/DrawerContainer.jsx";
import "./CoreLayout.scss";
import "../../styles/core.scss";

const CoreLayout = ({ children }) => (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <DrawerContainer />
        <main className="mdl-layout__content mdl-color--grey-100 main">
            {children}
        </main>
    </div>
);

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default CoreLayout;
