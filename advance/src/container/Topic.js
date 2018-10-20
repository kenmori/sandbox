import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

import { Route } from "../common/Routing";
import Topic from "../components/Topic";

let TopicContainer = props => <Topic {...props} />;

const mapStateToProps = (state, props) => {
  return {
    text: "topick"
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default compose(
  setDisplayName("TopicContainer"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TopicContainer);
