import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supportedLanguages, detectLanguage, languageCodes, stripLocaleFromPath } from '../lib/languages'

export default function LanguageSelector() {
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (langCode) => {
    localStorage.setItem('language', langCode)
    setCurrentLang(langCode)
    setIsOpen(false)
    
    // Get current path and extract the page name
    const currentPath = router.asPath
    const pathWithoutLang = stripLocaleFromPath(currentPath)
    // Extract page name (documentation, or empty for home)
    const pagePath = pathWithoutLang === '' ? '' : `/${pathWithoutLang}`
    
    router.push(`/${langCode}${pagePath}/`)
  }
  
  useEffect(() => {
    if (router.isReady && router.query.locale) {
      setCurrentLang(router.query.locale)
    } else {
      const detected = detectLanguage()
      setCurrentLang(detected)
    }
  }, [router.isReady, router.query.locale])

  const currentLanguage = supportedLanguages[currentLang] || supportedLanguages.en

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Select language"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute end-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 max-h-96 overflow-y-auto">
            {languageCodes.map((code) => {
              const lang = supportedLanguages[code]
              return (
                <button
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    currentLang === code
                      ? 'bg-gray-100 dark:bg-gray-700 font-semibold'
                      : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{lang.nativeName}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{lang.name}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

