import { FETCH_TODOS, NEW_TODO, DELETE_TODO, COMPLETE_TODO} from "../TodoList/todoConstants";

export const getTodos = (payload) => {
  return {
    type: FETCH_TODOS,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: NEW_TODO,
    payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const toggleCompleteTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};