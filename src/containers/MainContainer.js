/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
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
import { Grid } from "semantic-ui-react";

const MainContainer = ({ authState }) => {
  switch (authState) {
    case LOGGED_IN:
      return <Redirect to="/dashboard" />;
    case LOGGED_OUT:
      return <Redirect to="/login" />;
    case LOGGING_PROCESS:
      return (
        <Grid
          container
          columns={4}
          textAlign="center"
          style={{
            paddingTop: "80px",
            height: "calc(100% - 1px)"
          }}
        >
          <LoadingProgress content="Loading" size="huge" />
        </Grid>
      );
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
