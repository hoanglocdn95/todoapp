import { useState } from 'react';

const Header = ({ handleCreateNewTask }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearchClick = () => {
    window.location.search = `?keyword=${keyword.trim()}`;
    setKeyword('');
  };

  return (
    <div className="containerHeader">
      <div className="containerHeader__left">
        <button onClick={handleCreateNewTask}>Create New Task</button>
      </div>
      <div className="containerHeader__right">
        <input
          placeholder="Type something to search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
};

export default Header;
