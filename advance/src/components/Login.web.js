import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose, branch, renderComponent, setDisplayName } from "recompose";
import { Image, Platform, View, Text, StyleSheet, Button } from "react-native";
import Modal from "./Modal";

export default props => {
  const { onSubmit, handleSubmit, pristine, submitting, reset } = props;
  return (
    <View>
      <Modal {...props}>
        <div>fafa</div>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <Field
            type="text"
            placeholder="username"
            name="username"
            component="input"
          />
        </div>
        <div>
          <label>PassWord</label>
          <Field
            type="password"
            placeholder="Password"
            name="password"
            component="input"
          />
        </div>
        <button type="submit" disabled={pristine}>
          送信する
        </button>
        <button type="button" onClick={reset} disabled={pristine || submitting}>
          リセット
        </button>
      </form>
    </View>
  );
};
