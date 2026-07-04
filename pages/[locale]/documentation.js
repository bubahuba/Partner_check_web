import { readFileSync } from 'fs'
import { join } from 'path'
import Head from 'next/head'
import { languageCodes, defaultLanguage } from '../../lib/languages'
import { getPageTitle, getPageDescription } from '../../lib/meta'
import MarkdownContent from '../../components/MarkdownContent'
import DocumentationDisclaimer from '../../components/DocumentationDisclaimer'
import AppIcon from '../../components/AppIcon'
import OpenGraphMeta from '../../components/OpenGraphMeta'

export default function Documentation({ content, locale }) {
  const title = getPageTitle('documentation', locale)
  const description = getPageDescription('documentation', locale)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <OpenGraphMeta title={title} description={description} locale={locale} path="/documentation" />
      </Head>
      <div>
        <AppIcon href={`/${locale}/`} />
        <MarkdownContent content={content} />
        <DocumentationDisclaimer locale={locale} />
      </div>
    </>
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
  
  let content
  try {
    const filePath = join(process.cwd(), 'locales', validLocale, 'PRIVACY_DOCUMENTATION.md')
    content = readFileSync(filePath, 'utf8')
  } catch (error) {
    // Fallback to English if translation doesn't exist
    const filePath = join(process.cwd(), 'locales', defaultLanguage, 'PRIVACY_DOCUMENTATION.md')
    content = readFileSync(filePath, 'utf8')
  }
  
  return {
    props: {
      content,
      locale: validLocale,
    },
  }
}

