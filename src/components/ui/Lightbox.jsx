import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PROJECT_GALLERIES } from '../../constants/data'

export default function Lightbox({ project, onClose, galleryImages = {} }) {
  const galleryId = project?.galleryId
  const items = galleryId ? PROJECT_GALLERIES[galleryId] || [] : []
  const isGallery = items.length > 0
  const [index, setIndex] = useState(project?.galleryIndex ?? 0)

  useEffect(() => {
    if (isGallery) {
      setIndex(project.galleryIndex ?? 0)
    }
  }, [project, isGallery])

  useEffect(() => {
    if (!project) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (!isGallery) return
      if (e.key === 'ArrowLeft') {
        setIndex((i) => (i - 1 + items.length) % items.length)
      }
      if (e.key === 'ArrowRight') {
        setIndex((i) => (i + 1) % items.length)
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose, isGallery, items.length])

  if (!project) return null

  const current = isGallery ? items[index] : null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} preview`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-auto max-w-[min(96vw,56rem)] max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-md hover:bg-white transition-colors"
            aria-label="Close lightbox"
          >
            <IoClose size={22} />
          </button>

          {isGallery ? (
            <div className="relative bg-[#F0F4FC] flex items-center justify-center px-12 py-10 min-h-[12rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.src}
                  src={galleryImages[current.src]}
                  alt={current.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block w-auto h-auto max-w-[min(90vw,48rem)] max-h-[70vh] object-contain"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % items.length)}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight size={14} />
              </button>

              <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex gap-2 max-w-[90%] flex-wrap justify-center">
                {items.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/60'
                    }`}
                    aria-label={`Go to ${item.label}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="h-64 sm:h-80 md:h-96 bg-gradient-to-br from-secondary via-primary to-accent flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white blur-2xl" />
                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
              </div>
              <div className="relative text-center text-white px-6">
                <p className="text-sm font-medium tracking-widest uppercase opacity-80 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
              </div>
            </div>
          )}

          <div className="p-5 md:p-6 shrink-0">
            <h3 className="text-xl font-bold text-ink mb-2">{project.title}</h3>
            {isGallery ? (
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                <span className="font-semibold text-primary">{current.label}</span>
                {' — '}
                Premium {project.category.toLowerCase()} by Aryan Advertising — designed,
                manufactured and installed with professional finishing across Goa.
              </p>
            ) : (
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                Premium {project.category.toLowerCase()} project by Aryan Advertising —
                designed, manufactured and installed with professional finishing across Goa.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
