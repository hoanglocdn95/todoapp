import { TODO } from '../actionCreator';

const initialValue = [
  {
    id: 0,
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
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
