import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editMail, editPass } from "../../../store/edit";
import EditForm from "../components/EditForm";

const propTypes = {
    editMail: PropTypes.func.isRequired,
    editPass: PropTypes.func.isRequired,
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = {
    editMail,
    editPass
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EditContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            newMail: "",
            newPassword: "",
            confirmNewPassword: "",
            loading: false
        };

        this.editMail = this.editMail.bind(this);
        this.editPass = this.editPass.bind(this);
        this.setNewMail = this.setNewMail.bind(this);
        this.setNewPass = this.setNewPass.bind(this);
        this.setConfirmNewPass = this.setConfirmNewPass.bind(this);
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

    setConfirmNewPass({ target }) {
        this.setState({
            confirmNewPassword: target.value
        });
    }

    editMail() {
        const { newMail } = this.state;

        this.setState({
            loading: true
        });

        const username = this.props.user.name;

        this.props.editMail({
            username: username,
            password: "aaa",
            email: newMail
        }, ({ ok }) => {
            this.setState({
                newMail: "",
                loading: false
            });
            if (!ok) {
                alert("Error encountered while changing e-mail.");
            } else {
                alert("E-mail successfully changed.");
            }
        });
    }

    editPass() {
        const { newPassword, confirmNewPassword } = this.state;

        this.setState({
            loading: true
        });

        const username = this.props.user.name;
        const oldemail = this.props.user.email;

        if(newPassword.length < 1) {
            alert("Password can't be empty.");
            this.setState({
                loading: false
            });
        }
        else if(newPassword===confirmNewPassword) {
            this.props.editPass({
                username,
                email: oldemail,
                password: newPassword
            }, ({ok}) => {
            if (!ok) {
                this.setState({
                    newPassword: "",
                    confirmNewPassword: "",
                    loading: false
                });
                alert("Error encountered while changing password.");
              }
            else {
                this.setState({
                    newPassword: "",
                    confirmNewPassword: "",
                    loading: false
                });
                alert("Password successfully changed.");
              }
            });
        } else {
            alert("Entered passwords don't match.");
            this.setState({
                newPassword: "",
                confirmNewPassword: "",
                loading: false
            });
        }
    }

    render() {
        const { newMail, newPassword, confirmNewPassword, loading } = this.state;

        return (
            <EditForm
                loading={loading}
                email={newMail}
                password={newPassword}
                confirmPassword={confirmNewPassword}
                editMail={this.editMail}
                editPass={this.editPass}
                setNewMail={this.setNewMail}
                setNewPass={this.setNewPass}
                setConfirmNewPass={this.setConfirmNewPass}
            />
        );
    }
}

EditContainer.propTypes = propTypes;
EditContainer.defaultProps = defaultProps;

export default enhance(EditContainer);
