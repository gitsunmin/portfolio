import './globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import Footer from '@/components/ui/Footer';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

/**
 * favicon generated by https://www.favicon-generator.org/
 */
export const metadata: Metadata = {
  title: 'Gitsunmin Blog',
  description: 'Gitsunmin의 블로그입니다.',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: './assets/favicons/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: './assets/favicons/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: './assets/favicons/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: './assets/favicons/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: './assets/favicons/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: './assets/favicons/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: './assets/favicons/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: './assets/favicons/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: './assets/favicons/apple-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: './assets/favicons/android-icon-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: './assets/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: './assets/favicons/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: './assets/favicons/favicon-16x16.png',
    },
  ],
  manifest: './assets/favicons/browserconfig.json"',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => (
  <html lang="kr">
    <body className={inter.className}>
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;