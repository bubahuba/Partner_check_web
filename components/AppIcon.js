import Link from 'next/link'

export default function AppIcon({ href }) {
  const icon = (
    <div className="relative">
      {/* Outer shadow for depth */}
      <div className="absolute inset-0 bg-gray-900 dark:bg-gray-800 rounded-[22%] blur-2xl opacity-25 dark:opacity-35 transform scale-110 -z-10"></div>

      {/* Inner shadow for subtle depth */}
      <div className="absolute inset-0 bg-gray-900 dark:bg-gray-900 rounded-[22%] blur-md opacity-10 transform scale-105"></div>

      {/* Main icon container with gloss effect */}
      <div className="relative w-[150px] h-[150px] rounded-[22%] overflow-hidden shadow-2xl">
        {/* Subtle border */}
        <div className="absolute inset-0 rounded-[22%] ring-1 ring-black/10 dark:ring-white/10 z-20 pointer-events-none"></div>

        {/* Gloss overlay - top highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none z-10 rounded-[22%]"></div>

        {/* Secondary gloss - bottom reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10 rounded-b-[22%]"></div>

        {/* Icon image */}
        <img
          src="/appicon.png"
          alt="PartnerCheck App Icon"
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )

  return (
    <div className="flex justify-center mb-8">
      {href ? (
        <Link href={href} className="block rounded-[22%] transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900">
          {icon}
        </Link>
      ) : (
        icon
      )}
    </div>
  )
}

