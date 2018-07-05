/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    //TODO calling
    this.props.onSubmitLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-error-message">{this.props.error.message}</div>
        <Form onSubmit={this.onSubmit} size="large">
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={this.state.email}
              onChange={e =>
                this.setState({ email: e.target.value.toLowerCase() })
              }
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              required
            />

            <Button fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
