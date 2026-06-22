import { getStaticMoods, pickRandomMoods } from './demoMoods'

const DEMO_NAMES = ['Alex', 'Jordan', 'Sam']

/** Same as app: last 6 digits parsed as hex → #RRGGBB for CSS */
export function colorFromDigitCode(digits) {
  const normalized = digits.replace(/\D/g, '').padStart(6, '0').slice(-6)
  const value = Number.parseInt(normalized, 16) || 0
  return `#${value.toString(16).padStart(6, '0')}`
}

/** Reverse 6 digit characters — same logic as the app (123456 → 654321) */
export function reverseDigitCode(digits) {
  return digits.replace(/\D/g, '').padStart(6, '0').slice(-6).split('').reverse().join('')
}

export function randomDigitCode() {
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('')
}

export function formatDigitDisplay(digits) {
  const normalized = digits.replace(/\D/g, '').padStart(6, '0').slice(-6)
  return `…${normalized.slice(0, 3)} ${normalized.slice(3)}`
}

export function buildDemoContact(name, digitCode, mood) {
  const code = digitCode.replace(/\D/g, '').padStart(6, '0').slice(-6)
  const codeReversed = reverseDigitCode(code)
  return {
    name,
    digits: formatDigitDisplay(code),
    code,
    codeReversed,
    outer: colorFromDigitCode(code),
    inner: colorFromDigitCode(codeReversed),
    mood,
  }
}

const DEFAULT_CODES = ['847652', '388015', '915935']

function demoContactsFromCodes(codes, moods) {
  return DEMO_NAMES.map((name, i) => buildDemoContact(name, codes[i], moods[i]))
}

/** Deterministic numeric codes for SSR / first paint */
export function getStaticDemoContacts(locale) {
  return demoContactsFromCodes(DEFAULT_CODES, getStaticMoods(locale))
}

/** Random numeric codes and moods — call on client after mount */
export function generateRandomDemoContacts(locale) {
  return demoContactsFromCodes(
    DEMO_NAMES.map(() => randomDigitCode()),
    pickRandomMoods(locale),
  )
}
