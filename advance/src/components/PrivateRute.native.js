import React from "react";
import { Router, Switch, Route, Link, Redirect } from "../common/Routing";
import { Image, Platform, View, Text, StyleSheet, Button } from "react-native";

export default ({ component: Component, ...rest }) => (
  <Router
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
