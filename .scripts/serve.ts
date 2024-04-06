import { type Server } from 'bun';
import { build } from './build';
import { srcWatcher } from './watcher';
import { P, match } from 'ts-pattern';

const PORT = 8080;

enum APPStatus {
  STOPPED = 'STOPPED',
  RUNNING_BUILD = 'RUNNING_BUILD',
  BUILD_COMPLITED = 'BUILD_COMPLITED',
  SERVER_RUNNING = 'SERVER_RUNNING',
  BUILD_ERROR = 'BUILD_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
}

let appStatus: APPStatus = APPStatus.STOPPED;

const showServerAddress = (server: Server) => {
  console.write(`
####################################################
##                                                ##
##   Server is running at ${server.url.origin}   ##
##                                                ##
####################################################
      `);
};

/** Bun Router */
const Bouter = async (request: Request): Promise<Response> => {
  const { pathname } = new URL(request.url);

  return match(pathname)
    .with('/', () => new Response(Bun.file(`dist/index.html`)))
    .otherwise((pathname) => new Response(Bun.file(`dist${pathname}`)));
};

const server = Bun.serve({
  port: PORT,
  hostname: 'localhost',
  development: true,
  fetch: Bouter,
});

srcWatcher.on('all', (eventName, path) => {
  console.clear();
  console.log(`[ ${eventName} ] "${path}"`);

  match(appStatus)
    .with(
      P.union(APPStatus.BUILD_COMPLITED, APPStatus.SERVER_RUNNING),
      async () => {
        try {
          await build();
          showServerAddress(server);
        } catch (error) {
          appStatus = APPStatus.BUILD_ERROR;
          console.error(`[Server Error] error: ${error}`);
        }
      }
    )
    .otherwise((appStatus) => {
      console.clear();
      console.log(`[${appStatus}]`);
    });
});

srcWatcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
  server.stop();
});

srcWatcher.on('close', () => {
  console.log('[[[[[ Watcher Closed ]]]]]');
  server.stop();
});

srcWatcher.addListener('build-complited', () => {
  appStatus = APPStatus.BUILD_COMPLITED;
});

srcWatcher.on('ready', async () => {
  try {
    server.reload({
      fetch: Bouter,
      error(request) {
        console.error(request);
        return new Response('Not Found', { status: 404 });
      },
    });

    await build();

    showServerAddress(server);
    srcWatcher.emit('build-complited');
  } catch (error) {
    console.error(`[Server Error] error: ${error}`);
  }
});
