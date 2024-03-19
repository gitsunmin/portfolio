import { copyFiles } from './utils';

export const build = async () => {
  try {
    await Bun.build({
      entrypoints: ['index.ts', 'config.flag.ts'],
      outdir: 'dist',
      minify: true,
      target: 'browser',
    });

    await copyFiles('public', 'dist');
  } catch (error) {
    console.error(`[Build Error] error: ${error}`);
  }
};

build();
