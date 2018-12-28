import { createAction, handleActions } from "redux-actions";

export const COUNT_DOWN = "top/COUNT_DOWN";
export const COUNT_UP = "top/COUNT_UP";

export const POST = "post/POST";
export const SELECT = "post/SELECT";
export const REQUEST = "post/REQUEST";
export const EDIT = "post/EDIT";
export const DETAIL = "post/DETAIL";
export const DELETE = "post/DELETE";
export const POST_COMMENT = "post/POST_COMMENT";
export const DELETE_COMMENT = "post/DELETE_COMMENT";

export const SUCCESS = "post/SUCCESS_GET";
export const SUCCESS_POST = "post/SUCCESS_POST";
export const SUCCESS_PATCH = "post/SUCCESS_PATCH";

export const FAILUER = "post/FAILUER";
export const FAILUER_POST = "post/FAILUER_POST";
export const FAILUER_PATCH = "post/FAILUER_PATCH";

export const SUCCESS_DETAIL = "post/SUCCESS_DETAIL";
export const FAILUER_DETAIL = "post/FAILUER_DETAIL";

export const SUCCESS_DELETE = "post/SUCCESS_DELETE";
export const FAILUER_DELETE = "post/FAILUER_DELETE";

export const SUCCESS_DELETE_COMMENT = "post/SUCCESS_DELETE_COMMENT";
export const FAILUER_DELETE_COMMENT = "post/FAILUER_DELETE_COMMENT";

export const SUCCESS_COMMENT = "post/SUCCESS_COMMENT";
export const FAILUER_COMMENT = "post/FAILUER_COMMENT";

export const ONCHANGE_COMMENT = "post/ONCHANGE_COMMENT";

export const upCount = createAction(COUNT_UP);
export const downCount = createAction(COUNT_DOWN);

export const get = createAction(REQUEST);
export const failuerGet = createAction(FAILUER);
export const successGet = createAction(SUCCESS);

export const edit = createAction(EDIT);
export const successPatch = createAction(SUCCESS_PATCH);
export const failuerPatch = createAction(FAILUER_PATCH);

export const post = createAction(POST);
export const successPost = createAction(SUCCESS_POST);
export const failuerPost = createAction(FAILUER_POST);

export const detail = createAction(DETAIL);
export const successDetail = createAction(SUCCESS_DETAIL);
export const failuerDetail = createAction(FAILUER_DETAIL);

export const deletePost = createAction(DELETE); //deleteは予約語で使えなかったからここだけphotoつけている
export const successDelete = createAction(SUCCESS_DELETE);
export const failuerDelete = createAction(FAILUER_DELETE);

export const postComment = createAction(POST_COMMENT);
export const successComment = createAction(SUCCESS_COMMENT);
export const failuerComment = createAction(FAILUER_COMMENT);

export const deleteComment = createAction(DELETE_COMMENT);
export const successDeleteComment = createAction(SUCCESS_DELETE_COMMENT);
export const failuerDeleteComment = createAction(FAILUER_DELETE_COMMENT);

export const changeComment = createAction(ONCHANGE_COMMENT);
export const select = createAction(SELECT);

const initialState = {
  entities: [],
  photos: [],
  leastDetail: { img: "", tags: [], comments: [], is_mine: false, user: null },
  selectedFiles: [],
  comment: "",
  count: 0,
  error: {},
  status: ""
};

export default handleActions(
  {
    [COUNT_UP]: (state, action) => ({
      ...state,
      count: state.count + 1
    }),
    [COUNT_DOWN]: (state, action) => ({
      ...state,
      count: state.count - 1
    }),
    [SELECT]: (state, action) =>
      console.log(action.payload, "action") || {
        ...state,
        selectedFiles: action.payload
      },
    [SUCCESS]: (state, action) =>
      console.log(state, "success") || {
        ...state,
        selectedFiles: [],
        comment: "",
        entities: action.payload.results,
        error: {}
      },
    [ONCHANGE_COMMENT]: (state, action) => ({
      ...state,
      comment: action.payload.comment
    }),
    [SUCCESS_POST]: (state, action) => ({
      ...state,
      status: action.payload,
      error: {}
    }),
    [FAILUER]: (state, action) => ({
      ...state,
      error: action.payload
    }),
    [SUCCESS_PATCH]: (state, action) =>
      console.log(state, "success") || {
        ...state,
        status: action.payload,
        error: {}
      },
    [FAILUER_PATCH]: (state, action) =>
      console.log(state, "success") || {
        ...state,
        error: action.payload
      },
    [SUCCESS_DETAIL]: (state, action) =>
      console.log(action.payload, "reducer") || {
        ...state,
        leastDetail: { ...state.leastDetail, ...action.payload },
        error: {}
      },
    [FAILUER_DETAIL]: (state, action) => ({
      ...state,
      error: action.payload.data
    }),
    [SUCCESS_DELETE]: (state, action) => ({
      ...state,
      entities: action.payload,
      error: {}
    }),
    [FAILUER_DELETE]: (state, action) => ({
      ...state,
      error: action.payload
    }),
    [SUCCESS_COMMENT]: (state, action) => ({
      ...state,
      entities: action.payload,
      error: {}
    }),
    [FAILUER_COMMENT]: (state, action) => ({
      ...state,
      error: action.payload
    }),
    [SUCCESS_DELETE_COMMENT]: (state, action) => ({
      ...state,
      entities: action.payload,
      error: {}
    }),
    [FAILUER_DELETE_COMMENT]: (state, action) => ({
      ...state,
      error: action.payload
    })
  },
  initialState
);
