import { createAction, handleActions } from "redux-actions";

export const REQUEST = "topic/REQUEST";
export const POST_TOPIC = "topic/POST";
export const PUT_TOPIC = "topic/PUT";
export const SUCCESS_TOPIC = "topic/SUCCESS";
export const FAILUER_TOPIC = "topic/FAILUER_TOPIC";

export const post = createAction(POST_TOPIC);
export const put = createAction(PUT_TOPIC);
export const success = createAction(SUCCESS_TOPIC);
export const failuer = createAction(FAILUER_TOPIC);

const initialState = {
  error: {}
};

export default handleActions(
  {
    [SUCCESS_TOPIC]: (state, action) => ({
      error: {}
    }),
    [FAILUER_TOPIC]: (state, action) => ({
      error: action.payload
    })
  },
  initialState
);
