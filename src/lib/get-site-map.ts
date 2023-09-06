import { getAllPagesInSpace } from "notion-utils";
import pMemoize from "p-memoize";

import * as config from "@/lib/config";
import * as types from "@/lib/types";
import { getCanonicalPageId } from "@/lib/get-canonical-page-id";
import { notion } from "@/lib/notion-api";

const uuid = !!config.includeNotionIdInUrls;

export async function getSiteMap(): Promise<types.SiteMap> {
  const partialSiteMap =
    config.rootNotionSpaceId &&
    (await getAllPages(config.rootNotionPageId, config.rootNotionSpaceId));

  return {
    site: config.site,
    ...partialSiteMap,
  } as types.SiteMap;
}

const getAllPages = pMemoize(getAllPagesImpl, {
  cacheKey: (...args) => JSON.stringify(args),
});

async function getAllPagesImpl(
  rootNotionPageId: string,
  rootNotionSpaceId: string
): Promise<Partial<types.SiteMap>> {
  const getPage = async (pageId: string, ...args: any) => {
    return notion.getPage(pageId, ...args);
  };

  const pageMap = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    getPage
  );

  const canonicalPageMap = Object.keys(pageMap).reduce(
    (map: any, pageId: string) => {
      const recordMap = pageMap[pageId];
      if (!recordMap) {
        throw new Error(`Error loading page "${pageId}"`);
      }

      const canonicalPageId = getCanonicalPageId(pageId, recordMap, {
        uuid,
      });

      if (canonicalPageId && map[canonicalPageId]) {
        // you can have multiple pages in different collections that have the same id
        // TODO: we may want to error if neither entry is a collection page
        console.warn("error duplicate canonical page id", {
          canonicalPageId,
          pageId,
          existingPageId: map[canonicalPageId],
        });

        return map;
      } else if (typeof canonicalPageId === "string") {
        return {
          ...map,
          [canonicalPageId]: pageId,
        };
      } else return map;
    },
    {}
  );

  return {
    pageMap,
    canonicalPageMap,
  };
}
