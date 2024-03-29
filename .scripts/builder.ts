import { copyFiles } from './utils';
import PortfolioConfig from './../portpolio.config';

export const build = async () => {
  try {
    await Bun.build({
      entrypoints: ['index.ts', 'config.flag.ts'],
      outdir: 'dist',
      minify: true,
      target: 'browser',
    });

    await copyFiles(PortfolioConfig.publicDir, 'dist');
  } catch (error) {
    console.error(`[Build Error] error: ${error}`);
  }
};

build();
