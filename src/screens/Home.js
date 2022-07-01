import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import LoadingIndicator from '../components/LoadingIndicator';

const Home = () => {
  return (
    <DefaultLayout>
      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </DefaultLayout>
  );
};

export default Home;
