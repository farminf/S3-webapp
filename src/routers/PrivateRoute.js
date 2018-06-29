import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ResponsiveContainer from "../containers/ResponsiveContainer";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <ResponsiveContainer>
          <Component {...props} />
        </ResponsiveContainer>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
