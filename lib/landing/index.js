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

export {
  buildDemoContact,
  colorFromDigitCode,
  generateRandomDemoContacts,
  getStaticDemoContacts,
  randomDigitCode,
  reverseDigitCode,
} from './demoContacts'
export { formatMoodPair, getMoodPool, getMoodWords, getStaticMoods, pickRandomMoods } from './demoMoods'

export function getLandingContent(locale) {
  return locales[locale] || locales.en
}

export const landingContent = en
