import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>List of Domains</title>
        <meta name="description" content="Unused domains for sale." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
