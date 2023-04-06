import { combineReducers } from "redux";

import counterReducer from "../../modules/Dashboard/Counter/counterReducer";

export default combineReducers({
  counterReducer: counterReducer,
});
