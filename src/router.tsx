import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/index';

export const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: <Root />,
    },
  ],
  {
    basename: '/portfolio',
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);
