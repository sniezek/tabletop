import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../../store/auth";
import Register from "../components/Register.jsx";

const propTypes = {
    register: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = {
    register
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class RegisterContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: false
        };

        this.register = this.register.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
    }

    setUsername({ target }) {
        this.setState({
            username: target.value
        });
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

    register() {
        const { username, password } = this.state;

        console.log(username);
        console.log(password);

        this.setState({
            loading: true
        });

        this.props.register({
            username,
            password
        }, ({ ok }) => {
            if (!ok) {
                this.setState({
                    password: "",
                    loading: false
                });
            }
        });
    }

    render() {
        const { loading, username, password } = this.state;

        return (
            <Register
                loading={loading}
                username={username}
                password={password}
                register={this.register}
                setUsername={this.setUsername}
                setPassword={this.setPassword}
            />
        );
    }
}

RegisterContainer.propTypes = propTypes;
RegisterContainer.defaultProps = defaultProps;

export default enhance(RegisterContainer);
