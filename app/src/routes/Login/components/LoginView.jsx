import React from "react";
import { Card, CardTitle, CardText, CardActions } from "react-mdl/lib/Card";
import Button from "react-mdl/lib/Button";
import { Link } from "react-router";
import LoginInput from "./LoginInput.jsx";
import "./LoginView.scss";

export const LoginView = () => (
    <Card shadow={0} className="login">
        <CardTitle className="login__header">Log in</CardTitle>
        <CardText className="login__content">
            Don&#39;t have an account yet? <Link to="/register" className="login__link">Click here to register!</Link>
            <div className="login__form">
                <LoginInput
                    icon="face"
                    label="Username"
                />
                <LoginInput
                    icon="lock"
                    label="Password"
                    type="password"
                />
            </div>
        </CardText>
        <CardActions className="login__actions">
            <Button>Remind password</Button>
            <Button colored>Login</Button>
        </CardActions>
    </Card>
);

export default LoginView;
