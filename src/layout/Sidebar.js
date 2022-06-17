import { Link } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../constants';

const Sidebar = () => {
  const renderSidebarItem = () => {
    return SIDEBAR_ITEMS.map((item) => (
      <div key={item.title} className="containerSidebar__item">
        <p>
          <Link
            to={item.url}
            style={{
              fontSize: '24px',
              color: 'white',
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
