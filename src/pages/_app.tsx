import type { AppProps } from 'next/app'

import 'windi.css'
import '../styles/base/globals.scss'
import '../styles/pages/Home.scss'
import '../styles/layouts/Header.scss'
import '../styles/layouts/Footer.scss'

import Script from 'next/script'

import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="ga-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
