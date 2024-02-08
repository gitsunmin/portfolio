import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Main from '@/components/layouts/Main';

export default function _App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </Main>
  );
}
