import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { lockScroll } from '../smooth'
import Icon from './Icon'

// Full-screen image viewer: arrows / Esc on keyboard, swipe on touch,
// thumbnails along the bottom.
export default function Lightbox({ images, index, onChange, onClose, alt = '' }) {
  const { t, dir, num } = useLanguage()
  const touch = useRef(null)
  const count = images.length

  const go = useCallback((step) => onChange((index + step + count) % count), [index, count, onChange])

  useEffect(() => {
    lockScroll(true)
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      // In RTL the "next" arrow points left.
      if (e.key === 'ArrowRight') go(dir === 'rtl' ? -1 : 1)
      if (e.key === 'ArrowLeft') go(dir === 'rtl' ? 1 : -1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [go, onClose, dir])

  function onTouchStart(e) {
    touch.current = e.touches[0].clientX
  }
  function onTouchEnd(e) {
    if (touch.current == null) return
    const dx = e.changedTouches[0].clientX - touch.current
    touch.current = null
    if (Math.abs(dx) < 40) return
    const forward = dir === 'rtl' ? dx > 0 : dx < 0
    go(forward ? 1 : -1)
  }

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="lightbox-top" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-count">{num(index + 1)} / {num(count)}</span>
        <button type="button" className="icon-btn" onClick={onClose} aria-label={t('lightbox.close')}>
          <Icon name="close" size={20} />
        </button>
      </div>

      <figure className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <img key={images[index]} src={images[index]} alt={alt} />
      </figure>

      {count > 1 && (
        <>
          <button type="button" className="lightbox-nav is-prev" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label={t('lightbox.prev')}>
            <Icon name="chevronLeft" size={24} className="flip-rtl" />
          </button>
          <button type="button" className="lightbox-nav is-next" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label={t('lightbox.next')}>
            <Icon name="chevronRight" size={24} className="flip-rtl" />
          </button>
          <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
            {images.map((src, i) => (
              <button type="button" key={src} className={i === index ? 'is-active' : ''} onClick={() => onChange(i)}>
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>,
    document.body,
  )
}
