import { createContext, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { translations, supportedLangs, defaultLang } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const { lang: rawLang } = useParams()
  const lang = supportedLangs.includes(rawLang) ? rawLang : defaultLang
  const dict = translations[lang]

  const value = useMemo(() => {
    // t('a.b.c') — walk the translation tree; returns the path back if missing.
    function t(path) {
      const parts = path.split('.')
      let node = dict
      for (const part of parts) {
        node = node?.[part]
      }
      return node ?? path
    }
    // tx({ fa, en, de }) — pick the localized value from a data-file object.
    function tx(obj) {
      if (obj == null) return ''
      if (typeof obj === 'string') return obj
      return obj[lang] ?? obj.en ?? obj.fa ?? ''
    }
    return { lang, dir: dict.dir, t, tx }
  }, [lang, dict])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
