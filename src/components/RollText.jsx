// Text that rolls up to an identical copy on hover (pure CSS, see .roll).
export default function RollText({ children }) {
  return (
    <span className="roll">
      <span className="roll-a">{children}</span>
      <span className="roll-b" aria-hidden="true">{children}</span>
    </span>
  )
}
