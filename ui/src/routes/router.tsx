import { createBrowserRouter } from 'react-router-dom';

import App from '@/app';
import RouteHome from './RouteHome';
import RouteLogin from './RouteLogin';
import Route404 from './Route404';

const routes = [
  { path: '/', element: <RouteHome /> },
  { path: '/login', element: <RouteLogin /> },
  { path: '*', element: <Route404 /> }
];

export const router = createBrowserRouter([
  {
    element: <App />,
    children: routes
  }
]);
