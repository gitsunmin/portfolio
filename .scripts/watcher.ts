import chokidar from 'chokidar';
import { run as runBuild } from './builder';

// One-liner for current directory
chokidar.watch('./src').on('all', (event, path) => {
  console.log(event, path);
  runBuild();
});
