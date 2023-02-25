import { createBrowserRouter } from 'react-router-dom';

import App from '@/app';
import Home from './Home';
import Route0 from './Route0';
import Route1 from './Route1';
import Route404 from './route-404/Route404';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/route-0', element: <Route0 /> },
  { path: '/route-1', element: <Route1 /> },
  { path: '*', element: <Route404 /> }
];

export default createBrowserRouter([
  {
    element: <App />,
    children: routes
  }
]);
