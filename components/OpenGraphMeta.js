import {
  SITE_NAME,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  getOgImageUrl,
  getPageUrl,
  getOgLocale,
} from '../lib/meta'

export default function OpenGraphMeta({ title, description, locale, path = '/' }) {
  const url = getPageUrl(locale, path)
  const imageUrl = getOgImageUrl()
  const ogLocale = getOgLocale(locale)

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {ogLocale && <meta property="og:locale" content={ogLocale} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={`${SITE_NAME} app icon`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}
