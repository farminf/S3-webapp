import React, { Component } from "react";
import { Confirm } from "semantic-ui-react";
import { connect } from "react-redux";
import { hideModal } from "../../actions/modal";

class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  // show = () => this.setState({ open: true });

  handleConfirm = () => {
    this.setState({ open: false });
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <Confirm
          style={{ textAlign: "center" }}
          size="mini"
          content={this.props.content}
          cancelButton={false}
          open={this.state.open}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  open: state.modals.modalType
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoModal);
