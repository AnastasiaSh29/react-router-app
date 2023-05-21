import { combineReducers } from "redux";

import counterReducer from "../../modules/Dashboard/Counter/counterReducer";
import postReducer from '../../modules/PostsList/postReducer';

export default combineReducers({
  counterReducer: counterReducer,
  postReducer: postReducer
});
