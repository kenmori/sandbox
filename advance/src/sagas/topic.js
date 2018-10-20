import { select, all, take, fork, call, put } from "redux-saga/effects";
import api from "./api";
import * as topic from "../modules/topic";
export const selectorPhotoState = state => state.photo.selectedFiles;

function* getTopic() {
  while (true) {
    const faf = yield take(topic.REQUEST);
    try {
      const data = yield call(api, "images/", {});
      yield put(topic.success(data));
    } catch (e) {
      yield put(topic.failur(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(getTopic);
}
