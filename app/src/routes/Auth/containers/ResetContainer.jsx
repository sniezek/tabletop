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
    id: PropTypes.string,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    id: "",token:"", password:""
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

    changePassword() {
        const { token, id, password } = this.state;

        this.setState({
            loading: true
        });

        this.props.changePassword({
            id, password, token
        }, ({ ok }) => {
            if(ok) {
                //text().then(text => console.log(text));
                alert(" Your password has been changed ");
                //this.redirect('/user/change');
            }
            else {
                alert("Error encountered while checking token.");
                this.redirect('/login');
            }
            this.setState({
                token: "",
                id: 0,
                loading: false
            });
        });
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
                //text().then(text => console.log(text));
                alert(" Proper token. Change your password ");
                //this.redirect('/user/change');
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
        const { token, id, loading, password } = this.state;

        return (
            <Reset
                loading={loading}
                id={id}
                reset={this.reset}
                password={password}
                setPassword={this.setPassword}
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
