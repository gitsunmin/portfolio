import {
  getCanonicalPageId as getCanonicalPageIdImpl,
  parsePageId,
} from 'notion-utils';

import { ExtendedRecordMap } from 'notion-types';

import { inversePageUrlOverrides } from '@/lib/config';

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false });
  if (!cleanPageId) {
    return null;
  }

  const override = inversePageUrlOverrides[cleanPageId];
  if (override) {
    return override;
  } else {
    return getCanonicalPageIdImpl(pageId, recordMap, {
      uuid,
    });
  }
}
