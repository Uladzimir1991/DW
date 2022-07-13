import {GlobalStyle} from "../styles/globalStyle";
import { Normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';
import Home from "./index";
import Head from 'next/head';

function MyApp({ pageProps }: AppProps) {
  return (
      <>
        <Normalize/>
        <GlobalStyle/>
          <Head>
              <title>Тест</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
        <Home {...pageProps} />
      </>
  )
}

export default MyApp
