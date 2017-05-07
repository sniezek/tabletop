import React from "react";
import EditHeader from "./EditHeader"
import EditForm from "./EditForm"
import EditContainer from "../containers/EditContainer"
import "./Edit.scss";

export const EditView = () => (
  <div className="edit">
    <EditHeader/>
    <EditContainer/>
  </div>
);

export default EditView;
