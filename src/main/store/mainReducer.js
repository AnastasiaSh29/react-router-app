import { combineReducers } from "redux";

import counterReducer from "../../modules/Dashboard/Counter/counterReducer";
import postReducer from '../../modules/PostsList/postReducer';
import todoReducer from '../../modules/TodoList/todoReduser';
import userReducer from '../../modules/UserList/userReducer';

export default combineReducers({
  counterReducer: counterReducer,
  postReducer: postReducer,
  todoReducer: todoReducer,
  userReducer: userReducer
});
