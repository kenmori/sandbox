import { createAction, handleActions } from "redux-actions";

export const ERRORINFO = "responseError/ERRORINFO";
export const errorInfo = createAction(ERRORINFO);

export const BADREQUEST = "responseError/BADREQUEST";
export const responseErrorBadRequest = createAction(BADREQUEST);

export const UNAUTHORIZE = "responseError/UNAUTHORIZE";
export const responseErrorUnauthorize = createAction(UNAUTHORIZE);

export const INTERNALSERVERERROR = "responseError/INTERNALSERVERERROR";
export const responseErrorInternalServer = createAction(INTERNALSERVERERROR);

export const FORBIDDEN = "responseError/FORBIDDEN";
export const responseErrorForbidden = createAction(FORBIDDEN);
const initialState = {
  status: null
};
type State = {
  status: null
};

export const responseError = handleActions(
  {
    [INTERNALSERVERERROR]: (state: Exact<State>, action): Exact<State> => ({
      ...state,
      status: action.payload.status
    }),
    [BADREQUEST]: (state: Exact<State>, action): Exact<State> => ({
      ...state,
      status: action.payload.status
    }),
    [UNAUTHORIZE]: (state: Exact<State>, action): Exact<State> => ({
      ...state,
      status: action.payload.status
    }),
    [FORBIDDEN]: (state: Exact<State>, action): Exact<State> => ({
      ...state,
      status: action.payload.status
    })
  },
  initialState
);
