/**
 * Fire a custom GA4 event. No-ops when gtag is unavailable (SSR / blocked).
 * @param {string} name Event name (e.g. click-app, click-ios, click-android)
 * @param {Record<string, unknown>} [params]
 */
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
