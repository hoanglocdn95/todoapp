import { TODO } from '../actionCreator';

const initialValue = {
  todoItems: [
    {
      id: '0',
      title: 'Learn Redux',
      creator: 'Hoang Loc',
      description: 'Learn in 3 days',
      status: 'New',
    },
  ],
  currentTask: {
    id: '',
    title: '',
    creator: '',
    description: '',
    status: '',
  },
};

const todos = (state = initialValue, action) => {
  switch (action.type) {
    case TODO.GET_TODO_SUCCESS:
      return {
        ...state,
        todoItems: action.payload,
      };
    case TODO.GET_TODO_FAILED:
      return { ...state };
    case TODO.DETAIL_TASK_SUCCESS:
      return {
        ...state,
        currentTask: action.payload,
      };
    // For the time being, nothing will be handled here
    case TODO.DETAIL_TASK_FAILED:
    case TODO.ADD_NEW_SUCCESS:
    case TODO.ADD_NEW_FAILED:
    case TODO.EDIT_TASK_SUCCESS:
    case TODO.EDIT_TASK_FAILED:
    case TODO.DELETE_TASK_SUCCESS:
    case TODO.DELETE_TASK_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default todos;
