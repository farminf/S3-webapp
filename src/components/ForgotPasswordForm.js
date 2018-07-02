/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSendUsername(this.state.username);
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-error-message">{this.props.error}</div>
        <Form onSubmit={this.onSubmit} size="large">
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
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

export default ForgotPasswordForm;
