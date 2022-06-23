import clnm from "./index.module.scss";
import classname from "classname";
import { useDispatch } from "react-redux";
import { itemsTodoRequest } from "../../../../../actions";

export const TodosFilter = () => {
  const dispatch = useDispatch();
  const removeTodos = () => {};
  const setFilter = () => {};
  const todoItems = () => {
    dispatch( itemsTodoRequest("wйцыйц"));
  }
  const filter = null;

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
