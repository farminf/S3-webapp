import { Auth } from "aws-amplify";
import {
  addLoginError,
  resetLoginError,
  addRegisterError,
  resetRegisterError,
  addRegisterConfirmError,
  resetRegisterConfirmError
} from "./error";
import { showModal, ERROR_MODAL, INFO_MODAL } from "./modal";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const LOGGING_PROCESS = "LOGGING_PROCESS";
export const SET_SESSION = "SET_SESSION";
export const REQUIRED_PASS_CHANGED = "REQUIRED_PASS_CHANGED";

export const loggedIn = (auth = {}) => ({
  type: LOGGED_IN,
  auth
});

export const loggedOut = () => ({
  type: LOGGED_OUT
});

export const loggingProcess = () => ({
  type: LOGGING_PROCESS
});

export const requiredPassChange = user => ({
  type: REQUIRED_PASS_CHANGED,
  user
});

export const setSession = session => ({
  type: SET_SESSION,
  session
});
export function startLogin(username, password) {
  return (dispatch, getState) => {
    dispatch(loggingProcess());
    dispatch(resetLoginError());
    return Auth.signIn(username, password)
      .then(user => {
        console.log(user);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          return dispatch(requiredPassChange(user));
        }
        return dispatch(loggedIn(user.signInUserSession));
      })
      .catch(err => {
        console.log(err);
        dispatch(addLoginError({ code: err.code, message: err.message }));
        dispatch(loggedOut());
      });
  };
}

export function startChangeForcedPassword(password, requiredAttributes = {}) {
  return (dispatch, getState) => {
    dispatch(loggingProcess());
    dispatch(resetLoginError());
    return Auth.completeNewPassword(
      getState().auth.user,
      password,
      requiredAttributes
    )
      .then(user => {
        console.log(user);
        return dispatch(loggedIn(user.signInUserSession));
      })
      .catch(err => {
        console.log(err);
        dispatch(addLoginError({ code: err.code, message: err.message }));
        dispatch(loggedOut());
      });
  };
}

export function startLogOut() {
  return (dispatch, getState) => {
    dispatch(loggingProcess());
    return Auth.signOut()
      .then(data => {
        return dispatch(loggedOut());
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function startChangePassword(username, oldPassword, newPassword) {
  return (dispatch, getState) => {
    return Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user);
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function forgotPassword(username) {
  return (dispatch, getState) => {
    return Auth.forgotPassword(username)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
}

export function submitForgotPassword(username, code, new_password) {
  return (dispatch, getState) => {
    return Auth.forgotPasswordSubmit(username, code, new_password)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
}

// CognitoUserSession => { idToken, refreshToken, accessToken }
export function getCurrentSession() {
  return (dispatch, getState) => {
    // dispatch(loggingProcess());
    return Auth.currentSession();
  };
}
