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
    await $`bun tailwindcss -i ${input} -o ${output}`;
  },
});
