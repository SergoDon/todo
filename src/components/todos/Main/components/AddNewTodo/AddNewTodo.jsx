import { useState, useEffect } from "react";
import clnm from "./index.module.scss";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../../../../../actions";
import { v4 as uuid } from "uuid";

export const AddNewTodo = () => {
  const dispatch = useDispatch();
  const [targetTitle, setTargetTitle] = useState("");

  const onChange = ({ target: { value } }) => setTargetTitle(value);

  const handleClick = ({ key }) => {
    if (key === "Enter") {
      let newTodo = [{ id: uuid(), title: targetTitle, isCompleted: false }];
      dispatch(addTodoRequest(newTodo));
      setTargetTitle("");
    }
  };

  return (
    <input
      placeholder="What needs to be done?"
      className={clnm.addNewTodo}
      onChange={onChange}
      value={targetTitle}
      onKeyDown={handleClick}
    />
  );
};
