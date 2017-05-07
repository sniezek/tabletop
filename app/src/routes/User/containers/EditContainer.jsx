import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const propTypes = {
    edit: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = {
    edit
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            loading: false
        };

        this.edit = this.edit.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.redirect = this.redirect.bind(this);
    }
    render() {
        const { loading, password } = this.state;

        return (
            <Edit
                loading={loading}
                password={password}
                edit={this.edit}
                setPassword={this.setPassword}
            />
        );
    }
}


EditContainer.propTypes = propTypes;
EditContainer.defaultProps = defaultProps;

export default enhance(EditContainer);
