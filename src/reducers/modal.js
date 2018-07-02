/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
const initialState = {
  modalType: null,
  modalProps: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case "HIDE_MODAL":
      return initialState;
    default:
      return state;
  }
};
