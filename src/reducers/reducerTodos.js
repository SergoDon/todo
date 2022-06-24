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

const initialState = { todos: [], error: null, isLoading: false, filter: null };

export const reducerTodos = (state = initialState, action) => {
  const { type, payload } = action; // { id: uuid(), title: `Todo 1`, isCompleted: false }
  const commonSuccessState = { isLoading: false, error: null };
  switch (type) {
    case FETCH_TODOS_REQUEST:
    case ADD_TODO_REQUEST:
    case EDIT_TODO_REQUEST:
    case REMOVE_TODO.REQUEST:
    case SELECT_TODO.REQUEST:
    case ITEMS_TODO.REQUEST:
    case REMOVE_TODOS.REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TODOS_FAILED:
    case ADD_TODO_FAILED:
    case EDIT_TODO_FAILED:
    case REMOVE_TODO.FAILED:
    case SELECT_TODO.FAILED:
    case ITEMS_TODO.FAILED:
    case REMOVE_TODOS.FAILED:
      return { ...state, isLoading: false, error: payload };
    case FETCH_TODOS_SUCCESS:
      return { ...state, ...commonSuccessState, todos: payload };
    case ADD_TODO_SUCCESS:
      return { ...state, ...commonSuccessState, todos: payload.concat([...state.todos]) };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        ...commonSuccessState,
        todos: [...state.todos].map((element) => (element.id === payload.id ? payload : element)),
      };
    case REMOVE_TODO.SUCCESS:
      return {
        ...state,
        commonSuccessState,
        todos: [...state.todos].filter((element) => element.id !== payload),
      };
    case SELECT_TODO.SUCCESS:
      return {
        ...state,
        commonSuccessState,
        todos: [...state.todos].map((el) => (el.id === payload.id ? payload : el)),
      };
    case ITEMS_TODO.SUCCESS:
      return {};
    case REMOVE_TODOS.SUCCESS:
      return {
        ...state,
        commonSuccessState,
        todos: payload.filter((element) => !element.isCompleted),
      };
    case FILTER_TODOS.SUCCESS:
      return { ...state, filter: payload };
    case FETCH_TODOS_CLEAR:
    case ADD_TODO_CLEAR:
    case EDIT_TODO_CLEAR:
    case REMOVE_TODO.CLEAR:
    case SELECT_TODO.CLEAR:
    case ITEMS_TODO.CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
