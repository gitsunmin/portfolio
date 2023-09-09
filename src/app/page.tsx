import { NotionAPI } from 'notion-client';
import { NotionPage } from '@/components/notion/NotionPage';
import SiteConfig from '~/site.config';
import { getSiteMap } from '@/lib/get-site-map';

const Home = async () => {
  const notionApi = new NotionAPI();

  const recordMap = await notionApi.getPage(SiteConfig.rootNotionPageId);
  const siteMap = await getSiteMap();

  return <NotionPage recordMap={recordMap} site={siteMap.site} />;
};

export default Home;
