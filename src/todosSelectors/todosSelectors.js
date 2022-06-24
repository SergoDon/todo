import { createSelector } from "reselect";

const selectTodosState = (state) => state.reducerTodos;

export const getTodosFilter = () => createSelector(selectTodosState, (state) => state.filter);

export const getTodos = () =>
  createSelector(selectTodosState, (state) => {
    const { filter, todos } = state;

    if (!filter) {
      return todos;
    } else {
      const [[key, value]] = Object.entries(filter);
      return [...todos].filter((el) => el[key] === value);
    }
  });
