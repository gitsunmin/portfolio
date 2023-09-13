import './globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import Footer from '@/components/ui/Footer';
import NotionPageHeader from '@/components/notion/NotionPageHeader';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { NotionAPI } from 'notion-client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gitsunmin Blog',
  description: 'Gitsunmin의 블로그입니다.',
  icons: [
    { rel: 'icon', url: './favicon.ico', sizes: 'any' },
    {
      rel: 'apple-touch-icon',
      url: './apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
  manifest: './site.webmanifest"',
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
