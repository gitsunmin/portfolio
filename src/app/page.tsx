import { NotionAPI } from 'notion-client';
import { NotionPage } from '@/components/notion/NotionPage';
import SiteConfig from '~/site.config';
import { getSiteMap } from '@/lib/get-site-map';

const Home = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(SiteConfig.rootNotionPageId);
  const siteMap = await getSiteMap();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <NotionPage recordMap={recordMap} site={siteMap.site} />
    </main>
  );
};

export default Home;
