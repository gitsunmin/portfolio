import { copyFiles } from './utils';
import PortfolioConfig from '../portpolio.config';
import { TailwindCSSLoader } from './plugins/tailwindcssLoader';

export const build = async () => {
  try {
    await Bun.build({
      entrypoints: ['./src/index.tsx'],
      outdir: 'dist',
      minify: true,
      plugins: [
        await TailwindCSSLoader({
          input: './src/index.css',
          output: 'dist/output.css',
        }),
      ],
      target: 'browser',
    });

    await copyFiles(PortfolioConfig.publicDir, 'dist');
  } catch (error) {
    console.error(`[Build Error] error: ${error}`);
  } finally {
  }
};

build();
