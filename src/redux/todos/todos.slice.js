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
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(reqTodosByStatus.pending, (state, action) => {})
      .addCase(reqTodosByStatus.fulfilled, (state, action) => {
        state.todoItems = action.payload;
      })
      .addCase(reqTodosByStatus.rejected, (state, action) => {})

      .addCase(reqDetailTask.pending, (state, action) => {})
      .addCase(reqDetailTask.fulfilled, (state, action) => {
        state.currentItem = action.payload;
      })
      .addCase(reqDetailTask.rejected, (state, action) => {})
      // We don't have anything to deal with here for the time being
      .addCase(reqAddNew.pending, (state, action) => {})
      .addCase(reqAddNew.fulfilled, (state, action) => {})
      .addCase(reqAddNew.rejected, (state, action) => {})
      .addCase(reqEditTask.pending, (state, action) => {})
      .addCase(reqEditTask.fulfilled, (state, action) => {})
      .addCase(reqEditTask.rejected, (state, action) => {})
      .addCase(reqDeleteTask.pending, (state, action) => {})
      .addCase(reqDeleteTask.fulfilled, (state, action) => {})
      .addCase(reqDeleteTask.rejected, (state, action) => {});
  },
});

export const {} = todosSlice.actions;

export default todosSlice.reducer;
