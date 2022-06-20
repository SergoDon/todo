import { all, fork } from "redux-saga/effects";
import { todosWothesSaga } from "../sagas";

const sagas = [todosWothesSaga];

export const rootSaga = function* () {
  yield all(sagas.map(fork));
};
