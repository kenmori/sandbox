import { createAction, handleActions } from "redux-actions";

export const REQUEST = "user/REQUEST";
export const POST_USER = "user/POST";
export const PUT_USER = "user/PUT";
export const SUCCESS_USER = "user/SUCCESS";
export const FAILUER_USER = "user/FAILUER_USER";

export const post = createAction(POST_USER);
export const put = createAction(PUT_USER);
export const success = createAction(SUCCESS_USER);
export const failuer = createAction(FAILUER_USER);

const initialState = {
  error: {}
};

export default handleActions(
  {
    [SUCCESS_USER]: (state, action) => ({
      error: {}
    }),
    [FAILUER_USER]: (state, action) => ({
      error: action.payload
    })
  },
  initialState
);
