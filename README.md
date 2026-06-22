# PartnerCheck Website

A static Next.js website for PartnerCheck app documentation with light/dark mode support and multi-language localization.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The website will automatically detect your browser language and redirect to the appropriate language version.

## Building for Production

To build a static export:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Pages

All pages are available in multiple languages with the format `/[locale]/page`:

- **Home** (`/[locale]/`) - Privacy summary page
- **Documentation** (`/[locale]/documentation`) - Full privacy documentation

## Supported Languages

The website supports 12 languages with automatic detection:

- English (en) - Default
- Czech (cz)
- Polish (pl)
- French (fr)
- Italian (it)
- Spanish (es)
- Japanese (ja)
- Chinese (zh)
- Dutch (nl)
- German (de)
- Portuguese (pt)
- Russian (ru)

## Features

- ✅ Light/Dark mode toggle
- ✅ Multi-language support with automatic detection
- ✅ Language selector in navigation
- ✅ Responsive design
- ✅ Markdown rendering
- ✅ Static site generation
- ✅ Language preference saved in localStorage

## Translation

Translation files are located in the `locales/` directory, organized by language code. See `TRANSLATION_GUIDE.md` for more information on adding or updating translations.

