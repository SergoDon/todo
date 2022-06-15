import clnm from "./index.module.scss";
import { useContext } from "react";
import classname from "classname";
import { TodosContext } from "@containers";

export const TodosFilter = () => {
  const { filter, removeTodos, setFilter, todoItems } = useContext(TodosContext);

  return (
    <div className={clnm.conteiner}>
      <div>{todoItems()}</div>
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
      <div className={clnm.clearComleted} onClick={() => removeTodos("isCompleted", true)}>
        Clear Comleted
      </div>
    </div>
  );
};
