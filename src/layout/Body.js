import { useState } from 'react';
import TodoItem from '../components/TodoItem';
import AddNewForm from '../shared/AddNewForm';
import { MODE, todoList } from '../constants';

const Body = ({ mode }) => {
  const [todoItems, setTodoItems] = useState(todoList);

  const renderTodoItem = () => {
    return todoItems.map((item, index) => (
      <TodoItem
        key={`${item.title}_${index}`}
        title={item.title}
        creator={item.creator}
        status={item.status}
        description={item.description}
      />
    ));
  };

  const chooseMode = () => {
    switch (mode) {
      case MODE.SHOW_LIST:
        return renderTodoItem();
      case MODE.ADD_NEW:
        return (
          <AddNewForm
            handleSubmit={(e) => {
              e.preventDefault();
              console.log(e.target[0]);
            }}
          />
        );
      default:
        return renderTodoItem();
    }
  };

  return <div className="containerBody">{chooseMode()}</div>;
};

export default Body;
