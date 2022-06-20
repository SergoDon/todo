import { Todo } from ".";
import { useEffect } from "react";
import { fetchTodosRequest } from "../../../../../actions";
import { useSelector, useDispatch } from "react-redux";

export const Todos = () => {
  const todos = [{ id: 123, title: `Todo 1`, isCompleted: false }];
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};
