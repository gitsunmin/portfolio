import { match } from 'ts-pattern';
import { build } from './build';

function main(args: Array<string>) {
  const [command] = args;

  match(command)
    .with('build', build)
    .with('serve', () => import('./serve'))
    .otherwise(() => {
      console.error('Not Supported Command !');
    });
}

main(process.argv.slice(2));
