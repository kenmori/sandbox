import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import PrivateRoute from "../component/PrivateRoute";
import { Link } from "react-router-dom";
const Index = props => (
  <div>
    <header>
      <Link to="/">
        <div>新着一覧画面</div>
      </Link>
      <Link to="/regist">
        <div>ユーザー登録</div>
      </Link>
      <Link to="/profile">
        <div>プロフィール編集</div>
      </Link>
      <Link to="/post">
        <div>投稿</div>
      </Link>
      <Link to="/post/57">
        <div>投稿詳細</div>
      </Link>
      <Link to="/post/57/edit">
        <div>投稿編集</div>
      </Link>
      <Link to="/user">
        <div>マイページ</div>
      </Link>
      <Link to="/search">
        <div>検索</div>
      </Link>
      <Link to="/topic">
        <div>人気一覧</div>
      </Link>
    </header>
    <Switch>
      <Route
        exact
        path="/"
        underlayColor="#f0f4f7"
        render={props => <div>fafa</div>}
      />
      <Route
        exact
        path="/post/"
        underlayColor="#f0f4f7"
        component={<div>fafa</div>}
      />
      <Route exact path="/post/:id/" render={props => <div>fafa</div>} />
      {/* <Route path="/profile" underlayColor="#f0f4f7" component={Account} />
      <Route path="/login" underlayColor="#f0f4f7" component={Login} />
      <Route exact path="/post/:id/edit" component={PostEdit} />
      <Route path="/regist" underlayColor="#f0f4f7" component={Account} />
      <PrivateRoute path="/topic" underlayColor="#f0f4f7" component={Topic} /> */}
      <PrivateRoute
        path="/user/:id/"
        underlayColor="#f0f4f7"
        component={<div>fafa</div>}
      />
      <Route
        exact
        path="/search"
        underlayColor="#f0f4f7"
        component={<div>fafa</div>}
      />
      <Route exact path="/search/:name" component={<div>fafa</div>} />
    </Switch>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { state };
};
const mapDispatchToProps = dispatch => {
  return { dispatch };
};
// toggleSideMenu(flag) {
//   dispatch(sideMenu.toggleSideMenu(flag));
// },
// naviLikeLogin() {
//   dispatch(auth.navigateByProfile());
// },
// requestInformation() {
//   dispatch(information.request());

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)
);
