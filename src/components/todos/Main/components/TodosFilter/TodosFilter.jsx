import clnm from "./index.module.scss";
import classname from "classname";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredTodos, getTodosFilter, getTodosAll } from "@todosSelectors";
import { removeTodosRequest, filterTodosSuccess } from "@actions";

export const TodosFilter = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getFilteredTodos());
  const filter = useSelector(getTodosFilter());
  const todosAll = useSelector(getTodosAll());

  const removeTodos = () => {
    dispatch(removeTodosRequest(todosAll));
  };

  const setFilter = (todos) => {
    dispatch(filterTodosSuccess(todos));
  };

  const todosOnRight = () => {
    return todos.length > 1 ? `${todos.length} Items left` : `${todos.length} Item left`;
  };

  return (
    <div className={clnm.conteiner}>
      <div>{todosOnRight()}</div>
      <div className={clnm.filter}>
        <div
          className={classname(clnm.filterItem, {
            [clnm.filterItemOn]: !filter,
          })}
          onClick={() => setFilter(null)}
        >
          All
        </div>
        <div
          className={classname(clnm.filterItem, {
            [clnm.filterItemOn]: filter && !filter.isCompleted,
          })}
          onClick={() => setFilter({ isCompleted: false })}
        >
          Active
        </div>
        <div
          className={classname(clnm.filterItem, {
            [clnm.filterItemOn]: filter && filter.isCompleted,
          })}
          onClick={() => setFilter({ isCompleted: true })}
        >
          Completed
        </div>
      </div>
      <div className={clnm.clearComleted} onClick={() => removeTodos()}>
        Clear Completed
      </div>
    </div>
  );
};
