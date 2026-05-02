export type Lang = 'en' | 'es'

export const ui = {
  en: {
    // Nav
    'nav.about':   'About',
    'nav.ideas':   'Ideas',
    'nav.connect': 'Connect',
    // Theme toggle
    'theme.dark':  'Dark',
    'theme.light': 'Light',
    // Language switcher
    'lang.switch': 'ES',
    // Post page
    'post.previous':          '← Previous',
    'post.next':              'Next →',
    'post.back':              '← Back to all ideas',
    'post.comments':          'Discussion',
    'post.translation_notice': 'This translation is pending review — showing English version',
    'post.part':              'Part',
    'post.series_in':         'In this series',
    // Cards
    'card.featured': 'Featured',
    'card.part':     'Part',
  },
  es: {
    // Nav
    'nav.about':   'Acerca de',
    'nav.ideas':   'Ideas',
    'nav.connect': 'Contacto',
    // Theme toggle
    'theme.dark':  'Oscuro',
    'theme.light': 'Claro',
    // Language switcher
    'lang.switch': 'EN',
    // Post page
    'post.previous':          '← Anterior',
    'post.next':              'Siguiente →',
    'post.back':              '← Volver a todas las ideas',
    'post.comments':          'Discusión',
    'post.translation_notice': 'Esta traducción está pendiente de revisión — mostrando versión en inglés',
    'post.part':              'Parte',
    'post.series_in':         'En esta serie',
    // Cards
    'card.featured': 'Destacado',
    'card.part':     'Parte',
  },
} as const

export type UIKey = keyof typeof ui.en

export function getLangFromUrl(url: URL): Lang {
  if (url.pathname.startsWith('/es')) return 'es'
  return 'en'
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui['en'][key]
  }
}

/** Returns the current path without the locale prefix */
export function getPathWithoutLocale(pathname: string): string {
  return pathname.replace(/^\/es/, '') || '/'
}
