import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPage from "../containers/NotFoundPage";
import MainContainer from "../containers/MainContainer";
import DashboardContainer from "../containers/DashboardContainer";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginContainer from "../containers/LoginContainer";
import ForgotPasswordContainer from "../containers/ForgotPasswordContainer";
import ForgotPasswordConfirmContainer from "../containers/ForgotPasswordConfirmContainer";
import RequiredNewPasswordContainer from "../containers/RequiredNewPasswordContainer";

export const history = createHistory();

const AppRouter = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={MainContainer} exact={true} />
          <PublicRoute path="/login" component={LoginContainer} exact={true} />
          <PublicRoute
            path="/forgotpassword"
            component={ForgotPasswordContainer}
            exact={true}
          />
          <PublicRoute
            path="/forgotpassword/:username"
            component={ForgotPasswordConfirmContainer}
          />
          <PublicRoute
            path="/forcechangepassword"
            component={RequiredNewPasswordContainer}
          />
          <PrivateRoute
            path="/resetpassword"
            component={RequiredNewPasswordContainer}
          />

          <PrivateRoute
            path="/dashboard"
            component={DashboardContainer}
            exact={true}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
