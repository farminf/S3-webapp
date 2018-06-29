import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  Image
} from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import { startLogin } from "../actions/auth";
import { showModal } from "../actions/modal";
import LogoImage from "../images/logo_loginpage.jpg";

class LoginContainer extends Component {
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
          {/* Desktop Part*/}
          <Grid.Column
            only="computer tablet"
            computer={8}
            floated="left"
            style={{ paddingTop: "80px" }}
          >
            <Header
              as="h1"
              color="black"
              textAlign="center"
              style={{
                fontSize: "2.5em",
                fontWeight: "700"
              }}
            >
              S3 Web App
            </Header>
            <Image src={LogoImage} size="large" centered />
          </Grid.Column>

          {/* mobile Part*/}
          <Grid.Column only="mobile" mobile={16} floated="left">
            <Image src={LogoImage} size="large" centered />
            <Divider />
            <Header
              as="h1"
              color="black"
              textAlign="center"
              style={{
                fontSize: "2.5em",
                fontWeight: "700"
              }}
            >
              S3 Web App
            </Header>
          </Grid.Column>

          {/* Desktop Part*/}
          <Grid.Column
            only="computer tablet"
            computer={6}
            floated="right"
            style={{ paddingTop: "200px" }}
          >
            <Segment>
              <LoginForm
                onSubmitLogin={(username, password) =>
                  this.props.startLogin(username, password)
                }
                error={this.props.loginError}
              />
              {/*<Message>
                <Link to="/forgotpassword">Forgot password?</Link>
              </Message>*/}
            </Segment>
          </Grid.Column>

          {/* mobile Part*/}
          <Grid.Column
            only="mobile"
            mobile={16}
            floated="right"
            style={{ paddingTop: "50px" }}
          >
            <LoginForm
              onSubmitLogin={(username, password) =>
                this.props.startLogin(username, password)
              }
              error={this.props.loginError}
            />
            {/*<Message>
              <Link to="/forgotpassword">Forgot password?</Link>
            </Message>*/}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.errors.loginError
});

const mapDispatchToProps = dispatch => ({
  startLogin: (username, password) => dispatch(startLogin(username, password)),
  showModal: () => dispatch(showModal("INFO_MODAL", "Registration Completed"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
