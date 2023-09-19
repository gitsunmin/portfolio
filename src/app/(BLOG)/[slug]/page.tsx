import { getSiteMap } from '@/lib/get-site-map';
import { NotionAPI } from 'notion-client';
import { NotionPage } from '@/components/notion/NotionPage';
import SiteConfig from '~/site.config';

const notionApi = new NotionAPI();

const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const pageId: string = slug.split('-').pop() || SiteConfig.rootNotionPageId;

  const recordMap = await notionApi.getPage(pageId);
  const siteMap = await getSiteMap();

  return <NotionPage recordMap={recordMap} site={siteMap.site} />;
};

export default BlogContent;
