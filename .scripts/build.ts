import { copyFiles } from './utils';
import PortfolioConfig from '../portpolio.config';
import { TailwindCSSLoader } from './plugins/tailwindcssLoader';
import { match } from 'ts-pattern';

export const build = async () => {
  try {
    const build = await Bun.build({
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

    match(build)
      .with({ success: true }, () => {
        console.write('Build Success');
      })
      .otherwise(() => {
        throw new Error('Build Failed');
      });
  } catch (error) {
    console.error(`[Build Error] error: ${error}`);
  }

  return build;
};
