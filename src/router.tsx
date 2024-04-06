import { createHashRouter } from 'react-router-dom';
import Root from './pages/index';
import Projects from './pages/projects';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/projects',
          element: <Projects />,
        },
      ],
    },
  ],
  {
    basename: '/portfolio',
  }
);
