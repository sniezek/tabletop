import React from "react";
import pure from "recompose/pure";
import { IndexLink } from "react-router";
import "./DrawerLogo.scss";

const enhance = pure;

const DrawerLogo = () => (
    <h1 className="drawer-logo">
        <IndexLink to="/" className="drawer-logo__link">Tabletop</IndexLink>
    </h1>
);

export default enhance(DrawerLogo);
