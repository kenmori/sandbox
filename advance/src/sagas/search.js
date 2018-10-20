import { select, all, take, fork, call, put } from "redux-saga/effects";
import api from "./api";
import * as search from "../modules/search";
export const selectorPhotoState = state => state.photo.selectedFiles;

function* getSearch() {
  while (true) {
    const faf = yield take(search.REQUEST);
    try {
      const data = yield call(api, "images/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      yield put(search.success(data));
    } catch (e) {
      yield put(search.failur(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(getSearch);
}
