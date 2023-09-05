import * as types from '@/lib/types';

import { O, Option } from '@mobily/ts-belt';

export interface SiteConfig {
  rootNotionPageId: string;
  rootNotionSpaceId: Option<string>;

  name: string;
  domain: string;
  author: string;
  description: Option<string>;
  language: Option<string>;

  twitter: Option<string>;
  github: Option<string>;
  linkedin: Option<string>;
  newsletter: Option<string>;
  youtube: Option<string>;
  zhihu: Option<string>;
  mastodon: Option<string>;

  defaultPageIcon: Option<string | null>;
  defaultPageCover: Option<string | null>;
  defaultPageCoverPosition: Option<number | null>;

  isPreviewImageSupportEnabled: Option<boolean>;
  isTweetEmbedSupportEnabled: Option<boolean>;
  isRedisEnabled: Option<boolean>;
  isSearchEnabled: Option<boolean>;

  includeNotionIdInUrls: Option<boolean>;
  pageUrlOverrides: Option<types.PageUrlOverridesMap>;
  pageUrlAdditions: Option<types.PageUrlOverridesMap>;

  navigationStyle: Option<types.NavigationStyle>;
  navigationLinks: Option<Array<NavigationLink>>;
}

export interface NavigationLink {
  title: string;
  pageId: Option<string>;
  url: Option<string>;
}

const SiteConfig: SiteConfig = {
  name: "Gitsunmin's Blog",
  rootNotionPageId: '60d2a1c363524af3b9936a3b3b9534fb',
  author: 'Gitsunmin',
  defaultPageCover: O.None,
  defaultPageCoverPosition: O.None,
  defaultPageIcon: O.None,
  description: O.None,
  domain: 'gitsunmin.com',
  github: O.None,
  includeNotionIdInUrls: O.None,
  isPreviewImageSupportEnabled: O.None,
  isRedisEnabled: O.None,
  isSearchEnabled: O.None,
  isTweetEmbedSupportEnabled: O.None,
  language: O.None,
  linkedin: O.None,
  mastodon: O.None,
  navigationLinks: O.None,
  navigationStyle: O.None,
  newsletter: O.None,
  pageUrlAdditions: O.None,
  pageUrlOverrides: O.None,
  rootNotionSpaceId: O.None,
  twitter: O.None,
  youtube: O.None,
  zhihu: O.None,
};

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config;
};

export default SiteConfig;
