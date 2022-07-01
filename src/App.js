import './styles/index.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './screens/Home';
import All from './screens/All';
import New from './screens/New';
import Doing from './screens/Doing';
import Done from './screens/Done';
import EditAddNew from './screens/EditAddNew';
import Alert from './components/Alert';
import LoadingIndicator from './components/LoadingIndicator';
import { ROUTE } from './constants';

function App() {
  const isLoading = useSelector((state) => state.todos.isLoading);
  return (
    <div className="layout">
      {isLoading && <LoadingIndicator />}
      <Routes>
        <Route
          path={ROUTE.NOT_FOUND}
          element={
            <Link
              to={ROUTE.All}
              style={{
                display: 'block',
                margin: '30% auto',
                fontWeight: 'bold',
                fontSize: 60,
                width: 475,
              }}
            >
              404 NOT FOUND
            </Link>
          }
        />
        <Route path={ROUTE.All} element={<Home />}>
          <Route path={ROUTE.ADD_NEW} element={<EditAddNew />} />
          <Route path={ROUTE.NEW} element={<New />} />
          <Route path={ROUTE.DOING} element={<Doing />} />
          <Route path={ROUTE.DONE} element={<Done />} />
          <Route path={ROUTE.DETAIL} element={<EditAddNew isEditTask />}>
            <Route
              path={ROUTE.DETAIL_TASK}
              element={<EditAddNew isEditTask />}
            />
            <Route index element={<div>không có</div>} />
          </Route>
          <Route index element={<All />} />
        </Route>
      </Routes>
      <Alert />
    </div>
  );
}

export default App;
