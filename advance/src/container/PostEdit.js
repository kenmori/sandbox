import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

import { Route } from "../common/Routing";

let PostEdit = props => (
  <div>
    {props.match.params.id}
    をEdit detail {JSON.stringify(props)}
  </div>
);

const mapStateToProps = (state, props) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default compose(
  setDisplayName("PostEditContainer"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostEdit);
