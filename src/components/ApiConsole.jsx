import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { services } from '../data/services'
import { profile } from '../data/profile'

const ConsoleContext = createContext(null)

export function ConsoleProvider({ children }) {
  const [open, setOpen] = useState(false)
  const value = useMemo(
    () => ({
      open,
      openConsole: () => setOpen(true),
      closeConsole: () => setOpen(false),
      toggleConsole: () => setOpen((v) => !v),
    }),
    [open],
  )
  return <ConsoleContext.Provider value={value}>{children}</ConsoleContext.Provider>
}

export function useConsole() {
  const ctx = useContext(ConsoleContext)
  if (!ctx) throw new Error('useConsole must be used inside ConsoleProvider')
  return ctx
}

// --- JSON rendering -------------------------------------------------------

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlightJson(value) {
  const json = escapeHtml(JSON.stringify(value, null, 2))
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = 'j-num'
      if (/^"/.test(match)) cls = /:$/.test(match) ? 'j-key' : 'j-str'
      else if (/true|false/.test(match)) cls = 'j-bool'
      else if (/null/.test(match)) cls = 'j-null'
      return `<span class="${cls}">${match}</span>`
    },
  )
}

// --- command handling ---------------------------------------------------

function normalize(raw) {
  return raw.trim().replace(/\s+/g, ' ')
}

export default function ApiConsole() {
  const { open, closeConsole, toggleConsole } = useConsole()
  const { lang, t, tx } = useLanguage()
  const navigate = useNavigate()

  const [log, setLog] = useState([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  const go = useCallbackSafe((path) => {
    closeConsole()
    navigate(`/${lang}/${path}`.replace(/\/+$/, ''))
  })

  // greet once per opening if empty
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60)
      if (log.length === 0) {
        setLog([{ type: 'note', text: t('console.welcome') }])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [log, open])

  // global keyboard: Ctrl/Cmd+K toggles, Esc closes
  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        toggleConsole()
      } else if (e.key === 'Escape' && open) {
        closeConsole()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, toggleConsole, closeConsole])

  function push(entry) {
    setLog((l) => [...l, entry])
  }

  function run(rawInput) {
    const cmd = normalize(rawInput)
    if (!cmd) return
    push({ type: 'in', text: cmd })
    setHistory((h) => [cmd, ...h].slice(0, 40))
    setHistIdx(-1)

    const lower = cmd.toLowerCase()
    const parts = lower.split(' ')
    const verb = parts[0]
    const path = (parts[1] || '').replace(/^\/+/, '').replace(/\/+$/, '')

    if (lower === 'help') {
      push({ type: 'help' })
      return
    }
    if (lower === 'clear') {
      setLog([])
      return
    }
    if (lower === 'whoami') {
      push({ type: 'out', text: t('console.whoami') })
      return
    }
    if (verb === 'open') {
      const target = path || 'projects'
      push({ type: 'route', text: `${t('console.routing')} /${target}`, to: target })
      go(target)
      return
    }

    if (verb === 'get' || verb === 'post') {
      // /about
      if (path === 'about') {
        push({
          type: 'json',
          data: {
            name: tx(profile.name),
            role: tx(profile.role),
            based: tx(profile.location),
            focus: 'backend, full-stack, enterprise systems',
            summary: t('about.intro').split('\n\n')[0],
          },
          to: 'about',
        })
        return
      }
      // /projects  and  /projects/:slug
      if (path === 'projects') {
        push({
          type: 'json',
          data: projects.map((p) => ({
            slug: p.slug,
            title: tx(p.title),
            private: !!p.private,
            stack: p.stack,
          })),
          to: 'projects',
        })
        return
      }
      if (path.startsWith('projects/')) {
        const slug = path.slice('projects/'.length)
        const p = projects.find((x) => x.slug === slug)
        if (!p) {
          push({ type: 'error', text: `404 — no project "${slug}"` })
          return
        }
        push({
          type: 'json',
          data: {
            slug: p.slug,
            title: tx(p.title),
            private: !!p.private,
            overview: tx(p.overview),
            problem: tx(p.problem),
            features: (p.features || []).map((f) => tx(f)),
            result: tx(p.result),
            stack: p.stack,
            links: p.links,
          },
          to: `projects/${p.slug}`,
        })
        return
      }
      // /services
      if (path === 'services') {
        push({
          type: 'json',
          data: services.map((s) => tx(s.title)),
        })
        return
      }
      // /skills  and  /skills/data
      if (path === 'skills') {
        push({
          type: 'json',
          data: Object.fromEntries(
            skills.map((g) => [g.key, g.items]),
          ),
          to: 'skills',
        })
        return
      }
      if (path === 'skills/data') {
        const g = skills.find((x) => x.key === 'database')
        push({ type: 'json', data: { database: g?.items ?? [] }, to: 'skills' })
        return
      }
      // /contact
      if (path === 'contact') {
        push({
          type: 'json',
          data: {
            email: profile.email,
            phone: profile.phoneDisplay,
            location: tx(profile.location),
            github: profile.links.github,
            linkedin: profile.links.linkedin,
            website: profile.links.website,
          },
          to: 'contact',
        })
        return
      }
    }

    push({ type: 'error', text: `${t('console.notFound')}: ${cmd} — ${t('console.tryHelp')}` })
  }

  function onSubmit(e) {
    e.preventDefault()
    run(input)
    setInput('')
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      if (history[next] != null) {
        setHistIdx(next)
        setInput(history[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) {
        setHistIdx(-1)
        setInput('')
      } else {
        setHistIdx(next)
        setInput(history[next] ?? '')
      }
    }
  }

  const commands = t('console.commands')

  return (
    <>
      <div
        className={`console-scrim${open ? ' is-open' : ''}`}
        onClick={closeConsole}
        aria-hidden={!open}
      />
      <section
        className={`console${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('console.title')}
        aria-hidden={!open}
      >
        <header className="console-head">
          <div>
            <h2 className="console-title">
              <span className="console-method">API</span> {t('console.title')}
            </h2>
            <p className="console-sub">{t('console.subtitle')}</p>
          </div>
          <button type="button" className="console-close" onClick={closeConsole}>
            <span className="console-kbd">{t('console.toggleHint')}</span>
            <span>{t('console.close')} ✕</span>
          </button>
        </header>

        <div className="console-log" ref={scrollRef}>
          {log.map((entry, i) => (
            <ConsoleEntry key={i} entry={entry} commands={commands} onGo={go} />
          ))}
        </div>

        <form className="console-input" onSubmit={onSubmit}>
          <span className="console-prompt">{t('console.prompt')} $</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t('console.placeholder')}
            spellCheck="false"
            autoComplete="off"
            dir="ltr"
          />
        </form>
      </section>
    </>
  )
}

function ConsoleEntry({ entry, commands, onGo }) {
  const { t } = useLanguage()

  if (entry.type === 'in') {
    return (
      <div className="ce ce-in">
        <span className="ce-caret">›</span> {entry.text}
      </div>
    )
  }
  if (entry.type === 'note') {
    return <div className="ce ce-note">{entry.text}</div>
  }
  if (entry.type === 'out') {
    return <div className="ce ce-out">{entry.text}</div>
  }
  if (entry.type === 'error') {
    return <div className="ce ce-error">{entry.text}</div>
  }
  if (entry.type === 'route') {
    return <div className="ce ce-note">{entry.text} …</div>
  }
  if (entry.type === 'help') {
    return (
      <div className="ce ce-help">
        <div className="ce-help-title">{t('console.helpTitle')}</div>
        <ul>
          {Object.entries(commands).map(([name, desc]) => (
            <li key={name}>
              <code>{name}</code>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  if (entry.type === 'json') {
    return (
      <div className="ce ce-json">
        <pre dangerouslySetInnerHTML={{ __html: highlightJson(entry.data) }} />
        {entry.to && (
          <button type="button" className="ce-render" onClick={() => onGo(entry.to)}>
            render /{entry.to} →
          </button>
        )}
      </div>
    )
  }
  return null
}

// Small helper so we don't crash if React version lacks a named export shape.
function useCallbackSafe(fn) {
  const ref = useRef(fn)
  ref.current = fn
  return useMemo(() => (...args) => ref.current(...args), [])
}
