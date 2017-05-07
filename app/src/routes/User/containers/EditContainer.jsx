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

        this.props.editMail({
            newMail
        }, ({ ok }) => {
            if (!ok) {
                this.setState({
                    password: "",
                    passwordConfirm: "",
                    loading: false
                });
            }
        });

        console.log("editMail");
    }

    editPass() {
        console.log("editPass");
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
