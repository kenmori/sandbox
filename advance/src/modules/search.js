import { createAction, handleActions } from "redux-actions";

export const REQUEST = "search/REQUEST";
export const POST_SEARCH = "search/POST";
export const PUT_SEARCH = "search/PUT";
export const SUCCESS_SEARCH = "search/SUCCESS";
export const FAILUER_SEARCH = "search/FAILUER_SEARCH";

export const post = createAction(POST_SEARCH);
export const put = createAction(PUT_SEARCH);
export const success = createAction(SUCCESS_SEARCH);
export const failuer = createAction(FAILUER_SEARCH);

const initialState = {
  error: {}
};

export default handleActions(
  {
    [SUCCESS_SEARCH]: (state, action) => ({
      error: {}
    }),
    [FAILUER_SEARCH]: (state, action) => ({
      error: action.payload
    })
  },
  initialState
);
