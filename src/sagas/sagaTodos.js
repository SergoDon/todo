// import { takeLatest } from "redux-saga/effects";

// function* fetchTodos(payload) {
//   try {
//     const result = [];
//   } catch (err) {}
// }

// export const TodosSaga = function* () {
//   yield takeLatest("TODOS_REQUEST", fetchTodos);
// };

import {
  fetchTodosFailed,
  fetchTodosSuccess,
  addTodoFailed,
  addTodoSuccess,
  editTodoSuccess,
  editTodoFailed,
  removeTodoSuccess,
  removeTodoFailed,
  selectTodoSuccess,
  selectTodoFailed,
  itemsTodoSuccess,
  itemsTodoFailed,
} from "../actions";

import { put, takeLatest } from "redux-saga/effects";
import { v4 as uuid } from "uuid";

import {
  FETCH_TODOS_REQUEST,
  ADD_TODO_REQUEST,
  EDIT_TODO_REQUEST,
  REMOVE_TODO,
  SELECT_TODO,
  ITEMS_TODO,
} from "../constants";

function* fetchTodosWorker() {
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

function* addTodoWorker({ payload }) {
  try {
    yield put(addTodoSuccess(payload));
  } catch (err) {
    yield put(addTodoFailed(err));
  }
}

function* editTodoWorker({ payload }) {
  try {
    yield put(editTodoSuccess(payload));
  } catch (err) {
    yield put(editTodoFailed(err));
  }
}

function* removeTodoWorker({ payload }) {
  try {
    yield put(removeTodoSuccess(payload));
  } catch (err) {
    yield put(removeTodoFailed(err));
  }
}

function* selectTodoWorker({ payload }) {
  try {
    yield put(selectTodoSuccess(payload));
  } catch (err) {
    yield put(selectTodoFailed(err));
  }
}

function* itemsTodoWorker() {
  try {
    yield put(itemsTodoSuccess());
  } catch (err) {
    yield put(itemsTodoFailed(err));
  }
}

export const todosWothesSaga = function* () {
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodosWorker);
  yield takeLatest(ADD_TODO_REQUEST, addTodoWorker);
  yield takeLatest(EDIT_TODO_REQUEST, editTodoWorker);
  yield takeLatest(REMOVE_TODO.REQUEST, removeTodoWorker);
  yield takeLatest(SELECT_TODO.REQUEST, selectTodoWorker);
  yield takeLatest(ITEMS_TODO.REQUEST, itemsTodoWorker);
};
