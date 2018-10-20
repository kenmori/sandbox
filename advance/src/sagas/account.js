import { call, all, fork, take, put } from "redux-saga/effects";
import * as account from "../modules/account";
import api from "./api";

function* getAccount() {
  while (true) {
    const faf = yield take(account.REQUEST);
    try {
      const data = yield call(api, "images/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      yield put(account.success(data));
    } catch (e) {
      yield put(account.failur(error));
    }
  }
}
export default function*() {
  yield all([fork(getAccount)]);
}
