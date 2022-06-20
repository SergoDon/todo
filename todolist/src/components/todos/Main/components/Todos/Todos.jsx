import { Todo } from ".";
import { useEffect } from "react";
import { fetchTodosRequest } from "../../../../../actions";
import { useSelector, useDispatch } from "react-redux";

export const Todos = () => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} removeTodo={() => {}} />
      ))}
    </div>
  );
};
