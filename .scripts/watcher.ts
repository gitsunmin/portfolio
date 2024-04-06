import chokidar from 'chokidar';
import PortfolioConfig from '../portpolio.config';

export const srcWatcher = chokidar.watch(PortfolioConfig.watchDir);
