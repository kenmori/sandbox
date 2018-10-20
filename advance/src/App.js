//web
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Router, Switch, Route, Link } from "./common/Routing";
import { View, Text, StyleSheet } from "react-native";
import { compose, lifecycle } from "recompose";

import Account from "./container/Account";
import PrivateRoute from "./components/PrivateRute";
import Top from "./container/top";
import Login from "./container/login";
import Post from "./container/Post";
import PostDetail from "./container/PostDetail";
import PostEdit from "./container/PostEdit";
import User from "./container/User";
import Search from "./container/Search";
import Topic from "./container/Topic";
import store, { persistor } from "./configStore";
import Loading from "./components/Loading";

const AuthCheck = () => <div>AuthCheck</div>;
const NotFound = () => <div>NotFound</div>;

let App = () => (
  <Provider store={store}>
    <PersistGate loading={Loading} persistor={persistor}>
      <Router>
        <View style={styles.app}>
          <Link to="/">
            <Text>新着一覧画面</Text>
          </Link>
          <Link to="/regist">
            <Text>ユーザー登録</Text>
          </Link>
          <Link to="/profile">
            <Text>プロフィール編集</Text>
          </Link>
          <Link to="/post">
            <Text>投稿</Text>
          </Link>
          <Link to="/post/11">
            <Text>投稿詳細</Text>
          </Link>
          <Link to="/post/15/edit">
            <Text>投稿編集</Text>
          </Link>
          <Link to="/user">
            <Text>マイページ</Text>
          </Link>
          <Link to="/search">
            <Text>検索</Text>
          </Link>
          <Link to="/topic">
            <Text>人気一覧</Text>
          </Link>

          <Switch>
            {/*<Link to="/about">
          <Text>About</Text>
        </Link>
          {/*<Route path="/" underlayColor="#f0f4f7" component={AuthCheck} />*/}
            <Route exact path="/" underlayColor="#f0f4f7" component={Top} />
            <Route path="/login" underlayColor="#f0f4f7" component={Login} />
            <Route
              path="/profile"
              underlayColor="#f0f4f7"
              component={Account}
            />
            <Route
              exact
              path="/post/"
              underlayColor="#f0f4f7"
              component={Post}
            />
            <Route
              exact
              path="/post/:id/"
              render={props => <PostDetail {...props} />}
            />
            <Route exact path="/post/:id/edit" component={PostEdit} />
            <Route path="/regist" underlayColor="#f0f4f7" component={Account} />
            <PrivateRoute
              path="/topic"
              underlayColor="#f0f4f7"
              component={Topic}
            />
            <PrivateRoute
              path="/user"
              underlayColor="#f0f4f7"
              component={User}
            />
            <PrivateRoute
              path="/search"
              underlayColor="#f0f4f7"
              component={Search}
            />

            <Route path="/" underlayColor="#f0f4f7" component={NotFound} />
          </Switch>
        </View>
      </Router>
    </PersistGate>
  </Provider>
);

export default compose(
  lifecycle({
    componentDidMount() {}
  })
)(App);

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    fontSize: 16,
    color: "white"
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: "center"
  }
});
