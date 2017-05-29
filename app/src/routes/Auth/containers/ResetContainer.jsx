import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset } from "../../../store/auth";
import Reset from "../components/Reset.jsx";

const propTypes = {
    reset: PropTypes.func.isRequired,
    token: PropTypes.string,
    id: PropTypes.string,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    id: "",token:""
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
            id: this.props.router.location.query.id,
            token: this.props.router.location.query.token,
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
        router.push({ pathname:path, state:{id: this.state.id, password: ""}});
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
                alert("Token validated. Your new password "+ok);
                //this.redirect('/user/change');
            }
            else {
                alert("Error encountered while checking token.");
            }
            this.setState({
                token: "",
                id: 0,
                loading: false
            });
        });
    }


    render() {
        const { token, id, loading } = this.state;

        return (
            <Reset
                loading={loading}
                id={id}
                reset={this.reset}
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
