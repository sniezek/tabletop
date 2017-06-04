import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { remind } from "../../../store/auth";
import Remind from "../components/Remind.jsx";

const propTypes = {
    remind: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = {
    remind
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class RemindContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            loading: false
        };

        this.remind = this.remind.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
    }

    setEmail({ target }) {
        this.setState({
            email: target.value
        });
    }

    redirect(path = "/") {
        const { router } = this.props;
        router.push(path);
    }

    remind() {
        const { email } = this.state;

        this.setState({
            loading: true
        });

        this.props.remind({
            email
        }, ({ ok }) => {
            if(ok) {
                alert("Remind successful, please check your mailbox.");
            }
            else {
                alert("Error encountered while reminding password.");
            }
            this.setState({
                email: "",
                loading: false
            });
        });
    }


    render() {
        const { email, loading } = this.state;

        return (
            <Remind
                loading={loading}
                email={email}
                remind={this.remind}
                setEmail={this.setEmail}
            />
        );
    }
}

RemindContainer.propTypes = propTypes;
RemindContainer.defaultProps = defaultProps;

export default enhance(RemindContainer);
