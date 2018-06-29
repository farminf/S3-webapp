export const ERROR_MODAL = "ERROR_MODAL";
export const INFO_MODAL = "INFO_MODAL";

export const showModal = (modalType, modalProps) => ({
  type: "SHOW_MODAL",
  modalType,
  modalProps
});

export const hideModal = () => ({ type: "HIDE_MODAL" });
