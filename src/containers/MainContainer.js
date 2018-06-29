import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGGING_PROCESS,
  SET_SESSION,
  REQUIRED_PASS_CHANGED
} from "../actions/auth";
import LoadingProgress from "../components/LoaingProgress";

const MainContainer = ({ authState }) => {
  switch (authState) {
    case LOGGED_IN:
      return <Redirect to="/dashboard" />;
    case LOGGED_OUT:
      return <Redirect to="/login" />;
    case LOGGING_PROCESS:
      return <LoadingProgress />;
    case REQUIRED_PASS_CHANGED:
      return <Redirect to="/forcechangepassword" />;
    case SET_SESSION:
      break;
    default:
      return (
        <div>
          <p>Unrecognised auth state</p>
        </div>
      );
  }
};

const mapStateToProps = state => ({
  authState: state.auth.state
});

export default connect(
  mapStateToProps,
  undefined
)(MainContainer);
