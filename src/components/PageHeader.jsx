import SplitWords from './SplitWords'

// Shared page intro: eyebrow, big animated title, optional lead and extras.
export default function PageHeader({ eyebrow, title, lead, children, className = '' }) {
  return (
    <header className={`page-head container ${className}`}>
      {eyebrow && <span className="eyebrow fade-in">{eyebrow}</span>}
      <SplitWords as="h1" className="page-title" text={title} immediate delay={120} />
      {lead && <p className="page-lead fade-in" style={{ animationDelay: '380ms' }}>{lead}</p>}
      {children}
    </header>
  )
}
