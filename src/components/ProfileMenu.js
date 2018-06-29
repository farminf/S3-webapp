import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { startLogOut } from "../actions/auth";
import { withRouter } from "react-router-dom";

const style = {
  color: "black"
};

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  render() {
    return (
      <Dropdown
        item
        icon={{ name: "setting", size: "large", inverted: true }}
        direction="left"
        simple
      >
        <Dropdown.Menu>
          <Dropdown.Header>
            {this.props.auth.session.idToken.payload["cognito:username"]}
          </Dropdown.Header>
          <Dropdown.Item style={style} onClick={this.props.startLogout}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileMenu));
