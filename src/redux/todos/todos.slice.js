import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../constants/index';

const initialState = {
  todoItems: [
    {
      id: '0',
      title: 'Redux-toolkit',
      creator: 'Hoang Loc',
      description: 'Learn in 1 day',
      status: STATUS.NEW,
    },
  ],
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
  reducers: {
    detailTask: (state, action) => {
      state.currentItem = state.todoItems.find(
        (item) => item.id === action.payload.id
      );
    },
    addNew: (state, action) => {
      state.todoItems = [...state.todoItems, action.payload];
    },
    editTask: (state, action) => {
      state.todoItems = state.todoItems.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteTask: (state, action) => {
      const todos = state.todoItems;
      const indexItem = state.todoItems.findIndex(
        (item) => item.id === action.payload.id
      );
      todos.splice(indexItem, 1);
      state.todoItems = [...todos];
    },
  },
});

export const { detailTask, addNew, editTask, deleteTask } = todosSlice.actions;

export default todosSlice.reducer;
