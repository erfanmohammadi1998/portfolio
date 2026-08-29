import { useEffect } from 'react'
import { Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { supportedLangs, defaultLang } from './i18n/translations'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'
import Boot from './components/Boot'
import ApiConsole, { ConsoleProvider, useConsole } from './components/ApiConsole'

function LangGate() {
  const { lang } = useParams()
  if (!supportedLangs.includes(lang)) {
    return <Navigate to={`/${defaultLang}`} replace />
  }
  return (
    <LanguageProvider>
      <ConsoleProvider>
        <LangLayout />
      </ConsoleProvider>
    </LanguageProvider>
  )
}

function LangLayout() {
  return (
    <>
      <SyncHtmlAttrs />
      <Boot />
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <PageTransition />
      <ApiConsole />
      <ConsoleDock />
    </>
  )
}

function ConsoleDock() {
  const { openConsole } = useConsole()
  const { t } = useLanguage()
  return (
    <button type="button" className="console-dock" onClick={openConsole}>
      <span className="console-dock-glyph">{'>_'}</span>
      <span className="console-dock-label">{t('map.openConsole')}</span>
    </button>
  )
}

function SyncHtmlAttrs() {
  const { lang, dir } = useLanguage()
  const location = useLocation()
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

function PageTransition() {
  const location = useLocation()
  return (
    <>
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />
      <Route path="/:lang" element={<LangGate />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
    </Routes>
  )
}
