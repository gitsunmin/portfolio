import { $, BunPlugin } from 'bun';

export type TailwindCSSLoaderOptions = {
  input: string;
  output: string;
};

export const TailwindCSSLoader = async ({
  input,
  output,
}: TailwindCSSLoaderOptions): Promise<BunPlugin> => ({
  name: 'TailwindCSSLoader',
  async setup() {
    try {
      await $`bun tailwindcss -i ${input} -o ${output}`;
    } catch (error) {
      console.error(`[TailwindCSSLoader Error] error: ${error}`);
    }
  },
});
