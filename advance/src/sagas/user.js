import { select, all, take, fork, call, put } from "redux-saga/effects";
import api from "./api";
import * as user from "../modules/user";
export const selectorPhotoState = state => state.photo.selectedFiles;

function* getUser() {
  while (true) {
    const faf = yield take(user.REQUEST);
    try {
      const data = yield call(api, "images/", {});
      yield put(user.success(data));
    } catch (e) {
      yield put(user.failur(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(getUser);
}
