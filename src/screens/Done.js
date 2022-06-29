import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { STATUS, ITEM_PER_PAGE } from '../constants';
import usePagination from '../hooks/usePagination';
import { getTodos } from '../redux/actions/todos.actions';

const Done = ({ todos, dispatchGetTodos }) => {
  const [searchParams] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todos.filter((item) =>
      item.title.toLowerCase().includes(searchParams.get('keyword') || '')
    ),
    ITEM_PER_PAGE
  );

  useEffect(() => {
    dispatchGetTodos({ status: STATUS.DONE });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

const mapStateToProps = (state) => ({
  todos: state.todos.todoItems,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetTodos: (payload) => dispatch(getTodos(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);
