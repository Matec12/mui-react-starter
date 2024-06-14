import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FallbackSpinner from '@/components/FallbackSpinner';
import Layout from '@/layouts';

function Loadable(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <Suspense fallback={<FallbackSpinner />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

const Home = Loadable(lazy(() => import('../pages/Home')));
const Login = Loadable(lazy(() => import('../pages/Auth/Login')));

export const router = createBrowserRouter([
  // route config goes here;
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);
