// import { build } from './builder';
import { build } from './builder';
import { srcWatcher } from './watcher';
import { match } from 'ts-pattern';

const PORT = 8080;

/** Bun Router */
const Bouter = async (request: Request): Promise<Response> => {
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
  fetch: Bouter,
});

srcWatcher.on('all', async (eventName) => {
  process.stdout.clearLine(0); // 현재 라인의 내용을 지웁니다.
  process.stdout.cursorTo(0); // 커서를 라인의 시작으로 이동합니다.
  process.stdout.write(`File ${eventName}, rebuilding...`);
  await build();
  process.stdout.clearLine(0); // 현재 라인의 내용을 지웁니다.
  process.stdout.cursorTo(0); // 커서를 라인의 시작으로 이동합니다.
  process.stdout.write(`File ${eventName}, Build Complete!`);
});

srcWatcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
  server.stop();
});

srcWatcher.on('close', () => {
  console.log('Watcher closed');
  server.stop();
});

srcWatcher.on('ready', () => {
  server.reload({
    fetch: Bouter,
  });
  console.log(`\n
####################################################
##                                                ##
##   Server is running at ${server.url.origin}   ##
##                                                ##
####################################################
  `);
});
