import { Todo } from ".";
import { useEffect } from "react";
import { fetchTodosRequest } from "../../../../../actions";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../../../todosSelectors";

export const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const todos = useSelector(getTodos());

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};
