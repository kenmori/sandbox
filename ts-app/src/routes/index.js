//web
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
// import { persistStore, persistReducer } from "redux-persist";
//import { PersistGate } from "redux-persist/integration/react";
import Root from "../container/Root";

// const routes = (
//   <div>
//     <NavBar />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/hello" component={Hello} />
//       <Route path="/counter" component={Counter} />
//       <Route component={NoMatch} />
//     </Switch>
//   </div>
// )

// export default routes
// const styles = StyleSheet.create({
//   app: {
//     flex: 1
//   },
//   appHeader: {
//     flex: 1,
//     backgroundColor: "#222",
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   appTitle: {
//     fontSize: 16,
//     color: "white"
//   },
//   appIntro: {
//     flex: 2,
//     fontSize: 30,
//     textAlign: "center"
//   }
// });

const Routes = props => (
  <div>
    <Switch>
      <Route path="/" render={props => <Root {...props} />} />
    </Switch>
  </div>
);

export default Routes;
