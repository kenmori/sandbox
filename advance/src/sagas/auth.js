import { all, call, put, fork, take } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import { push } from "react-router-redux";
//import { fetchPost, fetchPut, fetchGet } from './utills/fetch';
//import { LOGIN_FORM } from '../constants/form';
import * as auth from "../modules/auth";
//import { setToken } from '../modules/localStorage';
//import * as me from '../modules/me';
//import * as information from '../modules/information';
import * as responseError from "../modules/responseError";
//import * as router from '../selectors/router';
import { REQUEST_LOGIN, FAILUER_LOGIN, SUCCESS_LOGIN } from "../modules/auth";
import * as modal from "../modules/modal";
import api, { postHeaderOption } from "./api";

export function* postLogin() {
  while (true) {
    const action = yield take(REQUEST_LOGIN);
    try {
      const res = yield call(api, "api-token-auth/", {
        ...postHeaderOption,
        body: JSON.stringify(action.payload)
      });
      console.log(res, "fafa");
      debugger;
      localStorage.setItem("token", res.token);
      yield put(push("/"));
      yield put(startSubmit("login"));
      yield put(reset("login"));
      yield put(stopSubmit("login"));
      yield put(auth.successLogin(true));
    } catch (e) {
      console.log(e, "eerr");
      yield put(auth.failuerLogin(e));
      yield put(modal.openModal({ info: e.non_field_errors[0] }));
      //yield put(reset(LOGIN_FORM));
      // yield put(stopSubmit(LOGIN_FORM));
      // yield put(setToken(data.token));
      // yield put(auth.successLogin(true));
      //ログイン時にはすでにmount状態のnavi。ここでお知らせ叩くことで
      //前ユーザーのお知らせを破棄、現ユーザーのそれに更新している
      //yield put(information.request());
      //yield put(auth.navigateByProfile());
    }
  }
}

export function* logout() {
  while (true) {
    const action = yield take(auth.logout);
    localStorage.removeItem("token");
    yield put(auth.logout());
    yield put(push("/login"));
  }
}

export default function*() {
  yield all([fork(postLogin), fork(logout)]);
}
