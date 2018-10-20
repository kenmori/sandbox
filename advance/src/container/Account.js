import React from "react";
import { compose, setDisplayName } from "recompose";
import { Route } from "../common/Routing";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

let AccountContainer = props => {
  let { isPrinstien, handleSubmit, onSubmit, submitting } = props;
  return (
    <div>
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          component="input"
          name="firstname"
          placeholder="アカウント名"
        />
        <Field
          type="email"
          component="input"
          name="email"
          placeholder="メールアドレス"
        />
        <button type="submit" value="送信" disabled={submitting}>
          送信
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const title = props.match.path.includes("/regist")
    ? "ユーザー登録"
    : "ユーザー編集";
  return {
    title
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const fnPost = () => {
    dispatch();
  };
  const fnPatch = () => {
    dispatch();
  };
  const fn = path => (path.includes("/regist") ? fnPost : fnPatch);

  return {
    onSubmit: fn(ownProps.match.path)
  };
};
export default compose(
  setDisplayName("AccountContainer"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "register" })
)(AccountContainer);
