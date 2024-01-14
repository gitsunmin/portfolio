import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Main from '@/components/layouts/Main';

export default function _App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Main>
  );
}
