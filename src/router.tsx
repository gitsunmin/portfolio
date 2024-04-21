import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/index';
import { match } from 'ts-pattern';
import ActivityPage from './pages/activity';
import CareerPage from './pages/career';

const routerOptions = match(process.env['ENV'])
  .with('development', () => ({
    future: {
      v7_normalizeFormMethod: true,
    },
  }))
  .with('production', () => ({
    basename: '/portfolio',
    future: {
      v7_normalizeFormMethod: true,
    },
  }))
  .otherwise(() => ({}));

export const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: <Root />,
      ErrorBoundary: () => <div>에러!</div>,
    },
    {
      path: '/activity',
      element: <ActivityPage />,
      ErrorBoundary: () => <div>에러!</div>,
    },
    {
      path: '/career',
      element: <CareerPage />,
      ErrorBoundary: () => <div>에러!</div>,
    },
  ],
  routerOptions
);
