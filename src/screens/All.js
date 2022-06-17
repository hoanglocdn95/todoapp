import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { LIST_TO_DO_KEY } from '../constants';
import { localStorageUlti } from '../functions/localStorage';

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

const Doing = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const listTodoItem = get().filter((item) =>
      item.title.toLowerCase().includes(searchParams.get('keyword') || '')
    );
    setTodoItems(listTodoItem);
  }, [searchParams]);

  return (
    <>
      <ListTodoItem todoItems={todoItems} />
      <Footer />
    </>
  );
};

export default Doing;
