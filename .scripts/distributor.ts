import * as gh from 'gh-pages';

gh.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/gitsunmin/portfolio.git',
  },
  (_) => {
    console.log(1);
  }
);
