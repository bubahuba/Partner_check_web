import { useEffect, useRef, useState } from 'react'

const OVERLAY_RATIO = 0.2

function AppContactCard({ name, outer, inner, mood, innerColorStrip, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10 shadow-xl ${className}`}
      style={{ height: '280px' }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: outer }} />
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ height: `${OVERLAY_RATIO * 100}%`, backgroundColor: inner }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
        <p className="font-semibold text-white text-xl sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] text-center">
          {name}
        </p>
        {mood && (
          <p className="mt-2 text-xs sm:text-sm text-white/85 drop-shadow-md text-center">{mood}</p>
        )}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-center pointer-events-none"
        style={{ height: `${OVERLAY_RATIO * 100}%` }}
      >
        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-white/90 drop-shadow-md">
          {innerColorStrip}
        </span>
      </div>
    </div>
  )
}

function DigitReversalRow({ outerCode, innerCode, outer, inner, outerLabel, innerLabel, sameContactReversed }) {
  return (
    <div className="mt-5 space-y-3">
      <p className="text-xs text-zinc-500 text-center uppercase tracking-widest">{sameContactReversed}</p>
      <div className="flex items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
        <div className="text-center min-w-0">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{outerLabel}</p>
          <div className="flex items-center gap-2 justify-center">
            <span className="w-4 h-4 rounded-sm ring-1 ring-black/10 dark:ring-white/20 shrink-0" style={{ backgroundColor: outer }} />
            <code className="text-violet-600 dark:text-violet-300">{outerCode}</code>
          </div>
        </div>
        <svg className="w-5 h-5 text-zinc-400 dark:text-zinc-500 shrink-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
        <div className="text-center min-w-0">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{innerLabel}</p>
          <div className="flex items-center gap-2 justify-center">
            <span className="w-4 h-4 rounded-sm ring-1 ring-black/10 dark:ring-white/20 shrink-0" style={{ backgroundColor: inner }} />
            <code className="text-cyan-600 dark:text-cyan-300">{innerCode}</code>
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-zinc-500 font-mono">
        {outerCode} → {innerCode}
      </p>
    </div>
  )
}

export default function SwipeableContactShowcase({ contacts, outerLabel, innerLabel, innerColorStrip, sameContactReversed }) {
  const [index, setIndex] = useState(0)
  const directionRef = useRef(1)

  useEffect(() => {
    if (contacts.length <= 1) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const id = setInterval(() => {
      setIndex((prev) => {
        const next = prev + directionRef.current
        if (next >= contacts.length - 1) {
          directionRef.current = -1
          return contacts.length - 1
        }
        if (next <= 0) {
          directionRef.current = 1
          return 0
        }
        return next
      })
    }, 3800)

    return () => clearInterval(id)
  }, [contacts.length])

  const current = contacts[index]

  return (
    <div className="max-w-xs mx-auto lg:mx-0 lg:ms-auto">
      <div className="overflow-hidden rounded-2xl" aria-live="polite">
        <div
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {contacts.map((contact) => (
            <div key={contact.name} className="w-full shrink-0 px-0.5">
              <AppContactCard {...contact} innerColorStrip={innerColorStrip} />
            </div>
          ))}
        </div>
      </div>

      <DigitReversalRow
        outerCode={current.code}
        innerCode={current.codeReversed}
        outer={current.outer}
        inner={current.inner}
        outerLabel={outerLabel}
        innerLabel={innerLabel}
        sameContactReversed={sameContactReversed}
      />

      <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        {contacts.map((contact, i) => (
          <span
            key={contact.name}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-violet-500' : 'w-2 bg-zinc-300 dark:bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
