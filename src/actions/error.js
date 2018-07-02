/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
/* Login Error Actions */
export const addLoginError = (
  errorDetails = {
    code: "No Code Available",
    message: "No Description Available"
  }
) => ({
  type: "ADD_ERROR",
  error: { loginError: errorDetails }
});

export const resetLoginError = () => ({
  type: "RESET_ERROR",
  error: { loginError: { code: "", message: "" } }
});

/* Register Error Actions */
export const addRegisterError = (
  errorDetails = {
    code: "No Code Available",
    message: "No Description Available"
  }
) => ({
  type: "ADD_ERROR",
  error: { registerError: errorDetails }
});

export const resetRegisterError = () => ({
  type: "RESET_ERROR",
  error: { registerError: { code: "", message: "" } }
});

/* Register Confirmation Error Actions */
export const addRegisterConfirmError = (
  errorDetails = {
    code: "No Code Available",
    message: "No Description Available"
  }
) => ({
  type: "ADD_ERROR",
  error: { registerConfirmError: errorDetails }
});

export const resetRegisterConfirmError = () => ({
  type: "RESET_ERROR",
  error: { registerConfirmError: { code: "", message: "" } }
});
