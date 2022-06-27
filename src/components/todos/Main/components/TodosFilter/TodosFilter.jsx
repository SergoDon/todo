import clnm from "./index.module.scss";
import classname from "classname";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, getTodosFilter } from "@todosSelectors";
import { removeTodosRequest, filterTodosSuccess } from "@actions";

export const TodosFilter = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos());
  const filter = useSelector(getTodosFilter());

  const removeTodos = () => {
    dispatch(removeTodosRequest(todos));
  };

  const setFilter = (payload) => {
    dispatch(filterTodosSuccess(payload));
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
        Clear Comleted
      </div>
    </div>
  );
};
