import React from "react";
import { Link } from "react-router";
import { Card } from "react-mdl/lib/Card";

const LogoutInfo = () => (
    <Card shadow={0} className="logout__info">
        <p>You have been logged out properly and will be redirected to home page shortly. </p>
        <p><Link to="/login" className="logout__link">Click here to log in again.</Link></p>
    </Card>
);

export default LogoutInfo;
