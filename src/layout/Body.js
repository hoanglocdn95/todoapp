import { useState, useEffect } from 'react';
import TodoItem from '../components/TodoItem';
import AddNewForm from '../shared/AddNewForm';
import { MODE, STATUS } from '../constants';
import { localStorageUlti } from '../functions/localStorage';

const { get, set } = localStorageUlti('todoItems', []);
const POSITION_KEYWORD = 9;

const Body = ({ mode, handleChangeRenderMode }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setTodoItems(get());
  }, []);

  useEffect(() => {
    const keyword = window.location.search.slice(POSITION_KEYWORD);
    setFilterText(keyword);
  }, []);

  const renderTodoItem = () => {
    return todoItems
      .filter((item) => item.title.includes(filterText))
      .map((item, index) => (
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
    const todoItemsLocalStorage = get();
    setTodoItems([data, ...todoItemsLocalStorage]);
    set([data, ...todoItemsLocalStorage]);
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
