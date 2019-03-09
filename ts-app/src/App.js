import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import store from "./configStore";
import Routes from "./routes";
import Root from "./container/Root";

const App = props => (
  <Provider store={store}>
    <Router history={props.history}>
      {/* <ErrorBoundary> */}
      <Switch>
        <Route path="/" render={() => <Root {...props} />} />
      </Switch>
      {/* </ErrorBoundary> */}
    </Router>
  </Provider>
);

export default App;
