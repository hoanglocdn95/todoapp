import { generateActionCreator } from '../functions/shared';

export const TODO = {
  ...generateActionCreator('GET_TODO'),
  ...generateActionCreator('DETAIL_TASK'),
  ...generateActionCreator('ADD_NEW'),
  ...generateActionCreator('EDIT_TASK'),
  ...generateActionCreator('DELETE_TASK'),
};
