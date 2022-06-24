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
  REMOVE_TODO,
  SELECT_TODO,
  ITEMS_TODO,
  REMOVE_TODOS,
  FILTER_TODOS,
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

export const removeTodoRequest = (payload) => ({ type: REMOVE_TODO.REQUEST, payload });
export const removeTodoFailed = (payload) => ({ type: REMOVE_TODO.FAILED, payload });
export const removeTodoSuccess = (payload) => ({ type: REMOVE_TODO.SUCCESS, payload });
export const removeTodoClear = () => ({ type: REMOVE_TODO.CLEAR });

export const selectTodoRequest = (payload) => ({ type: SELECT_TODO.REQUEST, payload });
export const selectTodoFailed = (payload) => ({ type: SELECT_TODO.FAILED, payload });
export const selectTodoSuccess = (payload) => ({ type: SELECT_TODO.SUCCESS, payload });
export const selectTodoClear = () => ({ type: SELECT_TODO.CLEAR });

export const itemsTodoRequest = (payload) => ({ type: ITEMS_TODO.REQUEST, payload });
export const itemsTodoFailed = (payload) => ({ type: ITEMS_TODO.FAILED, payload });
export const itemsTodoSuccess = (payload) => ({ type: ITEMS_TODO.SUCCESS, payload });
export const itemsTodoClear = () => ({ type: ITEMS_TODO.CLEAR });

export const removeTodosRequest = (payload) => ({ type: REMOVE_TODOS.REQUEST, payload });
export const removeTodosFailed = (payload) => ({ type: REMOVE_TODOS.FAILED, payload });
export const removeTodosSuccess = (payload) => ({ type: REMOVE_TODOS.SUCCESS, payload });
export const removeTodosClear = () => ({ type: REMOVE_TODOS.CLEAR });

export const filterTodosSuccess = (payload) => ({ type: FILTER_TODOS.SUCCESS, payload });
