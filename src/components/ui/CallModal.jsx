import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { QRCodeSVG } from 'qrcode.react'
import { COMPANY } from '../../constants/data'

export default function CallModal({ open, onClose }) {
  const primaryPhone = COMPANY.phones[0]
  const telUri = `tel:+91${primaryPhone}`

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Call Aryan Advertising"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink hover:bg-primary/10 transition-colors"
              aria-label="Close"
            >
              <IoClose size={22} />
            </button>

            <div className="text-center mb-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                <FaPhoneAlt size={18} />
              </div>
              <h3 className="text-xl font-bold text-ink">Call Aryan Advertising</h3>
              <p className="text-sm text-ink/55 mt-1">Scan the QR code from your phone to call</p>
            </div>

            <div className="rounded-2xl bg-surface border border-primary/10 p-4 mb-6 space-y-2">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="flex items-center justify-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-colors"
                >
                  <FaPhoneAlt size={14} />
                  {phone}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-white p-4 border border-primary/10 shadow-inner">
                <QRCodeSVG
                  value={telUri}
                  size={180}
                  level="M"
                  includeMargin={false}
                  fgColor="#0136AE"
                  bgColor="#FFFFFF"
                />
              </div>
              <p className="text-xs text-ink/50 text-center max-w-[240px]">
                Open your phone camera, scan this code, and tap to call.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
