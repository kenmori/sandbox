import { createSelector } from "reselect";

const getModal = state => state.modal;
export const modal = createSelector(
  getModal,
  modal => modal
);

const getIsOpepn = state => state.modal.isOpen;
export const isOpen = createSelector(
  getIsOpepn,
  isOpen => isOpen
);
