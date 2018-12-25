//web
import React, { Component } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
//import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { syncHistoryWithStore, routerMiddleware } from "connected-react-router";
import createRootReducer from "./modules";
import rootSaga from "./sagas/index";
import logger from "redux-logger";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer();
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middrewareRouter = routerMiddleware(history);
const middlewares = [sagaMiddleware, middrewareRouter, logger]; // TODO delete logger in prod
const store = createStore(
  createRootReducer(history),
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
//export const persistor = persistStore(store)
export default store;
