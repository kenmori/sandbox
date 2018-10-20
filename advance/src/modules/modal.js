import { createAction, handleActions } from "redux-actions";
import { initialize } from "redux-form";

export const OPEN_MODAL = "modal/OPEN";
export const openModal = createAction(OPEN_MODAL);

export const CLOSE_MODAL = "modal/CLOSE";
export const closeModal = createAction(CLOSE_MODAL);

const initialState = {
  isOpen: false,
  info: ""
};

export default handleActions(
  {
    [OPEN_MODAL]: (state, action) =>
      console.log(action) || {
        ...state,
        isOpen: true,
        info: action.payload.info
      },
    [CLOSE_MODAL]: state => ({
      ...state,
      isOpen: false
    })
  },
  initialState
);
