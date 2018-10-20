import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

import { Route } from "../common/Routing";
import Search from "../components/Search";
import * as auth from "../modules/auth";

let SearchContainer = props => <Search {...props} />;

const mapStateToProps = (state, props) => {
  return {};
};
const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(auth.logout());
  }
});
export default compose(
  setDisplayName("SearchContainer"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchContainer);
