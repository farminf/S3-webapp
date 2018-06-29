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
