import { Block } from 'notion-types';
import { defaultMapImageUrl } from 'react-notion-x';

import { defaultPageCover, defaultPageIcon } from '@/lib/config';
import { O } from '@mobily/ts-belt';
import { P, match } from 'ts-pattern';

export const mapImageUrl = (url: O.Option<string>, block: O.Option<Block>) => {
  return match([url, block])
    .with([O.None, O.None], () => defaultPageCover)
    .with([P.string, P.not(O.None)], ([url, block]) =>
      defaultMapImageUrl(url, block)
    )
    .otherwise(() => 'NOT_FOUND');
  // if (url === defaultPageCover || url === defaultPageIcon) {
  //   return url;
  // }
  // if (url && block) return defaultMapImageUrl(url, block);
  // else return url;
};
