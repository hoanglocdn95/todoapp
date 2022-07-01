import { createSlice } from '@reduxjs/toolkit';
import {
  reqTodosByStatus,
  reqDetailTask,
  reqAddNew,
  reqEditTask,
  reqDeleteTask,
} from '../../server/todosServer';

const initialState = {
  todoItems: [],
  currentItem: {
    id: '',
    title: '',
    creator: '',
    description: '',
    status: '',
  },
  isLoading: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(reqTodosByStatus.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(reqTodosByStatus.fulfilled, (state, action) => {
        state.todoItems = action.payload;
        state.isLoading = false;
      })
      .addCase(reqTodosByStatus.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(reqDetailTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(reqDetailTask.fulfilled, (state, action) => {
        state.currentItem = action.payload;
        state.isLoading = false;
      })
      .addCase(reqDetailTask.rejected, (state, action) => {
        state.isLoading = false;
      })
      // We don't have anything to deal with here for the time being
      .addCase(reqAddNew.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(reqAddNew.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(reqAddNew.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(reqEditTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(reqEditTask.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(reqEditTask.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(reqDeleteTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(reqDeleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(reqDeleteTask.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = todosSlice.actions;

export default todosSlice.reducer;
