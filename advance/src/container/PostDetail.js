import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { Platform, View, Button, Text } from "react-native";
import { Router, Switch, Route, Link } from "../common/Routing";

let PostDetail = props => (
  <div>
    <div>
      detail {props.match.params.id}
      <Link to="/post/11/edit">
        <Text>投稿編集</Text>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default compose(
  setDisplayName("PostDetailContainer"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostDetail);
