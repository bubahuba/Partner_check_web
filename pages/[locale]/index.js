import { languageCodes, defaultLanguage } from '../../lib/languages'
import { getPageTitle, getPageDescription } from '../../lib/meta'
import LandingPage from '../../components/LandingPage'

export default function Home({ locale }) {
  return (
    <LandingPage
      locale={locale}
      title={getPageTitle('home', locale)}
      description={getPageDescription('home', locale)}
    />
  )
}

export async function getStaticPaths() {
  return {
    paths: languageCodes.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { locale } = params
  const validLocale = languageCodes.includes(locale) ? locale : defaultLanguage

  return {
    props: {
      locale: validLocale,
    },
  }
}
