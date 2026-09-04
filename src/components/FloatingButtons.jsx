import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '../constants/data'
import { useScroll } from '../hooks/useScroll'
import CallModal from './ui/CallModal'

function isMobileDevice() {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

export default function FloatingButtons() {
  const { scrolled } = useScroll(400)
  const [callOpen, setCallOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCallClick = (e) => {
    if (isMobileDevice()) return
    e.preventDefault()
    setCallOpen(true)
  }

  return (
    <>
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">
        <AnimatePresence>
          {scrolled && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg hover:bg-secondary transition-colors"
              aria-label="Back to top"
            >
              <FaArrowUp size={14} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          href={`tel:+91${COMPANY.phones[0]}`}
          onClick={handleCallClick}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:bg-secondary transition-colors"
          aria-label="Call now"
        >
          <FaPhoneAlt size={16} />
        </motion.a>

        <motion.a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
            'Hi Aryan Advertising, I would like a free quote for signage.',
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/45 hover:bg-[#1ebe57] transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} />
        </motion.a>
      </div>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  )
}
