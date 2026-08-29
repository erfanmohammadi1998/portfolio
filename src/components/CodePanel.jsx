import { useEffect, useRef, useState } from 'react'

// A small editor window that types out real backend code, one snippet after
// another. On brand with the terminal / API-console aesthetic.

const SNIPPETS = [
  {
    name: 'api/views.py',
    code: `class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        qs = Ticket.objects.select_related("owner")
        if self.request.user.is_agent:
            return qs
        return qs.filter(owner=self.request.user)`,
  },
  {
    name: 'assets/models.py',
    code: `class Asset(models.Model):
    name = models.CharField(max_length=200)
    book_value = models.DecimalField(max_digits=14, decimal_places=2)
    market_value = models.DecimalField(null=True, blank=True)

    @property
    def value_gap(self):
        return self.market_value - self.book_value`,
  },
  {
    name: 'candidates/serializers.py',
    code: `class CandidateSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(many=True, read_only=True)

    class Meta:
        model = Candidate
        fields = ["id", "name", "email", "experiences"]`,
  },
]

const KEYWORDS =
  'class|def|return|if|elif|else|for|while|in|not|and|or|import|from|as|with|lambda|yield|pass|raise|try|except|finally|None|True|False|self'

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlight(src) {
  const html = escapeHtml(src)
  return html.replace(
    new RegExp(
      `(#[^\\n]*)|("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')|(@[\\w.]+)|\\b(${KEYWORDS})\\b|\\b(\\d+(?:\\.\\d+)?)\\b`,
      'g',
    ),
    (m, comment, str, deco, kw, num) => {
      if (comment) return `<span class="cp-c">${comment}</span>`
      if (str) return `<span class="cp-s">${str}</span>`
      if (deco) return `<span class="cp-d">${deco}</span>`
      if (kw) return `<span class="cp-k">${kw}</span>`
      if (num) return `<span class="cp-n">${num}</span>`
      return m
    },
  )
}

export default function CodePanel() {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [idx, setIdx] = useState(0)
  const [count, setCount] = useState(reduce ? SNIPPETS[0].code.length : 0)
  const stateRef = useRef({ idx: 0, count: 0, phase: 'type' })

  useEffect(() => {
    if (reduce) return
    let raf
    let last = performance.now()
    const s = stateRef.current

    function tick(now) {
      const dt = now - last
      const full = SNIPPETS[s.idx].code
      const step = s.phase === 'type' ? 26 : s.phase === 'erase' ? 12 : 0

      if (s.phase === 'hold') {
        if (dt > 1900) {
          s.phase = 'erase'
          last = now
        }
      } else if (dt > step) {
        last = now
        if (s.phase === 'type') {
          s.count = Math.min(full.length, s.count + 1)
          if (s.count === full.length) s.phase = 'hold'
        } else {
          s.count = Math.max(0, s.count - 3)
          if (s.count === 0) {
            s.idx = (s.idx + 1) % SNIPPETS.length
            s.phase = 'type'
          }
        }
        setIdx(s.idx)
        setCount(s.count)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  const snippet = SNIPPETS[idx]
  const visible = snippet.code.slice(0, count)
  const lineCount = visible.split('\n').length

  return (
    <div className="code-panel" dir="ltr" aria-hidden="true">
      <div className="code-panel-bar">
        <span className="code-panel-dot" />
        <span className="code-panel-dot" />
        <span className="code-panel-dot" />
        <span className="code-panel-name">{snippet.name}</span>
      </div>
      <div className="code-panel-body">
        <div className="code-panel-gutter">
          {Array.from({ length: lineCount }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="code-panel-code">
          <code dangerouslySetInnerHTML={{ __html: highlight(visible) }} />
          {!reduce && <span className="code-panel-caret" />}
        </pre>
      </div>
    </div>
  )
}
