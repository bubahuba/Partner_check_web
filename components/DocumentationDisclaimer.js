import { getDocumentationDisclaimer } from '../lib/disclaimer'

export default function DocumentationDisclaimer({ locale }) {
  return (
    <p className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
      {getDocumentationDisclaimer(locale)}
    </p>
  )
}
