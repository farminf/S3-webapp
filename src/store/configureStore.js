import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import all the reducers
import authReducer from "../reducers/auth";
import modalReducer from "../reducers/modal";
import errorsReducer from "../reducers/errors";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      modals: modalReducer,
      errors: errorsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
