import { createSelector } from "reselect";

const selectTodosState = (state) => state.reducerTodos;

export const getTodos = () => createSelector(selectTodosState, (state) => state.todos);
