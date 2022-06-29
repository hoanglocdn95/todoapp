import { TODO } from '../actionCreator';

export const addNewTodo = (payload) => ({
  type: TODO.ADD_NEW,
  payload,
});

export const editTask = (payload) => ({
  type: TODO.EDIT_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: TODO.DELETE_TASK,
  payload,
});

export const getTodos = (payload) => ({
  type: TODO.GET_TODO,
  payload,
});

export const getDetailTask = (payload) => ({
  type: TODO.DETAIL_TASK,
  payload,
});
