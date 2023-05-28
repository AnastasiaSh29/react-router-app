import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../../TodoList/TodoItem/TodoItem";
import "./UserTodosStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTodos } from "../../../main/fetch/fetchUsers";

function UserTodos() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userTodos = useSelector((state) => state.userReducer.userTodos);

  useEffect(() => {
    dispatch(fetchUserTodos(id));
  }, [dispatch]);

  return (
    <div className="user-todos">
      <ul className="user-todos__list">
        {userTodos.length > 0 ? (
          userTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              userId={todo.userId}
              title={todo.title}
              completed={todo.completed}
            />
          ))
        ) : (
          <div>NO TODOS</div>
        )}
      </ul>
    </div>
  );
}

export default UserTodos;
