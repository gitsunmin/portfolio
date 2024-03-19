import chokidar from 'chokidar';
import serveHandler from 'serve-handler';
import http from 'http';

import { build } from './builder';
import { srcWatcher } from './watcher';

const PORT = 8080;

const server = http.createServer((request, response) =>
  serveHandler(request, response, { public: './dist' })
);

srcWatcher.on('all', async () => {
  await build();
});

srcWatcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
  server.close();
});

srcWatcher.on('ready', () => {
  server.listen(
    {
      port: PORT,
    },
    () => console.log(`Running at http://localhost:${PORT}`)
  );
});
