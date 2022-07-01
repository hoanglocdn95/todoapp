import { createAsyncThunk } from '@reduxjs/toolkit';
import clientServer from './clientServer';

export const reqTodosByStatus = createAsyncThunk(
  'todos/reqTodosByStatus',
  (status) => {
    const todoItems = clientServer
      .get(`todoItems${status ? `?status=${status}` : ''}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error('error:', err);
      });
    return todoItems;
  }
);

export const reqDetailTask = createAsyncThunk(
  'todos/reqDetailTask',
  (payload) => {
    const todoItem = clientServer
      .get(`todoItems/${payload.id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error('error:', err);
      });
    return todoItem;
  }
);

export const reqAddNew = createAsyncThunk('todos/reqAddNew', (payload) => {
  clientServer
    .post('todoItems', payload.data)
    .then(() => payload.callback())
    .catch((err) => {
      console.error('error:', err);
    });
});

export const reqEditTask = createAsyncThunk('todos/reqEditTask', (payload) => {
  clientServer
    .patch(`todoItems/${payload.data.id}`, payload.data)
    .then(() => payload.callback())
    .catch((err) => {
      console.error('error:', err);
    });
});

export const reqDeleteTask = createAsyncThunk(
  'todos/reqDeleteTask',
  (payload) => {
    clientServer
      .delete(`todoItems/${payload.id}`)
      .then(() => payload.callback())
      .catch((err) => {
        console.error('error:', err);
      });
  }
);
