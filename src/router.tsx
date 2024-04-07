import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/index';
import Projects from './pages/projects';

export const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: <Root />,
      ErrorBoundary: () => <div>에러!</div>,
    },
    {
      path: '/projects',
      element: <Projects />,
      ErrorBoundary: () => <div>에러!</div>,
    },
  ],
  {
    basename: '/portfolio',
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);
