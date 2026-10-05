import { createContext, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { translations, supportedLangs, defaultLang } from './translations'

const LanguageContext = createContext(null)
const faDigits = '۰۱۲۳۴۵۶۷۸۹'

export function LanguageProvider({ children }) {
  const { lang: rawLang } = useParams()
  const lang = supportedLangs.includes(rawLang) ? rawLang : defaultLang
  const dict = translations[lang]

  const value = useMemo(() => {
    // t('a.b.c') walks the translation tree; returns the path back if missing.
    function t(path) {
      let node = dict
      for (const part of path.split('.')) node = node?.[part]
      return node ?? path
    }
    // tx({ fa, en, de }) picks the localized value from a data object.
    function tx(obj) {
      if (obj == null) return ''
      if (typeof obj === 'string' || typeof obj === 'number') return obj
      return obj[lang] ?? obj.en ?? obj.fa ?? ''
    }
    // num(12) renders digits in the page's script.
    function num(n) {
      const s = String(n)
      return lang === 'fa' ? s.replace(/\d/g, (d) => faDigits[d]) : s
    }
    // to('projects') builds a path under the current language. Trailing
    // slash, matching the prerendered folders GitHub Pages serves directly.
    function to(path = '') {
      return `/${lang}/${path ? `${path}/` : ''}`
    }
    return { lang, dir: dict.dir, t, tx, num, to }
  }, [lang, dict])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
