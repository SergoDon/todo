import clnm from "./index.module.scss";
import classname from "classname";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodoRequest, removeTodoRequest, selectTodoRequest } from "@actions";

export const Todo = ({ id, isCompleted, title }) => {
  const dispatch = useDispatch();
  const [curentTitle, hendleChangeTitle] = useState(title);
  const [isEdit, hendleEditTodo] = useState(false);
  const toggleEdit = () => hendleEditTodo(!isEdit);

  const selectTodo = (id, isCompleted) => {
    dispatch(selectTodoRequest({ id, title, isCompleted }));
  };

  const removeTodo = () => {
    dispatch(removeTodoRequest(id));
  };

  const save = ({ key }, isSave = false) => {
    if (key === "Enter" || isSave) {
      dispatch(editTodoRequest({ id, title: curentTitle, isCompleted }));
      toggleEdit();
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
