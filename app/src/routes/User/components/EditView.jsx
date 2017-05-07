import React from "react";
import EditContainer from "../containers/EditContainer"
import PageHeader from "../../../components/PageHeader";
import "./Edit.scss";

export const EditView = () => (
  <div className="edit">
    <PageHeader
        title="Edit"
    />
    <EditContainer/>
  </div>
);

export default EditView;
