export function formatDate(dateStr: string, lang: 'en' | 'es' = 'en'): string {
  const date = new Date(dateStr + 'T00:00:00')
  const locale = lang === 'es' ? 'es-CR' : 'en-US'
  return date.toLocaleDateString(locale, {
    month: 'long',
    year:  'numeric',
  })
}
