import React from "react";
import "./Edit.scss"
import pure from "recompose/pure";
import PageHeader from "../../../components/PageHeader";

const enhance = pure;

export const EditHeader = () => (
    <PageHeader
        title="Edit account"
    />
);

export default enhance(EditHeader);
