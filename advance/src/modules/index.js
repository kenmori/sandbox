import { combineReducers } from "redux";
import account from "./account";
import auth from "./auth";
import modal from "./modal";
import post from "./post";
import router from "./router";
import search from "./search";
import topic from "./topic";
import user from "./user";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  account,
  auth,
  modal,
  post,
  router,
  search,
  topic,
  user,
  form: formReducer
});
