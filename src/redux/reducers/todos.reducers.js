import { TODO } from '../actionCreator';

const initialValue = [
  {
    id: '0',
    title: 'Learn Redux',
    creator: 'Hoang Loc',
    description: 'Learn in 3 days',
    status: 'New',
  },
];

const todos = (state = initialValue, action) => {
  switch (action.type) {
    case TODO.ADD_NEW:
      return [...state, action.payload];
    case TODO.EDIT_TASK:
      const todos = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return [...todos];
    case TODO.DELETE_TASK:
      const indexItem = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state.splice(indexItem, 1);
      return [...state];
    default:
      return state;
  }
};

export default todos;
