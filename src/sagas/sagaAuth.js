import { takeLatest } from "redux-saga/effects";

function* fetchAuth(payload) {
  try {
    const result = [];
  } catch (err) {}
}

export const authSaga = function* () {
  yield takeLatest("AUTH_REQUEST", fetchAuth);
};
