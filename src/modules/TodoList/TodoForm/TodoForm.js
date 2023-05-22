import React from "react";
import { useForm } from "react-hook-form";
import "./TodoFormStyles.css";
import { useDispatch } from "react-redux";
import { fetchAddTodo } from "../../../main/fetch/fetchTodos";

function TodoForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data) => {
    let todoObj = {
      id: Date.now(),
      title: data.title,
      completed: false,
    };
    reset();
    dispatch(fetchAddTodo(todoObj));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="todo__form">
      <input
        {...register("title", { required: "This is required" })}
        type="text"
        className="todo__form-input"
        placeholder="Add Todo ..."
      />
       <input type="submit" value="Add" className="todo__form-button" />
    </form>
  );
}

export default TodoForm;
