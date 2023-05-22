import React, { useEffect } from "react";
import TodoItem from "./TodoItem/TodoItem";
import TodoForm from "./TodoForm/TodoForm";
import "./TodoListStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../main/fetch/fetchTodos";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todoList">
      <h2 className="todoList__header">TodoList</h2>

      <div className="todo">
        <ul className="todo__list">
          <h3 className="todo__form-header">Add New Post</h3>
          <div className="todo__forms">
            <TodoForm />
          </div>
          {todos.length > 0 ? (
            todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
          ) : (
            <div>NO TODOS</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
