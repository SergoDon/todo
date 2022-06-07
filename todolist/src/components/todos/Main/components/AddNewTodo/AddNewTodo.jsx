import { useState, useContext } from "react";
import clnm from "./index.module.scss";
import { AppContext } from "../../../../../App";

export const AddNewTodo = () => {
  const [targetTitle, setTargetTitle] = useState("");
  const { addNewTodo } = useContext(AppContext);
  const onChange = ({ target: { value } }) => setTargetTitle(value);

  const handleClick = ({ key, target: { value } }) => {
    if (key === "Enter") {
      addNewTodo(value);
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
