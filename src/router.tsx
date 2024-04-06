import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/index';
import Projects from './pages/projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);
