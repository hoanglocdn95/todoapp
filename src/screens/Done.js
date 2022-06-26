import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';

import ListTodoItem from '../components/ListTodoItem';
import Footer from '../layout/Footer';
import { STATUS, ITEM_PER_PAGE } from '../constants';
import usePagination from '../hooks/usePagination';

const Done = ({ todos }) => {
  const [searchParams] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todos.filter(
      (item) =>
        item.status === STATUS.DONE &&
        item.title.toLowerCase().includes(searchParams.get('keyword') || '')
    ),
    ITEM_PER_PAGE
  );

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
  todos: state.todos,
});

export default connect(mapStateToProps)(Done);
