import { select, all, take, fork, call, put } from "redux-saga/effects";
import api, { getHeaderOption } from "./api";
import { REQUEST, success, failuer } from "../modules/post";

//http://35.200.100.34/api/post/
function* getPhoto() {
  while (true) {
    yield take(REQUEST);
    try {
      const res = yield call(api, "post/", getHeaderOption);
      yield put(success(res));
    } catch (e) {
      yield put(failuer(e));
    }
  }
}

function* postPhoto(action) {
  while (true) {
    yield take("post/POST");
    const selectedFiles = yield select(selectorPhotoState);
    const formData = new FormData();
    formData.append("myFile", selectedFiles, "filenamehere");
    try {
      const fetchResult = yield call(post, formData);
      //dataの状態に寄って下記を分岐する
      yield put({ type: "post/SUCCESS", status: "success" });
    } catch (e) {
      yield put({ type: "pohto/FAILUER", error: e.message });
    }
  }
}

export default function* rootSaga() {
  yield fork(getPhoto);
  yield fork(postPhoto);
}
