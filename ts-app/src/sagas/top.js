import { select, take, fork, call, put } from "redux-saga/effects";
import store from "store";
import { api, defaultHeaderOption } from "./api";
import {
  REQUEST,
  EDIT,
  DELETE,
  DETAIL,
  POST_COMMENT,
  DELETE_COMMENT,
  successGet,
  successPatch,
  failuerGet,
  failuerPatch,
  successDelete,
  failuerDelete,
  successDetail,
  failuerDetail,
  successDeleteComment,
  failuerDeleteComment
} from "../modules/top";

// import * as modal from "../modules/modal";

// 投稿取得
function* getPhoto() {
  while (true) {
    yield take(REQUEST);
    const option = { headers: defaultHeaderOption, method: "GET" };
    console.log(option, "option");
    const { data, status } = yield call(api, "post/", option);
    if (status <= 300) {
      console.log(data, "getPOST");
      yield put(successGet(data));
    } else {
      yield put(failuerGet(data));
    }
  }
}

const preFetchWithFormData = (state, action) => {
  const formData = new FormData();
  formData.append("img", state.post.selectedFiles[0], "sample.jpg");
  formData.append("text", state.post.comment);
  return formData;
};
// 投稿
function* postPhoto(action) {
  while (true) {
    const action = yield take("post/POST");
    const state = yield select();
    const formData = preFetchWithFormData(state, action);
    const option = {
      headers: {
        //TODO key名
        Authorization: store.get("token") && `Token ${store.get("token")}`
      },
      method: "POST",
      body: formData
    };
    console.log(option, "option before call ");
    const { data, status } = yield call(api, "post/", option);
    if (status <= 300) {
      console.log(data);
      //const fetchResult = yield call(post, formData);
      //dataの状態に寄って下記を分岐する
      // yield put(modal.open({ info: "投稿しました" }));
      yield put({ type: "post/SUCCESS_POST", status: "success" });
    } else {
      yield put({ type: "pohto/FAILUER_POST", error: data.detail });
    }
  }
}

// 編集
function* patchPhoto() {
  while (true) {
    const action = yield take(EDIT);
    const state = yield select();
    const formData = preFetchWithFormData(state, action);
    const headers = {
      ...defaultHeaderOption,
      Authorization: store.get("token") && `Token ${store.get("token")}`
    };
    const option = {
      headers: {
        //TODO key名
        Authorization: store.get("token") && `Token ${store.get("token")}`
      },
      method: "PATCH",
      body: formData
    };
    const { data, status } = yield call(
      api,
      `post/${action.payload.id}/`,
      option
    );
    if (status <= 300) {
      yield put(successPatch({ data }));
    } else {
      yield put(failuerPatch(data));
    }
  }
}

// 詳細取得
function* getDetailPhoto() {
  while (true) {
    const { payload } = yield take(DETAIL);
    console.log(defaultHeaderOption, payload.data, "detail");
    const option = {
      headers: {
        Authorization: store.get("token") && `Token ${store.get("token")}`
      },
      method: "GET"
    };
    const { data, status } = yield call(api, `post/${payload.data}/`, option);
    if (status <= 300) {
      yield put(successDetail(data));
    } else {
      yield put(failuerDetail(data));
    }
  }
}

// 削putDeletePhoto除
function* putDeletePhoto() {
  while (true) {
    const action = yield take(DELETE);
    const option = {
      headers: {
        "Content-Type": "application/json",
        Authorization: store.get("token") && `Token ${store.get("token")}`
      },
      method: "DELETE"
    };
    const { data, status } = yield call(
      api,
      `post/${action.payload.postId}/`,
      option
    );
    if (status <= 300) {
      console.log(data, "response");
      // yield put(modal.close());
      // yield put(modal.open({ info: "削除しました" }));
      yield put(successDelete(data));
    } else {
      console.log(data, "response");
      // yield put(modal.open({ info: "削除に失敗しました" }));
      yield put(failuerDelete(data));
    }
  }
}

// コメント削除
function* putDeleteComment() {
  while (true) {
    const action = yield take(DELETE_COMMENT);
    const option = {
      headers: {
        ...defaultHeaderOption,
        Authorization: store.get("token") && `Token ${store.get("token")}`
      },
      method: "PATCH"
    };
    const { data, status } = yield call(
      api,
      `comment/${action.payload.commentId}/`,
      option
    );
    if (status <= 300) {
      yield put(successDeleteComment(data));
    } else {
      yield put(failuerDeleteComment(data));
    }
  }
}

function* postComment() {
  while (true) {
    const action = yield take(POST_COMMENT);
    const form = new FormData();
    const see = form.append("text", action.payload.text);
    const option = {
      headers: {
        "Content-Type": "application/x-www-form-urlcoded",
        Authorization: store.get("token") && `Token ${store.get("token")}`
      },
      method: "POST",
      body: see
    };
    const { data, status } = yield call(
      api,
      `post/${action.payload.postId}/comments/`,
      option
    );
    if (status <= 300) {
      yield put(successDeleteComment(data));
    } else {
      yield put(failuerDeleteComment(data));
    }
  }
}

// function* postComment() {
//   while (true) {
//     const action = yield take(POST_COMMENT);
//   }
// }

export default function* rootSaga() {
  yield fork(getPhoto);
  yield fork(postPhoto);
  yield fork(patchPhoto);
  yield fork(getDetailPhoto);
  yield fork(putDeletePhoto);
  yield fork(putDeleteComment);
  yield fork(postComment);
}
