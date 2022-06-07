import { AddNewTodo, Todos, TodosFilter } from "./components";
import clnm from "./index.module.scss";

export const Main = (props) => {
  const { ...restProps } = props;
  return (
    <div className={clnm.main}>
      <AddNewTodo />
      <Todos {...restProps} />
      <TodosFilter />
    </div>
  );
};
