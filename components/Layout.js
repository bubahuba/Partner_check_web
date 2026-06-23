import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import Link from 'next/link'
import { isRtlLocale } from '../lib/languages'
import { getNavLabel } from '../lib/nav'

export default function Layout({ children }) {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    if (router.isReady) {
      const currentLocale = router.query.locale || 'en'
      setLocale(currentLocale)
      document.documentElement.dir = isRtlLocale(currentLocale) ? 'rtl' : 'ltr'
      document.documentElement.lang = currentLocale
    }
  }, [router.isReady, router.query.locale])

  const getLocalizedPath = (path) => {
    if (path === '/') {
      return `/${locale}/`
    }
    // Ensure trailing slash for static export compatibility
    return `/${locale}${path}${path.endsWith('/') ? '' : '/'}`
  }

  const documentationLabel = getNavLabel('documentation', locale)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              <Link href={getLocalizedPath('/')} className="text-xl font-bold text-gray-900 dark:text-gray-100">
                PartnerCheck
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href={getLocalizedPath('/documentation')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  {documentationLabel}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSelector />
              <ThemeToggle />
              <button
                className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href={getLocalizedPath('/documentation')} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {documentationLabel}
              </Link>
            </div>
          )}
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PartnerCheck. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

