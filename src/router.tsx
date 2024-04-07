import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/index';
import Projects from './pages/projects';
import { match } from 'ts-pattern';

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
      path: '/projects',
      element: <Projects />,
      ErrorBoundary: () => <div>에러!</div>,
    },
  ],
  routerOptions
);
