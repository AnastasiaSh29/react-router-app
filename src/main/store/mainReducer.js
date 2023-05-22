import { combineReducers } from "redux";

import counterReducer from "../../modules/Dashboard/Counter/counterReducer";
import postReducer from '../../modules/PostsList/postReducer';
import todoReducer from '../../modules/TodoList/todoReduser';

export default combineReducers({
  counterReducer: counterReducer,
  postReducer: postReducer,
  todoReducer: todoReducer,
  todoReducer: todoReducer
});
