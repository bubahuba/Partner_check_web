import Head from 'next/head'
import Link from 'next/link'
import { getLandingContent, getDemoContacts } from '../lib/landing'
import SwipeableContactShowcase from './SwipeableContactShowcase'

function ChainIcon({ type }) {
  const icons = {
    person: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    digits: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    ),
    color: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    ),
    reverse: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    ),
    mind: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
    question: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  }
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[type] || icons.question}
    </svg>
  )
}

function ColorOrb({ color, className, size = 'lg' }) {
  const sizes = { sm: 'w-24 h-24', md: 'w-32 h-32', lg: 'w-48 h-48', xl: 'w-64 h-64' }
  return (
    <div
      className={`${sizes[size]} ${className} rounded-full blur-3xl opacity-25 dark:opacity-40 animate-float`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  )
}

function ContactCardPreview({ name, digits, outer, inner, mood, outerTooltip, innerTooltip }) {
  const overlayPct = 20
  return (
    <div className="rounded-2xl overflow-hidden bg-zinc-100/90 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/40">
      <div className="relative h-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: outer }} />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: `${overlayPct}%`, backgroundColor: inner }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-3">
          <p className="font-semibold text-white text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] truncate">{name}</p>
        </div>
      </div>
      <div className="px-3 py-2.5 flex items-center justify-between gap-2 border-t border-zinc-200 dark:border-zinc-700/40">
        <div className="min-w-0">
          <p className="text-[10px] text-zinc-500 font-mono tracking-wider truncate">{digits}</p>
          <p className="text-[10px] text-violet-600 dark:text-violet-300/80 truncate">{mood}</p>
        </div>
        <div className="flex gap-1 shrink-0">
          <span className="w-4 h-4 rounded-sm ring-1 ring-black/10 dark:ring-white/20" style={{ backgroundColor: outer }} title={outerTooltip} />
          <span className="w-4 h-4 rounded-sm ring-1 ring-black/10 dark:ring-white/20" style={{ backgroundColor: inner }} title={innerTooltip} />
        </div>
      </div>
    </div>
  )
}

export default function LandingPage({ locale, title, description }) {
  const t = getLandingContent(locale)
  const demoContacts = getDemoContacts(locale)
  const docsPath = `/${locale}/documentation/`
  const { dualColor, psychology, ordering, favorites, ui } = t

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="landing-page -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 -mb-8 transition-colors duration-200">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-50 dark:bg-[#07070d] text-zinc-900 dark:text-white min-h-[90vh] flex items-center transition-colors duration-200">
          <ColorOrb color="#ff3366" className="absolute -top-20 start-[-5%]" size="xl" />
          <ColorOrb color="#8b5cf6" className="absolute top-1/3 end-[-10%] animate-float-delayed" size="lg" />
          <ColorOrb color="#06b6d4" className="absolute bottom-0 start-1/3" size="md" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgb(250_250_250)_70%)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#07070d_70%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
            <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] xl:gap-10 2xl:gap-16 xl:items-center">
              <div className="min-w-0 relative z-20 xl:max-w-xl 2xl:max-w-2xl">
                <p className="landing-label text-violet-600 dark:text-violet-300/90 text-sm sm:text-base font-medium tracking-[0.15em] uppercase mb-6">
                  {t.tagline}
                </p>

                <h1 className="landing-hero-title text-[2.25rem] sm:text-5xl md:text-[3.25rem] lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl leading-[1.05] mb-6">
                  <span className="block text-zinc-900 dark:text-white">{t.headline}</span>
                  <span className="block bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500 dark:from-rose-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    {t.headlineAccent}
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg xl:max-w-none mb-10">
                  {t.subheadline}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-base hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all hover:scale-[1.02] shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
                  >
                    {t.ctaPrimary}
                  </a>
                  <Link
                    href={docsPath}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-300 text-zinc-700 font-medium text-base hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-white transition-colors"
                  >
                    {t.ctaSecondary}
                  </Link>
                </div>
              </div>

              {/* Phone → dual color demo */}
              <div className="relative flex justify-center xl:justify-end shrink-0 z-10 mx-auto xl:mx-0 w-full max-w-sm xl:max-w-[360px]">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-rose-500/15 dark:from-violet-500/20 dark:to-rose-500/20 rounded-[2.5rem] blur-2xl" />
                  <div className="relative bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/50 rounded-[2.5rem] p-8 shadow-xl dark:shadow-2xl">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 rounded-[22%] overflow-hidden shadow-xl ring-1 ring-black/10 dark:ring-white/10">
                        <img src="/appicon.png" alt="PartnerCheck" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {demoContacts.map((contact) => (
                        <ContactCardPreview key={contact.name} {...contact} outerTooltip={ui.outerTooltip} innerTooltip={ui.innerTooltip} />
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700/50">
                      <p className="text-xs text-zinc-500 text-center uppercase tracking-widest mb-3">{ui.oneCardTwoLayers}</p>
                      <ContactCardPreview {...demoContacts[0]} digits={`${demoContacts[0].outer} → ${demoContacts[0].inner}`} outerTooltip={ui.outerTooltip} innerTooltip={ui.innerTooltip} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logic chain */}
        <section className="bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white py-20 lg:py-28 border-y border-zinc-200 dark:border-zinc-800/50 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
              {t.chain.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="relative z-10 p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-violet-400/50 dark:hover:border-violet-500/40 transition-colors h-full shadow-sm dark:shadow-none">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
                      <ChainIcon type={step.icon} />
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-snug">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="landing-display text-center text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-rose-500 to-violet-500 dark:from-rose-400 dark:to-violet-400 bg-clip-text text-transparent">
              {t.punchline}
            </p>
          </div>
        </section>

        {/* Dual color reveal */}
        <section className="bg-white dark:bg-[#0c0c14] text-zinc-900 dark:text-white py-20 lg:py-28 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="landing-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                  {dualColor.title}
                </h2>
                <div className="space-y-6">
                  <div className="ps-4 border-s-2 border-violet-500/50 dark:border-violet-500/60">
                    <h3 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">{dualColor.outerLabel}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{dualColor.outerDescription}</p>
                  </div>
                  <div className="ps-4 border-s-2 border-cyan-500/50 dark:border-cyan-500/60">
                    <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">{dualColor.innerLabel}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{dualColor.innerDescription}</p>
                  </div>
                </div>
              </div>

              <SwipeableContactShowcase
                contacts={demoContacts}
                outerLabel={dualColor.outerLabel}
                innerLabel={dualColor.innerLabel}
                innerColorStrip={ui.innerColorStrip}
                sameContactReversed={ui.sameContactReversed}
              />
            </div>
          </div>
        </section>

        {/* Color psychology */}
        <section className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white py-20 lg:py-28 border-y border-zinc-200 dark:border-zinc-800/50 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="landing-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              {psychology.title}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-12">
              {psychology.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {psychology.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-5 py-2.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-800 dark:text-zinc-200 shadow-sm dark:shadow-none"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Match ordering */}
        <section className="bg-white dark:bg-zinc-900 py-20 lg:py-28 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="landing-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-zinc-900 dark:text-white">
                  {ordering.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {ordering.description}
                </p>
                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  {ordering.hint}
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700/50 bg-zinc-50 dark:bg-zinc-800/40 p-6 sm:p-8 shadow-sm dark:shadow-none">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">{ordering.rankedLabel}</p>
                <ol className="space-y-3">
                  {[
                    { rank: 1, name: 'Jordan', score: ordering.scores.strong, bar: 'w-full' },
                    { rank: 2, name: 'Sam', score: ordering.scores.medium, bar: 'w-2/3' },
                    { rank: 3, name: 'Riley', score: ordering.scores.low, bar: 'w-1/3' },
                  ].map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-700/40"
                    >
                      <span className="landing-display text-2xl font-bold text-violet-500/50 dark:text-violet-400/50 w-8 shrink-0">
                        {row.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-semibold text-zinc-900 dark:text-white truncate">{row.name}</span>
                          <span className="text-xs text-zinc-500 shrink-0">{row.score}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                          <div className={`h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 ${row.bar}`} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex items-center justify-center gap-2 text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 text-violet-500 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm">{ordering.chartCaption}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Favorites */}
        <section className="bg-zinc-100 dark:bg-zinc-950 py-20 lg:py-28 border-y border-zinc-200 dark:border-zinc-800/50 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">{favorites.viewLabel}</p>
                  <div className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-xs font-medium">{favorites.hudOn}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: 'Jordan', outer: '#3D8BFF', inner: '#FFB8D3', favorited: true },
                    { name: 'Alex', outer: '#E8476C', inner: '#C6748E', favorited: true },
                  ].map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/40"
                    >
                      <div className="relative w-12 h-10 rounded-lg overflow-hidden shrink-0 ring-1 ring-black/10 dark:ring-white/10">
                        <div className="absolute inset-0" style={{ backgroundColor: row.outer }} />
                        <div className="absolute inset-x-0 bottom-0 h-[20%]" style={{ backgroundColor: row.inner }} />
                      </div>
                      <span className="flex-1 font-semibold text-zinc-900 dark:text-white truncate">{row.name}</span>
                      <svg className="w-5 h-5 text-rose-500 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-rose-500 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">{favorites.heartCaption}</span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="landing-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-zinc-900 dark:text-white">
                  {favorites.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {favorites.description}
                </p>
                <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">
                  {favorites.hint}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white dark:bg-zinc-900 py-20 lg:py-28 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {t.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 hover:shadow-xl hover:shadow-violet-500/5 transition-shadow"
                >
                  <span className="inline-block text-4xl font-extrabold landing-display text-violet-500/40 dark:text-violet-500/30 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="landing-display text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Match question + CTA */}
        <section id="download" className="relative overflow-hidden bg-zinc-50 dark:bg-[#07070d] text-zinc-900 dark:text-white py-24 lg:py-32 transition-colors duration-200">
          <ColorOrb color="#ff3366" className="absolute bottom-0 end-0" size="lg" />
          <ColorOrb color="#8b5cf6" className="absolute top-0 start-0" size="md" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="landing-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              {t.matchQuestion}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12">{t.platforms}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm dark:shadow-none">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="font-semibold">App Store</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm dark:shadow-none">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <span className="font-semibold">Google Play</span>
              </div>
            </div>

            <Link
              href={docsPath}
              className="text-violet-600 hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300 underline underline-offset-4 transition-colors"
            >
              {t.ctaSecondary} →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
