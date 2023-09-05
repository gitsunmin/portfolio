import {
  getCanonicalPageId as getCanonicalPageIdImpl,
  parsePageId,
} from 'notion-utils';

import { ExtendedRecordMap } from 'notion-types';

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false });
  if (!cleanPageId) {
    return null;
  }

  return getCanonicalPageIdImpl(pageId, recordMap, {
    uuid,
  });
}
