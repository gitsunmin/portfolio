import { O } from '@mobily/ts-belt';
import { NotionAPI } from 'notion-client';
import { NotionPage } from '@/components/notion/NotionPage';
import SiteConfig from '~/site.config';
import { getSiteMap } from '@/lib/get-site-map';

const Home = async () => {
  const notionApi = new NotionAPI();

  const recordMap = await notionApi.getPage(SiteConfig.rootNotionPageId);
  const siteMap = await getSiteMap();

  return (
    <NotionPage
      recordMap={recordMap}
      site={siteMap.site}
      error={O.None}
      pageId={SiteConfig.rootNotionPageId}
    />
  );
};

export default Home;
