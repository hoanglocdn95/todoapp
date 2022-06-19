import { FEATURES } from "../constants/index";

export const initMessage = (feature) => {
  switch (feature) {
    case FEATURES.ADD_NEW:
      return (message) => `ADD NEW: ${message}`;
    case FEATURES.EDIT_TASK:
      return (message) => `EDIT TASK: ${message}`;
    case FEATURES.DELETE_TASK:
      return (message) => `DELETE TASK: ${message}`;
    default:
      return () => "";
  }
};
