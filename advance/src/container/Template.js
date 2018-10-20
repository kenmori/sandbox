import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { Router, Switch, Route, Link } from "../common/Routing";
import { Platform, View, Button, Text } from "react-native";

const Template = props => (
  <div>
    <div>
      <div>
        detail {JSON.stringify(props)}
        <Link to="/post/11/edit">
          <Text>Template</Text>
        </Link>
      </div>
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
  setDisplayName("Template"),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Template);
