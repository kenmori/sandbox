import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import top from "./top";

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    top
  });
