import { O } from '@mobily/ts-belt';
import { getSiteMap } from '@/lib/get-site-map';
import { NotionPage } from '@/components/notion/NotionPage';
import { NotionAPI } from 'notion-client';
import SiteConfig from '~/site.config';

const notionApi = new NotionAPI();

export const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const pageId: string = slug.split('-').pop() || SiteConfig.rootNotionPageId;

  const recordMap = await notionApi.getPage(pageId);
  const siteMap = await getSiteMap();

  return (
    <NotionPage
      recordMap={recordMap}
      site={siteMap.site}
      error={O.None}
      pageId={pageId}
    />
  );
};
