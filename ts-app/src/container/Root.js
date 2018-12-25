import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
const AuthCheck = () => <div>AuthCheck</div>;
const NotFound = () => <div>NotFound</div>;
const Root = props => (
  <Switch>
    {/* <Auth> */}
    {/* <Switch> */}
    <Route path="/" render={() => <App {...props} />} />
    {/* </Switch> */}
    {/* </Auth> */}
  </Switch>
);

export default Root;
