import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset, changePassword } from "../../../store/auth";
import Reset from "../components/Reset.jsx";

const propTypes = {
    reset: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    token: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    id: PropTypes.string,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    id: "",
    token: "",
    password: "",
    confirmPassword: ""
};

const mapDispatchToProps = {
    reset, changePassword
};

const mapStateToProps = ({ token, id, password }) => ({ token, id, password });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class ResetContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.router.location.query.id,
            token: this.props.router.location.query.token,
            loading: false
        };

        this.reset = this.reset.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.redirect = this.redirect.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setConfirmPassword = this.setConfirmPassword.bind(this);
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
    }

    redirect(path = "/") {
        const { router } = this.props;
        router.push({ pathname:path, state:{id: this.state.id, password: ""}});
    }

    setPassword({ target }) {
        this.setState({
            password: target.value
        });
    }

    setConfirmPassword({ target }) {
        this.setState({
            confirmPassword: target.value
        });
    }

    changePassword() {
        const { id, token, password, confirmPassword } = this.state;

        this.setState({
            loading: true
        });

        if(password.length < 1) {
            alert("Password can't be empty.");
            this.setState({
                loading: false
            });
        } else if (!password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
            alert("Your password should be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit and one special character from !@#$%^&*");
            this.setState({
                loading:false
            });
        } else if(password===confirmPassword) {
            this.props.changePassword({
                id,
                password,
                token
            }, ({ok}) => {
                if (!ok) {
                    this.setState({
                        password: "",
                        confirmPassword: "",
                        loading: false
                    });
                    alert("Error encountered while changing password.");
                }
                else {
                    this.setState({
                        password: "",
                        confirmPassword: "",
                        loading: false
                    });
                    alert("Password successfully changed.");
                }
            });
        } else {
            alert("Entered passwords don't match.");
            this.setState({
                password: "",
                confirmPassword: "",
                loading: false
            });
        }
    }

    reset() {
        const { token, id } = this.state;

        this.setState({
            loading: true
        });

        this.props.reset({
            token, id
        }, ({ ok }) => {
            if(ok) {
                alert(" Proper token. Now you can change your password. ");
            }
            else {
                alert("Error encountered while checking token.");
                this.redirect('/login');
            }
            this.setState({
                loading: false
            });
        });
    }


    render() {
        const { token, id, loading, password, confirmPassword } = this.state;

        return (
            <Reset
                loading={loading}
                id={id}
                reset={this.reset}
                password={password}
                confirmPassword={confirmPassword}
                setPassword={this.setPassword}
                setConfirmPassword={this.setConfirmPassword}
                changePassword = {this.changePassword}
                token={token}
            />
        );
    }

    componentDidMount() {
        this.reset();
    }

}

ResetContainer.propTypes = propTypes;
ResetContainer.defaultProps = defaultProps;

export default enhance(ResetContainer);
