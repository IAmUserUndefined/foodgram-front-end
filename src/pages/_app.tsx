import type { AppProps } from 'next/app';

import Head from 'next/head';
import NextNProgress from "nextjs-progressbar";

import GlobalStyle from "../styles/global";

import { ModalProvider } from "../providers/ModalProvider";
import { AuthProvider } from "../providers/AuthProvider";

import Modal from "../components/Modal";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
        <ModalProvider>
          <AuthProvider>
            <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="icon" href="icon/icon.png" />
              <title>Foodgram</title>
            </Head>
            <NextNProgress
              color="#FF0000"
              startPosition={0.3}
              stopDelayMs={100}
              height={4.5}
              options={ { showSpinner : false } }
            />
            <Component {...pageProps} />
            <Modal />
          </AuthProvider>
        </ModalProvider>
    </>
  );
};

export default MyApp;