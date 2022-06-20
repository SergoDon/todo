import { configureStore } from "@reduxjs/toolkit";
import { rootReduser } from "./reducer";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";
import logger from "redux-logger";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const createStore = () => {
  const store = configureStore({
    reducer: rootReduser(history),
    middleware: (getDefautlMiddleware) => getDefautlMiddleware().concat(sagaMiddleware, logger),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
