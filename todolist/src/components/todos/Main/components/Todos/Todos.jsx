import { Todo } from ".";

export const Todos = ({ todos, removeTodo, selectTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} removeTodo={() => removeTodo(todo.id)} selectTodo={selectTodo} />
      ))}
    </div>
  );
};
