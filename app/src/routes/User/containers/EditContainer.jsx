import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editMail, editPass } from "../../../store/edit";
import EditForm from "../components/EditForm"

const propTypes = {
    editMail: PropTypes.func.isRequired,
    editPass: PropTypes.func.isRequired,
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

        // this.setState({
      //     loading: true
      // });
        var username = this.props.user.name;
        this.props.editMail({
            username, newMail
        }, ({ ok }) => {
            if (ok) {
                console.log("Succeeded");
                this.setState({
                    newMail: "",
                    loading: false
                });
            } else {
                console.log("Not succeeded");
            }
        });

    }

    editPass() {
        const { newMail, newPassword, loading } = this.state;

        // this.setState({
        //     loading: true
        // });

        var username = this.props.user.name;
        var password = newPassword;
        this.props.editPass({
            username, password
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
