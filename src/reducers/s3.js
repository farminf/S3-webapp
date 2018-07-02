/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import { S3_LIST, S3_LIST_FETCHING } from "../actions/s3";

export default (state = { fileFetching: false, files: [] }, action) => {
  switch (action.type) {
    case S3_LIST:
      return {
        ...state,
        files: action.files,
        fileFetching: false
      };
    case S3_LIST_FETCHING:
      return {
        ...state,
        fileFetching: true
      };
    default:
      return state;
  }
};
