import { useEffect } from 'react'
import { Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { supportedLangs, defaultLang } from './i18n/translations'
import { startSmoothScroll, scrollToTop } from './smooth'
import { routeMeta, applyHead } from './seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Backdrop from './components/Backdrop'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function LangGate() {
  const { lang } = useParams()
  if (!supportedLangs.includes(lang)) {
    return <Navigate to={`/${defaultLang}/`} replace />
  }
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  )
}

function Layout() {
  const { t } = useLanguage()
  return (
    <>
      <SyncDocument />
      <a className="skip-link" href="#main">{t('nav.skip')}</a>
      <Preloader />
      <Backdrop />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <PageTransition />
    </>
  )
}

function SyncDocument() {
  const { lang, dir } = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  useEffect(() => {
    startSmoothScroll()
    // Card hover glow: one listener feeds the pointer position to whichever
    // [data-spot] element is under it.
    function onMove(e) {
      const el = e.target.closest?.('[data-spot]')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    scrollToTop(true)
    applyHead(routeMeta(lang, pathname.split('/').slice(2).join('/')))
  }, [pathname, lang])

  return null
}

function PageTransition() {
  const { pathname } = useLocation()
  return (
    <>
      <div key={`curtain-${pathname}`} className="curtain" aria-hidden="true" />
      <main id="main" key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLang}/`} replace />} />
      <Route path="/:lang" element={<LangGate />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="skills" element={<Skills />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${defaultLang}/`} replace />} />
    </Routes>
  )
}
