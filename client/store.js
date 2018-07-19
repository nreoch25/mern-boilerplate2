import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let enhancers;
let initialState;

if (typeof window !== "undefined") {
  enhancers = [
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];
  initialState = window.__INITIAL_STATE__;
} else {
  enhancers = [applyMiddleware(thunk)];
  initialState = {};
}

const store = createStore(rootReducer, initialState, compose(...enhancers));

export default store;
