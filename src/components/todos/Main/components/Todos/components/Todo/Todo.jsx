import clnm from "./index.module.scss";
import classname from "classname";
import { useState } from "react";

export const Todo = ({ id, isCompleted, title }) => {
  const [curentTitle, hendleChangeTitle] = useState(title);
  const [isEdit, hendleEditTodo] = useState(false);
  const toggleEdit = () => hendleEditTodo(!isEdit);

  const handleChangeTodo = () => {};
  const selectTodo = () => {};
  const removeTodo = () => {};

  const save = ({ key }, isSave = false) => {
    if (key === "Enter" || isSave) {
      toggleEdit();
      handleChangeTodo(id, "title", curentTitle);
    }
  };

  const onChange = ({ target: { value } }) => {
    hendleChangeTitle(value);
  };

  const changeFildType = ({ detail }) => {
    detail === 2 && toggleEdit();
  };

  return !isEdit ? (
    <div onClick={changeFildType} id={id} className={clnm.conteiner}>
      <input
        className={classname(clnm.checkBox, { [clnm.checkBoxOn]: isCompleted })}
        type="checkbox"
        checked={isCompleted}
        onChange={() => selectTodo(id, !isCompleted)}
      ></input>
      <div
        className={classname(clnm.todoTitle, {
          [clnm.todoTitleOn]: isCompleted,
        })}
      >
        {title}
      </div>
      <button className={clnm.button} onClick={removeTodo}>
        &#10006;
      </button>
    </div>
  ) : (
    <input
      onBlur={(event) => save(event, true)}
      autoFocus
      className={clnm.todoTitleInput}
      onChange={onChange}
      onKeyDown={save}
      value={curentTitle}
    />
  );
};
