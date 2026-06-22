import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { detectLanguage, languageCodes, localePathRegex } from '../lib/languages'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    // Try to redirect to the detected language
    const lang = detectLanguage()
    const currentPath = window.location.pathname
    
    // If path starts with a locale, try to redirect to that locale's home with trailing slash
    const localeMatch = currentPath.match(localePathRegex())
    if (localeMatch && languageCodes.includes(localeMatch[1])) {
      const locale = localeMatch[1]
      const restOfPath = localeMatch[2] || ''
      // Ensure trailing slash
      const redirectPath = `/${locale}${restOfPath}${restOfPath.endsWith('/') ? '' : '/'}`
      if (redirectPath !== currentPath) {
        window.location.replace(redirectPath)
        return
      }
    }
    
    // Redirect to detected language home
    window.location.replace(`/${lang}/`)
  }, [])

  return (
    <>
      <Head>
        <title>Page Not Found - PartnerCheck</title>
        <meta name="description" content="Page not found. Redirecting..." />
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">Redirecting...</p>
        </div>
      </div>
    </>
  )
}

