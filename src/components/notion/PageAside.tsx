import * as React from 'react';

import { Block, ExtendedRecordMap } from 'notion-types';

import { PageActions } from '@/components/notion/PageActions';

export const PageAside: React.FC<{
  block: Block;
  recordMap: ExtendedRecordMap;
  isBlogPost: boolean;
}> = ({ block, recordMap, isBlogPost }) => {
  if (!block) {
    return null;
  }

  return <div>aside</div>;
};
