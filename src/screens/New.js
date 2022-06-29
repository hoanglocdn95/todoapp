import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ListTodoItem from "../components/ListTodoItem";
import Footer from "../layout/Footer";
import { STATUS, ITEM_PER_PAGE } from "../constants";
import usePagination from "../hooks/usePagination";

const New = () => {
  const [searchParams] = useSearchParams();
  const todos = useSelector((state) => state.todos.todoItems);
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todos.filter(
      (item) =>
        item.status === STATUS.NEW &&
        item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    ),
    ITEM_PER_PAGE
  );

  // useEffect(() => {
  //   clientServer
  //     .get('todoItems')
  //     .then((res) => {
  //       const listTodoItem = res.data.filter(
  //         (item) =>
  //           item.status === STATUS.DOING &&
  //           item.title.toLowerCase().includes(searchParams.get('keyword') || '')
  //       );
  //       setTodoItems(listTodoItem);
  //     })
  //     .catch((err) => {
  //       console.error('error:', err);
  //     });
  // }, [searchParams]);

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

export default New;
