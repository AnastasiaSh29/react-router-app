import React from "react";
import { useForm } from "react-hook-form";
import "./PostFormStyles.css";
import { useDispatch } from "react-redux";
import { fetchAddPost } from "../../../main/fetch/fetchPosts";

function PostForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      post: "",
    },
  });

  const onSubmit = (data) => {
    let postObj = {
      id: Date.now(),
      title: data.title,
      body: data.post,
    };
    reset();

    dispatch(fetchAddPost(postObj));
  };

  return (
    <form className="posts__form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", { required: "This is required" })}
        type="text"
        className="posts__form-input"
        placeholder="Add post-title ..."
      />
      <input
        {...register("post", { required: "This is required" })}
        type="text"
        className="posts__form-input"
        placeholder="Add post-body ..."
      />
      <input type="submit" value="Add" className="posts__form-button" />
    </form>
  );
}

export default PostForm;
