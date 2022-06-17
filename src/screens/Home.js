import { Outlet } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
};

export default Home;
