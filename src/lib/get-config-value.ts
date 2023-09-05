import type { SiteConfig } from '~/site.config';
import rawSiteConfig from '../../site.config';

if (!rawSiteConfig) {
  throw new Error(`Config error: invalid site.config.ts`);
}

let siteConfig: SiteConfig = rawSiteConfig;

// allow environment variables to override site.config.ts

try {
  if (process.env.NEXT_PUBLIC_SITE_CONFIG) {
    siteConfig = {
      ...rawSiteConfig,
      ...JSON.parse(process.env.NEXT_PUBLIC_SITE_CONFIG),
    };
  }
} catch (err) {
  console.error('Invalid config "NEXT_PUBLIC_SITE_CONFIG" failed to parse');
  throw err;
}

export function getSiteConfig<T>(key: keyof SiteConfig, defaultValue?: T): T {
  const value = siteConfig[key] as T;

  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(`Config error: missing required site config value "${key}"`);
}

export function getEnv(
  key: string,
  defaultValue: string | null,
  env = process.env
): string {
  const value = env[key];

  if (value !== undefined) {
    return value;
  }

  if (defaultValue) {
    return defaultValue;
  }

  return 'default';

  throw new Error(`Config error: missing required env variable "${key}"`);
}
