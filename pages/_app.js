import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})();`,
          }}
        />
        <link rel="icon" type="image/png" href="/appicon.png" />
        <link rel="apple-touch-icon" href="/appicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PartnerCheck" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App

