//web
import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "./modules";
import rootSaga from "./sagas/index";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)
export default store
