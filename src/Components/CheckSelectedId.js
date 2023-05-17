import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const StatetoProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const DispatchtoProps = (dispatch) => {
  return {};
};

const CheckSelectedId = (props) => {
  const selectedId = props.selectedTemplateId;
  return selectedId ? props.children : <Navigate to={"/"} />;
};

export default connect(StatetoProps, DispatchtoProps)(CheckSelectedId);
