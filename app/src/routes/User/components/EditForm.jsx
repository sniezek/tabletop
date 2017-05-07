import React from "react";
import "./Edit.scss"
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";
import PropTypes from "prop-types";
import pure from "recompose/pure";

const propTypes = {
    loading: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    editMail: PropTypes.func,
    editPass: PropTypes.func,
};

const defaultProps = {
    loading: false,
    password: "",
    editMail: () => {},
    editPass: () => {}
};

const enhance = pure;

const bindActions = (editMail, editPass) => [{
    label: "Change email",
    onClick: editMail
}, {
    label: "Change password",
    onClick: editPass
}];

const EditForm = ({ loading, password, email, editMail, editPass, setNewMail, setNewPass }) => (
    <CardForm
        title="Edit"
        loading={loading}
        actions={bindActions(editMail, editPass)}
        className="editform"
    >
        <div>
            <div>
                <IconTextfield
                    icon="lock"
                    label="New password"
                    type="password"
                    value={password}
                    onChange={setNewPass}
                />
                <IconTextfield
                    icon="mail"
                    label="New Email"
                    type="email"
                    value={email}
                    onChange={setNewMail}
                />
            </div>
        </div>
    </CardForm>
);

EditForm.propTypes = propTypes;
EditForm.defaultProps = defaultProps;

export default enhance(EditForm);
