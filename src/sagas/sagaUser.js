import { takeLatest } from "redux-saga/effects";

function* fetchUser(payload) {
  try {
    const result = [];
  } catch (err) {}
}

export const userSaga = function* () {
  yield takeLatest("USER_REQUEST", fetchUser);
};
