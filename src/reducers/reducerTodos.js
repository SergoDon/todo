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

const initialState = { todos: [], error: null, isLoading: false };

export const reducerTodos = (state = initialState, action) => {
  const { type, payload } = action; // { id: uuid(), title: `Todo 1`, isCompleted: false }
  const commonSuccessState = { isLoading: false, error: null };

  switch (type) {
    case FETCH_TODOS_REQUEST:
    case ADD_TODO_REQUEST:
    case EDIT_TODO_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TODOS_FAILED:
    case ADD_TODO_FAILED:
    case EDIT_TODO_FAILED:
      return { ...state, isLoading: false, error: payload };
    case FETCH_TODOS_SUCCESS:
      return { ...state, ...commonSuccessState, todos: payload };
    case ADD_TODO_SUCCESS:
      return { ...state, ...commonSuccessState, todos: [...state.todos].unshift(payload) };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        ...commonSuccessState,
        todos: [...state.todos].map((element) => (element.id === payload.id ? payload : element)),
      };
    case FETCH_TODOS_CLEAR:
    case ADD_TODO_CLEAR:
    case EDIT_TODO_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
