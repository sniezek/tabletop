import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DrawerContainer from "./containers/DrawerContainer.jsx";
import "./CoreLayout.scss";
import "../../styles/core.scss";

const propTypes = {
    children: PropTypes.element.isRequired
};

const enhance = pure;

const CoreLayout = ({ children }) => (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <DrawerContainer />
        <main className="mdl-layout__content mdl-color--grey-100 main">
            {children}
        </main>
    </div>
);

CoreLayout.propTypes = propTypes;

export default enhance(CoreLayout);
