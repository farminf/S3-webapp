/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
export default (
  state = {
    loginError: { code: "", message: "" },
    registerError: { code: "", message: "" },
    registerConfirmError: { code: "", message: "" }
  },
  action
) => {
  switch (action.type) {
    case "ADD_ERROR":
      return {
        ...state,
        ...action.error
      };
    case "RESET_ERROR":
      return {
        ...state,
        ...action.error
      };
    default:
      return state;
  }
};
