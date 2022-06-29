import { FEATURES } from '../constants/index';

export const initMessage = (feature) => {
  switch (feature) {
    case FEATURES.ADD_NEW:
      return (message) => `ADD NEW: ${message}`;
    case FEATURES.EDIT_TASK:
      return (message) => `EDIT TASK: ${message}`;
    case FEATURES.DELETE_TASK:
      return (message) => `DELETE TASK: ${message}`;
    default:
      return () => '';
  }
};

export const generateActionCreator = (action) => {
  return {
    [action]: `${action}`,
    [`${action}_SUCCESS`]: `${action}_SUCCESS`,
    [`${action}_FAILED`]: `${action}_FAILED`,
  };
};
