import React, { Component } from "react";
import {
  Segment,
  Form,
  Input,
  Button,
  Message,
  Grid,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";
import {
  startUpload,
  startGetList,
  startGetFile,
  startDeleteFile
} from "../actions/s3";
import LoaingProgress from "../components/LoaingProgress";
import { List } from "semantic-ui-react";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileInput: "",
      fileName: "",
      loading: false,
      openNotification: false,
      contentNotification: ""
    };
  }

  componentDidMount = () => {
    this.props.startGetList();
  };

  onFileUpload = () => {
    this.seLoading(true);
    this.props
      .startUpload(this.state.fileName, this.state.fileInput)
      .then(res => {
        this.props.startGetList();
        this.setState({
          fileInput: "",
          fileName: "",
          loading: false,
          openNotification: true,
          contentNotification: "Uploaded successfully"
        });
      })
      .catch(err => {
        this.props.startGetList();
        this.setState({
          fileInput: "",
          fileName: "",
          loading: false,
          openNotification: true,
          contentNotification: err
        });
      });
  };

  onFileSelect = f => {
    //console.log(this.myInput.current.inputRef.files[0]);
    const file = f.target.files[0];
    const filename = file.name.replace(/\s/g, "_");
    this.setState({
      fileInput: file,
      fileName: filename
    });
  };

  seLoading = state => {
    this.setState({
      loading: state
    });
  };

  render() {
    return (
      <div>
        <h1>Aptar Bucket</h1>
        {this.state.openNotification && (
          <Message
            onDismiss={() =>
              this.setState({
                openNotification: false,
                contentNotification: ""
              })
            }
            floating
          >
            {this.state.contentNotification}
          </Message>
        )}
        <Segment>
          {this.state.loading && (
            <LoaingProgress content="Uploading..." size="small" />
          )}
          <Form onSubmit={this.onFileUpload}>
            <Input
              id="file"
              type="file"
              iconPosition="left"
              onChange={this.onFileSelect}
            />
            <Button className="button-upload" type="submit">
              Upload
            </Button>
          </Form>
        </Segment>
        <Segment loading={this.props.fileFetching}>
          <Grid textAlign="center">
            <Grid.Column computer={12} style={{ paddingTop: "30px" }}>
              <List celled divided verticalAlign="middle" size="large">
                {this.props.files &&
                  this.props.files.map(item => {
                    if (item.key) {
                      return (
                        <List.Item key={item.eTag}>
                          <List.Icon name="file" />
                          <List.Content>
                            <List.Header>{item.key}</List.Header>
                          </List.Content>
                          <List.Content floated="right">
                            <Button
                              circular
                              icon="delete"
                              onClick={() =>
                                this.props.startDeleteFile(item.key)
                              }
                            />
                          </List.Content>
                          <List.Content floated="right">
                            <Button
                              circular
                              icon="download"
                              onClick={() => this.props.startGetFile(item.key)}
                            />
                          </List.Content>
                        </List.Item>
                      );
                    } else {
                      return (
                        <List.Item key={item.eTag}>
                          <List.Icon name="folder" size="large" />
                          <List.Content>
                            <List.Header />
                          </List.Content>
                        </List.Item>
                      );
                    }
                  })}
              </List>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth,
    files: state.s3.files,
    fileFetching: state.s3.fileFetching
  };
};

const mapDispatchToProps = dispatch => ({
  startUpload: (fileName, file) => dispatch(startUpload(fileName, file)),
  startGetList: () => dispatch(startGetList()),
  startGetFile: fileName => dispatch(startGetFile(fileName)),
  startDeleteFile: fileName => dispatch(startDeleteFile(fileName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
