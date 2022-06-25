import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { STATUS, ITEM_PER_PAGE } from '../constants';
import usePagination from '../hooks/usePagination';
import todoStore from '../stores/todoStore';

const Done = () => {
  const [searchParams] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoStore.Todos,
    ITEM_PER_PAGE
  );

  useEffect(() => {
    todoStore.reqTodosByStatus(STATUS.DONE, searchParams.get('keyword') || '');
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

export default observer(Done);
