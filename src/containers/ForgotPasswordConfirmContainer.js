/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Message, Header, Grid } from "semantic-ui-react";
import { submitForgotPassword } from "../actions/auth";
import ForgotPasswordConfirmForm from "../components/ForgotPasswordConfirmForm";

class ForgotPasswordConfirmContainer extends Component {
  render() {
    return (
      <div className="form-center-page">
        <Grid
          container
          columns={4}
          textAlign="center"
          style={{
            height: "calc(100% - 1px)"
          }}
        >
          <Grid.Column
            only="computer tablet mobile"
            computer={6}
            tablet={8}
            mobile={16}
            style={{ paddingTop: "80px" }}
          >
            <Header
              color="black"
              textAlign="center"
              style={{
                fontSize: "1.8em",
                fontWeight: "700"
              }}
            >
              Change Password
            </Header>
            <ForgotPasswordConfirmForm
              onSubmitForgotPassword={this.props.submitForgotPassword}
            />
            <Message>
              <Link to="/">Back to Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitForgotPassword: (username, code, newPassword) =>
    dispatch(submitForgotPassword(username, code, newPassword))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ForgotPasswordConfirmContainer);
