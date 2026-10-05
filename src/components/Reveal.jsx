import { useEffect, useRef, useState } from 'react'

// Fades / slides children in the first time they scroll into view.
// variant: 'up' (default) | 'fade' | 'scale' | 'clip'
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}

export default function Reveal({ children, className = '', delay = 0, variant = 'up', as: Tag = 'div', style, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${inView ? ' is-in' : ''} ${className}`}
      style={{ '--delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
