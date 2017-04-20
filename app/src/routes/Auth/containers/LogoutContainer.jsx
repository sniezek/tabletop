import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../modules/Auth";
import Logout from "../components/Logout.jsx";

const propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = {
    logout
};

const mapStateToProps = ({ user }) => ({ user });

class LogoutContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };

        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        this.logout();
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    redirect() {
        const { router } = this.props;
        router.push("/");
    }

    logout() {
        this.props.logout(({ ok }) => {
            if (ok) {
                this.setState({
                    loading: false
                }, () => {
                    this.timer = setTimeout(this.redirect, 10000);
                });
            }
        });
    }

    render() {
        const { loading } = this.state;

        return (
            <Logout
                loading={loading}
            />
        );
    }
}

LogoutContainer.propTypes = propTypes;
LogoutContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
