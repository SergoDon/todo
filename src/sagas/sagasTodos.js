import {
  fetchTodosRequest,
  fetchTodosFailed,
  fetchTodosSuccess,
  addTodoRequest,
  addTodoFailed,
  addTodoSuccess,
} from "../actions";
import { call, put, takeEvery, take } from "redux-saga/effects";
import { v4 as uuid } from "uuid";

import { FETCH_TODOS_REQUEST, ADD_TODO_REQUEST } from "../constants";

function* fetchTodosWorker(payload) {
  try {
    yield put(
      fetchTodosSuccess([
        { id: uuid(), title: `Todo 1`, isCompleted: false },
        { id: uuid(), title: `Todo 2`, isCompleted: false },
        { id: uuid(), title: `Todo 3`, isCompleted: false },
      ])
    );
  } catch (err) {
    yield put(fetchTodosFailed(err));
  }
}

function* addTodoWorker(payload) {
  try {
    yield put(addTodoSuccess({ id: uuid(), title: `Todo 1`, isCompleted: false }));
  } catch (err) {
    yield put(addTodoFailed(err));
  }
}

export const todosWothesSaga = function* () {
  yield take(FETCH_TODOS_REQUEST, fetchTodosWorker);
  yield take(ADD_TODO_REQUEST, addTodoWorker);
};
