'use client';

import * as React from 'react';
import * as config from '@/lib/config';
import * as types from '@/lib/types';

import { formatDate, getBlockTitle, getPageProperty } from 'notion-utils';
import { getCanonicalPageUrl, mapPageUrl } from '@/lib/map-page-url';

// import BodyClassName from 'react-body-classname';
import Footer from '@/components/ui/Footer';
// import { Loading } from './Loading';
// import { NotionPageHeader } from './NotionPageHeader';
import NotionPageHeader from '@/components/notion/NotionPageHeader';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { NotionRenderer } from 'react-notion-x';
// import { Page404 } from './Page404';
import { PageAside } from '@/components/notion/PageAside';
import { Block, PageBlock } from 'notion-types';
import { PageHead } from './PageHead';
// import TweetEmbed from 'react-tweet-embed';
import dynamic from 'next/dynamic';
import { mapImageUrl } from '@/lib/map-image-url';
import { searchNotion } from '@/lib/search-notion';
// import styles from './styles.module.css';
// import { useDarkMode } from '@/lib/use-dark-mode';
// import { useRoute } from 'next';
import { useSearchParam } from 'react-use';

import Prism from 'prismjs';

global.Prism = Prism;

import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/components/prism-csharp.js';
import 'prismjs/components/prism-docker.js';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-js-templates.js';
import 'prismjs/components/prism-coffeescript.js';
import 'prismjs/components/prism-diff.js';
import 'prismjs/components/prism-git.js';
import 'prismjs/components/prism-go.js';
import 'prismjs/components/prism-graphql.js';
import 'prismjs/components/prism-handlebars.js';
import 'prismjs/components/prism-less.js';
import 'prismjs/components/prism-makefile.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-objectivec.js';
import 'prismjs/components/prism-ocaml.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-reason.js';
import 'prismjs/components/prism-rust.js';
import 'prismjs/components/prism-sass.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-solidity.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-stylus.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-wasm.js';
import 'prismjs/components/prism-yaml.js';

// -----------------------------------------------------------------------------
// dynamic imports for optional components
// -----------------------------------------------------------------------------

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // add / remove any prism syntaxes here
    return m.Code;
  })
);

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then((m) => {
      m.Modal.setAppElement('.notion-viewport');
      return m.Modal;
    }),
  {
    ssr: false,
  }
);

const propertyLastEditedTimeValue = (
  { block, pageHeader }: { block: PageBlock; pageHeader: boolean },
  defaultFn: () => React.ReactNode
) => {
  if (pageHeader && block?.last_edited_time) {
    return `Last updated ${formatDate(block?.last_edited_time, {
      month: 'long',
    })}`;
  }

  return defaultFn();
};

const propertyDateValue = (
  { data, schema, pageHeader }: { data: any; schema: any; pageHeader: boolean },
  defaultFn: () => React.ReactNode
) => {
  if (pageHeader && schema?.name?.toLowerCase() === 'published') {
    const publishDate = data?.[0]?.[1]?.[0]?.[1]?.start_date;

    if (publishDate) {
      return `${formatDate(publishDate, {
        month: 'long',
      })}`;
    }
  }

  return defaultFn();
};

const propertyTextValue = (
  { schema, pageHeader }: { schema: any; pageHeader: boolean },
  defaultFn: () => React.ReactNode
) => {
  if (pageHeader && schema?.name?.toLowerCase() === 'author') {
    return <b>{defaultFn()}</b>;
  }

  return defaultFn();
};

export const NotionPage: React.FC<types.PageProps> = ({
  site,
  recordMap,
  error,
  pageId,
}) => {
  // const router = useRouter();
  const lite = useSearchParam('lite');

  const components = React.useMemo(
    () => ({
      nextImage: Image,
      nextLink: Link,
      Code,
      Collection,
      Equation,
      Pdf,
      Modal,
      Tweet: null,
      Header: NotionPageHeader,
      propertyLastEditedTimeValue,
      propertyTextValue,
      propertyDateValue,
    }),
    []
  );

  // lite mode is for oembed
  const isLiteMode = lite === 'true';

  // const { isDarkMode } = useDarkMode();

  const siteMapPageUrl = React.useMemo(() => {
    const params: any = {};
    if (lite) params.lite = lite;

    const searchParams = new URLSearchParams(params);
    return site && recordMap ? mapPageUrl(site, recordMap, searchParams) : '';
  }, [site, recordMap, lite]);

  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  // const isRootPage =
  //   parsePageId(block?.id) === parsePageId(site?.rootNotionPageId)
  const isBlogPost =
    block?.type === 'page' && block?.parent_table === 'collection';

  const showTableOfContents = !!isBlogPost;
  const minTableOfContentsItems = 3;

  const pageAside = React.useMemo(() => {
    if (block && recordMap)
      return (
        <PageAside
          block={block}
          recordMap={recordMap}
          isBlogPost={isBlogPost}
        />
      );
    else return null;
  }, [block, recordMap, isBlogPost]);

  const footer = React.useMemo(() => <Footer />, []);

  // if (router.isFallback) {
  //   return <div>loading...</div>;
  // }

  if (error || !site || !block) {
    // return <Page404 site={site} pageId={pageId} error={error} />;
    return <h1>404</h1>;
  }

  const title = getBlockTitle(block, recordMap) || site.name;
  if (!config.isServer) {
    // add important objects to the window global for easy debugging
    const g = window as any;
    g.pageId = pageId;
    g.recordMap = recordMap;
    g.block = block;
  }
  const canonicalPageUrl =
    !config.isDev && getCanonicalPageUrl(site, recordMap)(pageId);

  const socialImage =
    block &&
    block.format &&
    recordMap &&
    config &&
    mapImageUrl(
      (getPageProperty<string>('Social Image', block, recordMap) ||
        (block as PageBlock).format?.page_cover ||
        config.defaultPageCover) ??
        '',
      block
    );
  const socialDescription =
    getPageProperty<string>('Description', block, recordMap) ||
    config.description;
  return (
    <>
      {socialImage && (
        <PageHead
          pageId={pageId}
          site={site}
          title={title}
          description={socialDescription}
          image={socialImage}
          // url={canonicalPageUrl}
        />
      )}
      {/* {isLiteMode && <BodyClassName className='notion-lite' />}
      {isDarkMode && <BodyClassName className='dark-mode' />} */}
      {config.defaultPageIcon &&
        config.defaultPageCover &&
        siteMapPageUrl &&
        socialImage && (
          <NotionRenderer
            // bodyClassName={cscscsc(
            //   styles.notion,
            //   pageId === site.rootNotionPageId && 'index-page'
            // )}
            // darkMode={true}
            bodyClassName="index-page"
            components={components}
            recordMap={recordMap}
            rootDomain={site.domain}
            fullPage={!isLiteMode}
            previewImages={!!recordMap.preview_images}
            showCollectionViewDropdown={false}
            showTableOfContents={showTableOfContents}
            minTableOfContentsItems={minTableOfContentsItems}
            defaultPageIcon={config.defaultPageIcon}
            defaultPageCover={config.defaultPageCover}
            defaultPageCoverPosition={config.defaultPageCoverPosition}
            mapPageUrl={siteMapPageUrl}
            mapImageUrl={(url, block) => {
              return mapImageUrl(url, block) || url;
            }}
            searchNotion={config.isSearchEnabled ? searchNotion : undefined}
            pageAside={pageAside}
            footer={footer}
          />
        )}
    </>
  );
};
