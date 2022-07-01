import { FEATURES } from '../constants/index.js';

export const initMessage = (feature: string) => {
  switch (feature) {
    case FEATURES.ADD_NEW:
      return (message: string) => `ADD NEW: ${message}`;
    case FEATURES.EDIT_TASK:
      return (message: string) => `EDIT TASK: ${message}`;
    case FEATURES.DELETE_TASK:
      return (message: string) => `DELETE TASK: ${message}`;
    default:
      return () => '';
  }
};
