import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editMail, editPass } from "../../../store/edit";

const propTypes = {
    edit: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = dispatch => ({
    editMail: editMail(dispatch),
    editPass: editPass(dispatch)
});

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EditContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            loading: false
        };

        this.editMail = this.editMail.bind(this);
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
