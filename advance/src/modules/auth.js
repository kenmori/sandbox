import { createAction, handleActions } from "redux-actions";

export const REQUEST_TOKEN = "auth/REQUEST_TOKEN";
export const requestToken = createAction(REQUEST_TOKEN);
export const REQUEST_LOGIN = "auth/REQUEST_LOGIN";
export const requestLogin = createAction(REQUEST_LOGIN);
export const SUCCESS_LOGIN = "auth/SUCCESS_LOGIN";
export const successLogin = createAction(SUCCESS_LOGIN);
export const FAILUER_LOGIN = "auth/RFAILUER_LOGIN";
export const failuerLogin = createAction(FAILUER_LOGIN);
export const FAILUER_AUTH = "auth/RFAILUER_AUTH";
export const failuerAuth = createAction(FAILUER_AUTH);

export const REQUEST_RESET_PASSWORD = "auth/REQUEST_RESET_PASSWORD";
export const requestResetPassword = createAction(REQUEST_RESET_PASSWORD);
export const SUCCESS_RESET_PASSWORD = "auth/SUCCESS_RESET_PASSWORD";
export const successResetPassword = createAction(SUCCESS_RESET_PASSWORD);
export const FAILUER_RESET_PASSWORD = "auth/FAILUER_RESET_PASSWORD";
export const failuerResetPassword = createAction(FAILUER_RESET_PASSWORD);

export const NAVIGATE_BY_PROFILE = "auth/NAVIGATE_BY_PROFILE";
export const navigateByProfile = createAction(NAVIGATE_BY_PROFILE);

export const SUCCESS_LOGOUT = "auth/SUCCESS_LOGOUT";
export const logout = createAction(SUCCESS_LOGOUT);

export const REQUEST_TO_SEND_MAIL_FOR_PASSWORD =
  "auth/REQUEST_TO_SEND_MAIL_FOR_PASSWORD";
export const requestToSendMailForFogetPassword = createAction(
  REQUEST_TO_SEND_MAIL_FOR_PASSWORD
);
export const SUCCESS_FORGET_PASSWORD = "auth/SUCCESS_FORGET_PASSWORD";
export const successForgetPassword = createAction(SUCCESS_FORGET_PASSWORD);
export const FAILUER_FORGET_PASSWORD = "auth/FAILUER_FORGET_PASSWORD";
export const failuerForgetPassword = createAction(FAILUER_FORGET_PASSWORD);

const initialState = {
  isAuthenticated: true,
  isFetching: false,
  error: {}
};

export default handleActions(
  {
    [REQUEST_LOGIN]: state => ({
      ...state,
      isFetching: true,
      error: {}
    }),
    [SUCCESS_LOGIN]: (state, action) => ({
      ...state,
      isAuthenticated: action.payload,
      isFetching: false
    }),
    [FAILUER_LOGIN]: (state, action) => ({
      ...state,
      error: action.payload,
      isFetching: false
    }),
    [SUCCESS_LOGOUT]: state => {
      return {
        ...state,
        isAuthenticated: false
      };
    }
  },
  initialState
);
