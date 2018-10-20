import React from "react";
import * as selector from "../../selectors/auth";
import { connect } from "react-redux";
import { View, Button, Text } from "react-native";
import * as auth from "../../modules/auth";
import * as modal from "../../modules/modal";

import { withRouter } from "react-router-dom";
import Login from "../../components/Login";
import { Field, reduxForm } from "redux-form";
import {
  compose,
  branch,
  renderComponent,
  setDisplayName,
  lifecycle
} from "recompose";

const LoginContainer = lifecycle({
  componentDidMount() {}
})(Login);

const mapDipatchToProps = dispatch => {
  return {
    onSubmit(value) {
      dispatch(auth.requestLogin(value));
    },
    open() {
      dispatch(modal.openModal());
    },
    close() {
      dispatch(modal.closeModal());
    },
    dispatch
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    text: "login です",
    isOpen: state.modal.isOpen,
    info: state.modal.info
  };
};

export default compose(
  setDisplayName("Login"),
  withRouter,
  connect(
    mapStateToProps,
    mapDipatchToProps
  ),
  reduxForm({ form: "login", initialValues: { username: "", password: "" } }),
  setDisplayName("Login")
)(LoginContainer);
