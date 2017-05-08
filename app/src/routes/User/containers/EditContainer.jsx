import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editMail, editPass } from "../../../store/edit";
import EditForm from "../components/EditForm"

const propTypes = {
    user: PropTypes.object,
};

const defaultProps = {
    user: null,
};

const mapDispatchToProps = dispatch => ({
    editMail,
    editPass,
});

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EditContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            newMail: "",
            newPassword: "",
            loading: false
        };

        this.editMail = this.editMail.bind(this);
        this.editPass = this.editPass.bind(this);
        this.setNewMail = this.setNewMail.bind(this)
        this.setNewPass = this.setNewPass.bind(this)
    }

    setNewMail({ target }) {
        this.setState({
            newMail: target.value
        });
    }

    setNewPass({ target }) {
        this.setState({
            newPassword: target.value
        });
    }

    editMail() {
        const { newMail, newPassword, loading } = this.state;

        this.setState({
            loading: true
        });
        console.log(this.props.user);
        var username = this.props.user.name;
        this.props.editMail({
            username, newMail
        }, ({ ok }) => {
            if (ok) {
                this.setState({
                    password: "",
                    passwordConfirm: "",
                    loading: false
                });
            }
        });

    }

    editPass() {
        console.log("editPass");
        const { newMail, newPassword, loading } = this.state;

        this.setState({
            loading: true
        });

        console.log(this.props.user);
        var username = this.props.user.name;
        var email = this.props.user.email;
        var password = newPassword;
        this.props.editPass({
            username, email, password
        }, ({ ok }) => {
            if (ok) {
                this.setState({
                    password: "",
                    passwordConfirm: "",
                    loading: false
                });
            }
        });
    }

    render() {
        const { newMail, newPassword, loading } = this.state;

        return (
            <EditForm
                loading={loading}
                email={newMail}
                password={newPassword}
                editMail={this.editMail}
                editPass={this.editPass}
                setNewMail={this.setNewMail}
                setNewPass={this.setNewPass}
            />
        );
    }
}

EditContainer.propTypes = propTypes;
EditContainer.defaultProps = defaultProps;

export default enhance(EditContainer);
