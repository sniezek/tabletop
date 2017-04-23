import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Spinner from "react-mdl/lib/Spinner";
import LogoutInfo from "./LogoutInfo.jsx";
import "./Logout.scss";

const propTypes = {
    loading: PropTypes.bool
};

const defaultProps = {
    loading: true
};

const enhance = pure;

const Logout = ({ loading }) => (
    <div className="logout">
        { loading ? (
            <Spinner className="logout__spinner" />
        ) : (
            <LogoutInfo />
        )}
    </div>
);

Logout.propTypes = propTypes;
Logout.defaultProps = defaultProps;

export default enhance(Logout);
