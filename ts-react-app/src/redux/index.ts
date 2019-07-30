import { History } from "history";
import { Store, Reducer, Middleware, applyMiddleware, createStore, combineReducers, compose } from "redux";
import createSagaMiddleware, { SagaMiddleware, SagaIterator } from "redux-saga";
import { RouterState, LocationChangeAction, connectRouter, routerMiddleware } from "connected-react-router";
import { AclManagerState, aclManagerSaga, createAclManagerReducer } from "./modules/aclManager";
import { createLogger } from "redux-logger";
import { spawn } from "redux-saga/effects";


interface State {
  router: RouterState;
  aclManager: AclManagerState;
}
type Action = LocationChangeAction;

const createReducer = (history: History): Reducer<State, Action> => combineReducers({
  router: connectRouter(history),
  aclManager: createAclManagerReducer({
    acl: {
      entries: [],
    },
  }),
});

const sagaMiddleware = createSagaMiddleware();

// developmentでつかいたい middlware
const developmentMiddlewares: Middleware[] = (process.env.NODE_ENV === "development") ? [
  // redux-logger
  createLogger({
    collapsed: true,
    duration: true,
    timestamp: true,
    diff: true,
    level: "log",
  }),
] : [];

export const configureStore = (history: History): {
  store: Store<State, Action>
  sagaMiddleware: SagaMiddleware<{}>,
} => {
  const store = createStore(
    createReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(...developmentMiddlewares),
    ),
  );

  return {
    store,
    sagaMiddleware,
  };
};



export function* rootSaga(): SagaIterator {
  yield spawn(aclManagerSaga);
}