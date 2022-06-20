import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { reducerTodos, reducerAuth, reducerUser } from "../reducers";

const history = createBrowserHistory();

export const rootReduser = (history) => {
  return combineReducers({
    reducerTodos,
    reducerAuth,
    reducerUser,
  });
};
