import { AddNewTodo, Todos, TodosFilter } from "./components";
import clnm from "./index.module.scss";

export const Main = () => {
  return (
    <div className={clnm.main}>
      <AddNewTodo />
      <Todos />
      <TodosFilter />
    </div>
  );
};
