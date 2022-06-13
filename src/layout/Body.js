import { useState } from 'react';
import TodoItem from '../components/TodoItem';
import AddNewForm from '../shared/AddNewForm';
import { MODE, STATUS } from '../constants';

const Body = ({ mode, handleChangeRenderMode }) => {
  const [todoItems, setTodoItems] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target[0].value,
      creator: e.target[1].value,
      description: e.target[2].value,
      status: STATUS.NEW,
    };
    setTodoItems([data, ...todoItems]);
    handleChangeRenderMode(MODE.SHOW_LIST);
  };

  const chooseMode = () => {
    switch (mode) {
      case MODE.SHOW_LIST:
        return renderTodoItem();
      case MODE.ADD_NEW:
        return <AddNewForm handleSubmit={handleSubmit} />;
      default:
        return renderTodoItem();
    }
  };

  return <div className="containerBody">{chooseMode()}</div>;
};

export default Body;
