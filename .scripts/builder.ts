import { copyFiles } from './utils';

await Bun.build({
  entrypoints: ['index.ts', 'config.flag.ts'],
  outdir: 'dist',
  minify: true,
  target: 'browser',
});

await copyFiles('public', 'dist');
console.log(`Copied "public" to "dist"`);

export {};
