import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_CLEAR,
  ADD_TODO_REQUEST,
  ADD_TODO_FAILED,
  ADD_TODO_SUCCESS,
  ADD_TODO_CLEAR,
  EDIT_TODO_REQUEST,
  EDIT_TODO_FAILED,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_CLEAR,
} from "../constants";

export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosFailed = (payload) => ({ type: FETCH_TODOS_FAILED, payload });
export const fetchTodosSuccess = (payload) => ({ type: FETCH_TODOS_SUCCESS, payload });
export const fetchTodosClear = () => ({ type: FETCH_TODOS_CLEAR });

export const addTodoRequest = (payload) => ({ type: ADD_TODO_REQUEST, payload }); // {title: "Title", isCompleted: true}
export const addTodoFailed = (payload) => ({ type: ADD_TODO_FAILED, payload });
export const addTodoSuccess = (payload) => ({ type: ADD_TODO_SUCCESS, payload }); // {title: "Title", isCompleted: true, id}
export const addTodoClear = () => ({ type: ADD_TODO_CLEAR });

export const editTodoRequest = (payload) => ({ type: EDIT_TODO_REQUEST, payload });
export const editTodoFailed = (payload) => ({ type: EDIT_TODO_FAILED, payload });
export const editTodoSuccess = (payload) => ({ type: EDIT_TODO_SUCCESS, payload });
export const editTodoClear = () => ({ type: EDIT_TODO_CLEAR });
