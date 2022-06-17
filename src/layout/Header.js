import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Header = ({ handleCreateNewTask }) => {
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchClick = () => {
    searchParams.set('keyword', keyword.trim().toLowerCase());
    setSearchParams(searchParams);
    setKeyword('');
  };

  return (
    <div className="containerHeader">
      <div className="containerHeader__left">
        <button onClick={handleCreateNewTask}>
          <Link to="/add-new" style={{ color: 'white' }}>
            Create New Task
          </Link>
        </button>
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
