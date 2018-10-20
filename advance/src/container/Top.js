import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName, lifecycle } from "recompose";
import { Router, Switch, Route, Link } from "../common/Routing";
import { Platform, View, Button, Text } from "react-native";
import * as post from "../modules/post";

const Top = props => (
  <div>
    <div>
      <div>
        Top
        <Link to="/post/11/edit" />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    requestPost() {
      dispatch(post.get());
    }
  };
};
export default compose(
  setDisplayName("Top"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.requestPost();
    }
  })
)(Top);
