import type { AppProps } from 'next/app'

import 'windi.css'
import '../styles/base/globals.scss'
import '../styles/pages/Home.scss'
import '../styles/layouts/Header.scss'
import '../styles/layouts/Footer.scss'

import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
