import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { ITEM_PER_PAGE } from '../constants';
import usePagination from '../hooks/usePagination';
import clientServer from '../server/clientServer';
import todoStore from '../stores/todoStore';

const All = () => {
  const [searchParams] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoStore.Todos,
    ITEM_PER_PAGE
  );

  useEffect(() => {
    todoStore.reqAllTodos(searchParams.get('keyword') || '');
  }, [searchParams]);

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

export default observer(All);
