import React from "react";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import LoginInput from "./LoginInput.jsx";
import "./LoginView.scss";

const actions = [{
    label: "Remind password"
}, {
    label: "Login",
    colored: true
}];

const LoginView = () => (
    <CardForm
        title="Log in"
        loading={false}
        actions={actions}
    >
        <div className="login__content">
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
        </div>
    </CardForm>
);

export default LoginView;
