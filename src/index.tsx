import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import './index.css';
import { match } from 'ts-pattern';

ReactDOM.createRoot(document?.getElementById('root') as HTMLElement).render(
  match(process.env['ENV'])
    .with('development', () => (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ))
    .otherwise(() => <App />)
);
