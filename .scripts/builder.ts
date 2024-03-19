import { copyFiles } from './utils';

export const run = async () => {
  console.log('Start building...');

  await Bun.build({
    entrypoints: ['index.ts', 'config.flag.ts'],
    outdir: 'dist',
    minify: true,
    target: 'browser',
  });

  await copyFiles('public', 'dist');

  console.log('End building...');
};

run();
