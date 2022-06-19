import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_CLEAR,
  ADD_TODO_REQUEST,
  ADD_TODO_FAILED,
  ADD_TODO_SUCCESS,
  ADD_TODO_CLEAR,
} from "../constants";

export const fetchTodosRequest = (payload) => ({ type: FETCH_TODOS_REQUEST, payload });
export const fetchTodosFailed = (payload) => ({ type: FETCH_TODOS_FAILED, payload });
export const fetchTodosSuccess = (payload) => ({ type: FETCH_TODOS_SUCCESS, payload });
export const fetchTodosClear = () => ({ type: FETCH_TODOS_CLEAR });

export const addTodoRequest = (payload) => ({ type: ADD_TODO_REQUEST, payload });
export const addTodoFailed = (payload) => ({ type: ADD_TODO_FAILED, payload });
export const addTodoSuccess = (payload) => ({ type: ADD_TODO_SUCCESS, payload });
export const addTodoClear = () => ({ type: ADD_TODO_CLEAR });
