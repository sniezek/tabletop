import React from "react";
import "./Edit.scss"
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";
import PropTypes from "prop-types";
import pure from "recompose/pure";

const propTypes = {
    loading: PropTypes.bool,
    password: PropTypes.string,
    edit: PropTypes.func,
    setPassword: PropTypes.func
};

const defaultProps = {
    loading: false,
    password: "",
    edit: () => {},
    setPassword: () => {}
};

const enhance = pure;

const bindActions = (edit) => [{
    label: "Edit password",
    colored: true,
    onClick: edit
}];

const EditForm = ({ loading, password, edit, setPassword }) => (
    <CardForm
        title="Edit"
        loading={loading}
        actions={bindActions(edit)}
        className="editform"
    >
        <div>
            <div>
                <IconTextfield
                    icon="lock"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
            </div>
        </div>
    </CardForm>
);

EditForm.propTypes = propTypes;
EditForm.defaultProps = defaultProps;

export default enhance(EditForm);
