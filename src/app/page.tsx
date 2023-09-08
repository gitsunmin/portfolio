import { NotionAPI } from 'notion-client';
import { NotionPage } from '@/components/notion/NotionPage';
import SiteConfig from '~/site.config';
import { getSiteMap } from '@/lib/get-site-map';

const Home = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(SiteConfig.rootNotionPageId);
  const siteMap = await getSiteMap();
  return <NotionPage recordMap={recordMap} site={siteMap.site} />;
};

export default Home;
