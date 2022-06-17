import './styles/index.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import All from './screens/All';
import New from './screens/New';
import Doing from './screens/Doing';
import Done from './screens/Done';
import EditAddNew from './screens/EditAddNew';

function App() {
  return (
    <div className="layout">
      <Routes>
        <Route
          path="*"
          element={
            <Link
              to="/"
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
        <Route path="/" element={<Home />}>
          <Route path="/add-new" element={<EditAddNew />} />
          <Route path="/new" element={<New />} />
          <Route path="/doing" element={<Doing />} />
          <Route path="/done" element={<Done />} />
          <Route path="/detail" element={<EditAddNew isEditTask />}>
            <Route path=":idTask" element={<EditAddNew isEditTask />} />
            <Route index element={<div>không có</div>} />
          </Route>
          <Route index element={<All />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
