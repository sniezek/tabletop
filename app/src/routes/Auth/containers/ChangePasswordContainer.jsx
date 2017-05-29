import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changePassword } from "../../../store/auth";
import ChangePassword from "../components/Remind.jsx";

const propTypes = {
    changePassword: PropTypes.func.isRequired,
    password: PropTypes.string,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    password: ""
};

const mapDispatchToProps = {
    changePassword
};

const mapStateToProps = ({ password }) => ({ password });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class ChangePasswordContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            loading: false
        };

        this.changePassword = this.changePassword.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
    }

    setPassword({ target }) {
        this.setState({
            password: target.value
        });
    }

    redirect(path = "/") {
        const { router } = this.props;
        router.push(path);
    }

    changePassword() {
        const { password, id } = this.state;

        this.setState({
            loading: true
        });

        this.props.changePassword({
            password, id
        }, ({ ok }) => {
            if(ok) {
                alert("Password has been changed.");
            }
            else {
                alert("Error encountered while changing password.");
            }
            this.setState({
                password: "",
                loading: false
            });
        });
    }


    render() {
        const { password, loading } = this.state;

        return (
            <ChangePassword
                loading={loading}
                changePassword={this.changePassword}
                setPassword={this.setPassword}
            />
        );
    }
}

ChangePasswordContainer.propTypes = propTypes;
ChangePasswordContainer.defaultProps = defaultProps;

export default enhance(ChangePasswordContainer);
