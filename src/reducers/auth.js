import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGGING_PROCESS,
  SET_SESSION,
  REQUIRED_PASS_CHANGED
} from "../actions/auth";
import { loadState } from "../store/localStorage";
import _ from "lodash";
import { history } from "../routers/AppRouter";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGGED_IN:
      // history.push("/dashboard");
      return {
        session: action.auth,
        state: LOGGED_IN,
        isAuthenticated: true
      };
    case LOGGED_OUT:
      //history.push("/");
      return {
        session: {},
        state: LOGGED_OUT,
        isAuthenticated: false
      };
    case LOGGING_PROCESS:
      history.push("/");
      return {
        ...state,
        state: LOGGING_PROCESS,
        isAuthenticated: false
      };
    case REQUIRED_PASS_CHANGED:
      return {
        ...state,
        user: action.user,
        state: REQUIRED_PASS_CHANGED,
        isAuthenticated: false
      };
    case SET_SESSION:
      return {
        session: action.session,
        state: SET_SESSION,
        isAuthenticated: true
      };
    default:
      return state;
  }
};
