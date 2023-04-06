import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

import rootReducer from './mainReducer';

const middlewares = [thunk];


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;