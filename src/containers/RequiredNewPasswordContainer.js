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
import { startChangeForcedPassword } from "../actions/auth";
import RequiredNewPasswordForm from "../components/RequiredNewPasswordForm";

class RequiredNewPasswordContainer extends Component {
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
            <RequiredNewPasswordForm
              onSubmitRequiredPassword={this.props.onSubmitRequiredPassword}
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

const mapStateToProps = (state, props) => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  onSubmitRequiredPassword: password =>
    dispatch(startChangeForcedPassword(password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredNewPasswordContainer);
