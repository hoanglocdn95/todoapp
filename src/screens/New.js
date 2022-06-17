import { useState, useEffect } from 'react';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { LIST_TO_DO_KEY, STATUS } from '../constants';
import { localStorageUlti } from '../functions/localStorage';

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

const New = () => {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    const listTodo = get().filter((item) => item.status === STATUS.NEW);
    setTodoItems(listTodo);
  }, []);

  return (
    <>
      <ListTodoItem todoItems={todoItems} />
      <Footer />
    </>
  );
};

export default New;
