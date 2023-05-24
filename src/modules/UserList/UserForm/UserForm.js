import React from "react";
import { useForm } from "react-hook-form";
import "./UserFormStyles.css";
import { useDispatch } from "react-redux";
import { fetchAddUser } from "../../../main/fetch/fetchUsers";

function UserForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
    },
  });

  const onSubmit = (data) => {
    let userObj = {
      id: Date.now(),
      name: data.name,
      username: data.username,
    };
    reset();
    dispatch(fetchAddUser(userObj));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="newUser__form">
      <input
        {...register("name", { required: "This is required" })}
        type="text"
        className="newUser__form-input"
        placeholder="Add name ..."
      />
      <input
        {...register("username", { required: "This is required" })}
        type="text"
        className="newUser__form-input"
        placeholder="Add username ..."
      />
      <input type="submit" value="Add" className="newUser__form-button" />
    </form>
  );
}

export default UserForm;
