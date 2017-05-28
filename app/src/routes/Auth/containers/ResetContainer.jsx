import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset } from "../../../store/auth";
import Reset from "../components/Remind.jsx";

const propTypes = {
    reset: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null,
    token: "",
    id: 0
};

const mapDispatchToProps = {
    reset
};

const mapStateToProps = ({ token, id }) => ({ token, id });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class ResetContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            token: this.props.params.token,
            loading: false
        };

        this.reset = this.reset.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
    }

    redirect(path = "/") {
        const { router } = this.props;
        router.push(path);
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
                alert("Remind successful, please check your mailbox.");
            }
            else {
                alert("Error encountered while reminding password.");
            }
            this.setState({
                token: "",
                id: 0,
                loading: false
            });
        });
    }


    render() {
        const { token, id } = this.state;

        return (
            <Reset
                loading={loading}
                id={id}
                reset={this.reset}
                token={token}
            />
        );
    }
}

ResetContainer.propTypes = propTypes;
ResetContainer.defaultProps = defaultProps;

export default enhance(ResetContainer);
