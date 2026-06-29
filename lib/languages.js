export const supportedLanguages = {
  en: { code: 'en', name: 'English', nativeName: 'English' },
  cz: { code: 'cz', name: 'Czech', nativeName: 'Čeština' },
  sk: { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
  pl: { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  hu: { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  zh: { code: 'zh', name: 'Chinese', nativeName: '中文' },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  ua: { code: 'ua', name: 'Ukrainian', nativeName: 'Українська' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', rtl: true },
  he: { code: 'he', name: 'Hebrew', nativeName: 'עברית', rtl: true },
}

export const defaultLanguage = 'en'

export const languageCodes = Object.keys(supportedLanguages)

export function isRtlLocale(code) {
  return supportedLanguages[code]?.rtl === true
}

export function localePathRegex() {
  return new RegExp(`^/(${languageCodes.join('|')})(/.*)?$`)
}

export function stripLocaleFromPath(path) {
  return path.replace(new RegExp(`^/(${languageCodes.join('|')})`), '').replace(/\/$/, '') || ''
}

export function getWebAppUrl(locale = defaultLanguage) {
  const code = languageCodes.includes(locale) ? locale : defaultLanguage
  return `/app/?lang=${code}`
}

export function detectLanguage() {
  if (typeof window === 'undefined') return defaultLanguage

  const saved = localStorage.getItem('language')
  if (saved && languageCodes.includes(saved)) {
    return saved
  }

  const browserLang = navigator.language || navigator.userLanguage
  const langCode = browserLang.split('-')[0].toLowerCase()

  if (languageCodes.includes(langCode)) {
    return langCode
  }

  const variants = {
    'zh-cn': 'zh',
    'zh-tw': 'zh',
    'pt-br': 'pt',
    'pt-pt': 'pt',
    cs: 'cz',
    uk: 'ua',
  }

  const browserLangLower = browserLang.toLowerCase()
  if (variants[browserLangLower]) {
    return variants[browserLangLower]
  }

  return defaultLanguage
}
