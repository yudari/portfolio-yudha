/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/utilities.css'
import '../styles/swiper-bundle.min.css'
import '../styles/homepage.css'
import '../styles/detail-project.css'
import Script from 'next/script'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unicons.iconscout.com/release/v4.0.0/css/line.css'
        />
      </Head>
      {/* <Script src='./swiper-bundle.min.js' strategy='lazyOnload' /> */}
      <Script src='./main.js' strategy='lazyOnload' />
      <Component {...pageProps} />
    </>
  )
}
