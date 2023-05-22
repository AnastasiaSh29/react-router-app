import React from "react";
import "./TodoItemStyles.css";
import Checkbox from "../Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { toggleCompleteTodo } from "../todoActions";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleCompleteTodo({ id }));
  };

  return (
    <li className="todo__item">
      <Checkbox label="done" value={completed} onChange={handleCheckboxClick} />
      <h2
        style={
          completed === true
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className="todo__title"
      >
        {title}
      </h2>
      
    </li>
  );
}

export default TodoItem;
