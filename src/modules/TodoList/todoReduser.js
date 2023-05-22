import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "../TodoList/todoConstants";

const initialState = {
  todos: [],
  todo: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };

    case NEW_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case COMPLETE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo;
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    default:
      return state;
  }
}
