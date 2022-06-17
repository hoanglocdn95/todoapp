import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="containerBody">{children}</div>
    </div>
  );
}

export default DefaultLayout;
