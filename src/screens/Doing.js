import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { STATUS, ITEM_PER_PAGE } from '../constants';
import usePagination from '../hooks/usePagination';
import { reqTodosByStatus } from '../server/todosServer';

const Doing = () => {
  const [searchParams] = useSearchParams();
  const todos = useSelector((state) => state.todos.todoItems);
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todos.filter((item) =>
      item.title.toLowerCase().includes(searchParams.get('keyword') || '')
    ),
    ITEM_PER_PAGE
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reqTodosByStatus(STATUS.DOING));
  }, []);

  return (
    <>
      <ListTodoItem todoItems={currentData} />
      {maxPage > 1 && (
        <Footer
          currentPage={currentPage}
          jumpPage={jumpPage}
          maxPage={maxPage}
        />
      )}
    </>
  );
};

export default Doing;
