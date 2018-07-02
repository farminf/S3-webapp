/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:43:56
 * @modify date 2018-07-02 12:43:56
 * @desc [description]
 */
import React from "react";
import { connect } from "react-redux";

import ErrorModal from "../components/modals/errorModal";
import InfoModal from "../components/modals/InfoModal";

const MODAL_COMPONENTS = {
  ERROR_MODAL: ErrorModal,
  INFO_MODAL: InfoModal
  /* other modals */
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal content={modalProps} />;
};

export default connect(state => state.modals)(ModalRoot);
