import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

import { Route } from "../common/Routing";
import User from "../components/User";

let UserContainer = props => <User {...props} />;

const mapStateToProps = (state, props) => {
  return { text: "mypage" };
};
const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default compose(
  setDisplayName("UserContainer"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserContainer);
