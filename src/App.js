import { useState } from 'react';
import './styles/index.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Body from './layout/Body';
import Footer from './layout/Footer';
import { MODE } from './constants';

function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleCreateNewTask = () => {
    setRenderMode(MODE.ADD_NEW);
  };
  return (
    <div className="layout">
      <Header handleCreateNewTask={handleCreateNewTask} />
      <Sidebar />
      <Body mode={renderMode} />
      <Footer />
    </div>
  );
}

export default App;
