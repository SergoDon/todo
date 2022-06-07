import clnm from "./index.module.scss";
import classname from "classname";

export const Todo = ({ id, isCompleted, title, removeTodo, selectTodo }) => {
  return (
    <div id={id} className={clnm.conteiner}>
      <input
        className={classname(clnm.checkBox, { [clnm.checkBoxOn]: isCompleted })}
        type="checkbox"
        checked={isCompleted}
        onChange={() => selectTodo(id, !isCompleted)}
      ></input>
      <div className={classname(clnm.todoTitle, { [clnm.todoTitleOn]: isCompleted })}>{title}</div>
      <button className={clnm.button} onClick={removeTodo}>
        &#10006;
      </button>
    </div>
  );
};
