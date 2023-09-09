import got from 'got';
// import lqip from 'lqip-modern';
import { ExtendedRecordMap, PreviewImage, PreviewImageMap } from 'notion-types';
import { getPageImageUrls, normalizeUrl } from 'notion-utils';
import pMap from 'p-map';
import pMemoize from 'p-memoize';

import { defaultPageCover, defaultPageIcon } from './config';
import { db } from '@/lib/db';
import { mapImageUrl } from './map-image-url';

export async function getPreviewImageMap(
  recordMap: ExtendedRecordMap
): Promise<PreviewImageMap> {
  const urls: string[] =
    (recordMap &&
      defaultPageIcon &&
      defaultPageCover &&
      getPageImageUrls(recordMap, {
        mapImageUrl,
      })
        .concat([defaultPageIcon, defaultPageCover])
        .filter(Boolean)) ||
    [];

  const previewImagesMap = Object.fromEntries(
    await pMap(
      urls,
      async (url) => {
        const cacheKey = normalizeUrl(url);
        return [cacheKey, await getPreviewImage(url, { cacheKey })];
      },
      {
        concurrency: 8,
      }
    )
  );

  return previewImagesMap;
}

async function createPreviewImage(
  url: string,
  { cacheKey }: { cacheKey: string }
): Promise<PreviewImage | null> {
  try {
    try {
      const cachedPreviewImage = await db.get(cacheKey);
      if (cachedPreviewImage) {
        return cachedPreviewImage;
      }
    } catch (err) {
      // ignore redis errors
      console.warn(`redis error get "${cacheKey}"`, err);
    }

    const { body } = await got(url);
    console.log('body:', body);
    // const result = await lqip(body);

    const previewImage = {
      //   originalWidth: result.metadata.originalWidth,
      originalWidth: 110,
      //   originalHeight: result.metadata.originalHeight,
      originalHeight: 110,
      //   dataURIBase64: result.metadata.dataURIBase64,
      dataURIBase64: 'result.metadata.dataURIBase64',
    };

    try {
      await db.set(cacheKey, previewImage);
    } catch (err) {
      // ignore redis errors
      console.warn(`redis error set "${cacheKey}"`, err);
    }

    return previewImage;
  } catch (err) {
    console.warn('failed to create preview image', url, err);
    return null;
  }
}

export const getPreviewImage = pMemoize(createPreviewImage);
