import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { detectLanguage } from '../lib/languages'
import OpenGraphMeta from '../components/OpenGraphMeta'

export default function Home() {
  const router = useRouter()
  const [locale, setLocale] = useState('')
  const title = 'PartnerCheck — Coincidence Does Not Exist'
  const description = 'Every phone number hides a color. Discover hidden patterns in your contacts.'

  useEffect(() => {
    const lang = detectLanguage()
    setLocale(lang)
    router.replace(`/${lang}/`)
  }, [router])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <OpenGraphMeta title={title} description={description} locale={locale || undefined} path="/" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-[#07070d]">
        <div className="animate-pulse text-violet-600 dark:text-violet-400/70 font-medium tracking-wide">PartnerCheck</div>
      </div>
    </>
  )
}
