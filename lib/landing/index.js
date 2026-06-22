import en from './locales/en'
import cz from './locales/cz'
import sk from './locales/sk'
import pl from './locales/pl'
import hu from './locales/hu'
import fr from './locales/fr'
import it from './locales/it'
import es from './locales/es'
import ja from './locales/ja'
import zh from './locales/zh'
import hi from './locales/hi'
import nl from './locales/nl'
import de from './locales/de'
import pt from './locales/pt'
import ru from './locales/ru'
import ar from './locales/ar'
import he from './locales/he'
import ua from './locales/ua'

const locales = { en, cz, sk, pl, hu, fr, it, es, ja, zh, hi, nl, de, pt, ru, ar, he, ua }

const DEMO_BASE = [
  { name: 'Alex', digits: '…476 52', outer: '#E8476C' },
  { name: 'Jordan', digits: '…388 15', outer: '#3D8BFF' },
  { name: 'Sam', digits: '…915 93', outer: '#915935' },
]

/** Reverse 6 hex digits — same logic as the app (123456 → 654321) */
export function reverseHexColor(hex) {
  const normalized = hex.replace('#', '').padStart(6, '0').slice(-6)
  return `#${normalized.split('').reverse().join('')}`
}

export function getLandingContent(locale) {
  return locales[locale] || locales.en
}

export function getDemoContacts(locale) {
  const content = getLandingContent(locale)
  return DEMO_BASE.map((base, i) => ({
    ...base,
    mood: content.demoContacts[i]?.mood ?? en.demoContacts[i].mood,
    inner: reverseHexColor(base.outer),
  }))
}

export const landingContent = en
export const demoContacts = getDemoContacts('en')
