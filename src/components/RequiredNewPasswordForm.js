import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class RequiredNewPasswordForm extends Component {
  onSubmit = event => {
    event.preventDefault();
    if (
      this.state.newPassword &&
      this.state.newPassword === this.state.newPasswordConfirm
    )
      this.props.onSubmitRequiredPassword(this.state.newPassword);
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-error-message">{this.props.error}</div>
        <Form onSubmit={this.onSubmit} size="large">
          <Segment>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e => this.setState({ newPassword: e.target.value })}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e =>
                this.setState({ newPasswordConfirm: e.target.value })
              }
              required
            />
            <Button fluid size="large">
              Send
            </Button>
          </Segment>
        </Form>
      </React.Fragment>
    );
  }
}

export default RequiredNewPasswordForm;
