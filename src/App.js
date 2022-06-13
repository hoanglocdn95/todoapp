import { useState } from 'react';
import './styles/index.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Body from './layout/Body';
import Footer from './layout/Footer';
import { MODE } from './constants';

function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleChangeRenderMode = (mode = MODE.ADD_NEW) => {
    setRenderMode(mode);
  };
  return (
    <div className="layout">
      <Header
        handleCreateNewTask={() => handleChangeRenderMode(MODE.ADD_NEW)}
      />
      <Sidebar />
      <Body mode={renderMode} handleChangeRenderMode={handleChangeRenderMode} />
      {renderMode === MODE.SHOW_LIST && <Footer />}
    </div>
  );
}

export default App;
