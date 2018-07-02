import { Storage } from "aws-amplify";
export const S3_LIST = "S3_LIST";
export const S3_LIST_FETCHING = "S3_LIST_FETCHING";

export const listFiles = (files = []) => ({
  type: S3_LIST,
  files
});
export const listFilesFetching = () => ({
  type: S3_LIST_FETCHING
});

export function startUpload(fileName, file) {
  return (dispatch, getState) => {
    return Storage.put(fileName, file, {
      contentType: "*"
    });
  };
}

export function startGetList() {
  return (dispatch, getState) => {
    dispatch(listFilesFetching());
    return Storage.list("")
      .then(res => {
        console.log(res);
        dispatch(listFiles(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(listFiles());
      });
  };
}

export function startGetFile(filename) {
  return (dispatch, getState) => {
    Storage.get(filename, {
      level: "public"
    })
      .then(result => {
        console.log(result);
        window.open(result);
      })
      .catch(err => console.log(err));
  };
}

export function startDeleteFile(filename) {
  return (dispatch, getState) => {
    Storage.remove(filename)
      .then(result => {
        console.log(result);
        dispatch(startGetList());
      })
      .catch(err => {
        console.log(err);
        dispatch(startGetList());
      });
  };
}
