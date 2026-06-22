# Translation Guide

This website supports multiple languages. All translation files are located in the `locales/` directory, organized by language code.

## Supported Languages

- `en` - English (default)
- `cz` - Czech (Čeština) — browser locale `cs` maps to `cz`
- `sk` - Slovak (Slovenčina)
- `pl` - Polish (Polski)
- `hu` - Hungarian (Magyar)
- `fr` - French (Français)
- `it` - Italian (Italiano)
- `es` - Spanish (Español)
- `ja` - Japanese (日本語)
- `zh` - Chinese (中文)
- `hi` - Hindi (हिन्दी)
- `nl` - Dutch (Nederlands)
- `de` - German (Deutsch)
- `pt` - Portuguese (Português)
- `ru` - Russian (Русский)
- `ua` - Ukrainian (Українська) — browser locale `uk` maps to `ua`
- `ar` - Arabic (العربية, RTL)
- `he` - Hebrew (עברית, RTL)

## File Structure

Each language has its own folder in `locales/` containing two markdown files for the documentation page:

- `PRIVACY_SUMMARY.md` - Legacy privacy summary (documentation fallback reference)
- `PRIVACY_DOCUMENTATION.md` - Full documentation page

Marketing landing page copy lives in `lib/landing/locales/{code}.js` and is shown on the home page for all supported languages.

## Adding Translations

1. Navigate to the language folder (e.g., `locales/fr/`)
2. Edit the markdown files with translated content
3. Maintain the same markdown structure and formatting
4. The website will automatically use the translated files

## Language Detection

The website automatically detects the user's browser language and redirects to the appropriate language version. Users can also manually select a language using the language selector in the navigation bar.

## Fallback Behavior

If a translation file is missing or cannot be read, the website will automatically fall back to the English version.
