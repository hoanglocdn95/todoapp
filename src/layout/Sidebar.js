import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../constants';

const Sidebar = () => {
  const location = useLocation();

  const renderSidebarItem = () => {
    return SIDEBAR_ITEMS.map((item) => (
      <div key={item.title} className="containerSidebar__item">
        <p>
          <Link
            to={item.url}
            style={{
              fontSize: '24px',
              color: item.url === location.pathname ? '#675bf1' : 'white',
            }}
          >
            {item.title}
          </Link>
        </p>
      </div>
    ));
  };
  return <div className="containerSidebar">{renderSidebarItem()}</div>;
};

export default Sidebar;
