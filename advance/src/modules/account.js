import { createAction, handleActions } from "redux-actions";

export const REQUEST = "account/REQUEST";
export const POST_ACCOUNT = "account/POST";
export const PUT_ACCOUNT = "account/PUT";
export const SUCCESS_ACCOUNT = "account/SUCCESS";
export const FAILUER_ACCOUNT = "account/FAILUER_ACCOUNT";

export const post = createAction(POST_ACCOUNT);
export const put = createAction(PUT_ACCOUNT);
export const success = createAction(SUCCESS_ACCOUNT);
export const failuer = createAction(FAILUER_ACCOUNT);

const initialState = {
  error: {}
};

export default handleActions(
  {
    [SUCCESS_ACCOUNT]: (state, action) => ({
      error: {}
    }),
    [FAILUER_ACCOUNT]: (state, action) => ({
      error: action.payload
    })
  },
  initialState
);
