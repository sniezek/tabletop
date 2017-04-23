import React from "react";
import pure from "recompose/pure";
import Spinner from "react-mdl/lib/Spinner";
import "./MainPreloader.scss";

const enhance = pure;

const MainPreloader = () => (
    <div className="main-preloader mdl-color--blue-grey-900">
        <div className="main-preloader__wrapper">
            <h1 className="main-preloader__name">Tabletop</h1>
            <Spinner className="main-preloader__spinner" />
        </div>
    </div>
);

export default enhance(MainPreloader);
