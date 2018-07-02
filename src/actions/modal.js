/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
export const ERROR_MODAL = "ERROR_MODAL";
export const INFO_MODAL = "INFO_MODAL";

export const showModal = (modalType, modalProps) => ({
  type: "SHOW_MODAL",
  modalType,
  modalProps
});

export const hideModal = () => ({ type: "HIDE_MODAL" });
