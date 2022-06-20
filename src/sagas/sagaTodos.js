// import { takeLatest } from "redux-saga/effects";

// function* fetchTodos(payload) {
//   try {
//     const result = [];
//   } catch (err) {}
// }

// export const TodosSaga = function* () {
//   yield takeLatest("TODOS_REQUEST", fetchTodos);
// };

import { fetchTodosFailed, fetchTodosSuccess, addTodoFailed, addTodoSuccess } from "../actions";

import { put, takeLatest } from "redux-saga/effects";
import { v4 as uuid } from "uuid";

import { FETCH_TODOS_REQUEST, ADD_TODO_REQUEST } from "../constants";

console.log(FETCH_TODOS_REQUEST);
function* fetchTodosWorker(payload) {
  try {
    // yield put(
    //   fetchTodosSuccess([
    //     { id: uuid(), title: `Todo 1`, isCompleted: false },
    //     { id: uuid(), title: `Todo 2`, isCompleted: false },
    //     { id: uuid(), title: `Todo 3`, isCompleted: false },
    //   ])
    // );
  } catch (err) {
    // yield put(fetchTodosFailed(err));
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
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodosWorker);
  // yield takeLatest(ADD_TODO_REQUEST, addTodoWorker);
};
