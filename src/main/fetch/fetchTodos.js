import {getTodos, addTodo, deleteTodo, } from '../../modules/TodoList/todoActions'

export const fetchTodos = () => {
    return function (dispatch) {
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((todos) => dispatch(getTodos(todos)));
    };
  };
  
export const fetchAddTodo = (todoData) => {
    return function (dispatch) {
      fetch("https://jsonplaceholder.typicode.com/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      })
        .then((res) => res.json())
        .then((todo) => dispatch(addTodo(todo)));
    };
  };
  
export const fetchDeleteTodo = (payload) => {
    return function (dispatch) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((id) => dispatch(deleteTodo({ id: payload.id })));
    };
  };