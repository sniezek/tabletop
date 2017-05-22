import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";

const propTypes = {
    loading: PropTypes.bool,
    email: PropTypes.string,
    remind: PropTypes.func
};

const defaultProps = {
    loading: false,
    email: "",
    remind: () => {}
};

const enhance = pure;

const bindActions = (remind) => [{
    label: "Remind password",
    onClick: remind
}];

const Remind = ({ loading, email, remind, setEmail }) => (
    <CardForm
        title="Remind password"
        loading={loading}
        actions={bindActions(remind)}
        className="remind"
    >
        <div className="remind__content">
            <div className="remind__form">
                <IconTextfield
                    icon="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                />
            </div>
        </div>
    </CardForm>
);

Remind.propTypes = propTypes;
Remind.defaultProps = defaultProps;

export default enhance(Remind);
