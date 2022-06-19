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

const initialState = { todos: [], error: null, isLoading: false };

export const reduserTudus = (state = initialState, action) => {
  const { type, payload } = action; // { id: uuid(), title: `Todo 1`, isCompleted: false }

  switch (type) {
    case FETCH_TODOS_REQUEST:
    case ADD_TODO_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TODOS_FAILED:
    case ADD_TODO_FAILED:
      return { ...state, isLoading: false, error: payload };
    case FETCH_TODOS_SUCCESS:
      return { ...state, isLoading: false, error: null, todos: payload };
    case FETCH_TODOS_CLEAR:
    case ADD_TODO_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
