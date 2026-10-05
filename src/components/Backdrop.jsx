// Fixed, page-wide atmosphere: slow drifting colour fields and film grain.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-blob b1" />
      <div className="backdrop-blob b2" />
      <div className="backdrop-blob b3" />
      <div className="backdrop-grain" />
    </div>
  )
}
