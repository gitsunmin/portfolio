import { build } from './builder';
import { srcWatcher } from './watcher';
import { Server } from 'bun';
import { match } from 'ts-pattern';

const PORT = 8080;

const Bunouter = async (
  request: Request,
  server: Server
): Promise<Response> => {
  const requestURL = new URL(request.url);

  const { pathname } = requestURL;

  return match(requestURL)
    .with({ pathname: '/' }, () => new Response(Bun.file(`dist/index.html`)))
    .with(
      { pathname: '/index.css' },
      () => new Response(Bun.file(`dist/index.css`))
    )
    .with(
      { pathname: '/index.js' },
      () => new Response(Bun.file(`dist/index.js`))
    )
    .otherwise(() => new Response(Bun.file(`dist${pathname}`)));
};

const server = Bun.serve({
  port: PORT,
  hostname: 'localhost',
  development: true,
  fetch: Bunouter,
});

srcWatcher.on('all', async (eventName) => {
  console.log(`File ${eventName}, rebuilding...`);
  await build();
});

srcWatcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
  server.stop();
});

srcWatcher.on('ready', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  server.reload({
    fetch: Bunouter,
  });
});
