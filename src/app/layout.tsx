import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Gitsunmin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          `min-h-screen bg-background font-sans antialiased`,
          fontSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
