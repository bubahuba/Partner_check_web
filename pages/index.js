import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { detectLanguage } from '../lib/languages'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const lang = detectLanguage()
    router.replace(`/${lang}/`)
  }, [router])

  return (
    <>
      <Head>
        <title>PartnerCheck — Coincidence Does Not Exist</title>
        <meta name="description" content="Every phone number hides a color. Discover hidden patterns in your contacts." />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-[#07070d]">
        <div className="animate-pulse text-violet-600 dark:text-violet-400/70 font-medium tracking-wide">PartnerCheck</div>
      </div>
    </>
  )
}
