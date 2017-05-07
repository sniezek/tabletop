import React from "react";
import EditHeader from "./EditHeader"
import EditForm from "./EditForm"
import "./Edit.scss";

export const EditView = () => (
  <div className="edit">
    <EditHeader/>
    <EditForm/>
  </div>
);

export default EditView;
