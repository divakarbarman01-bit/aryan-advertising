import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY, NAV_LINKS } from '../../constants/data'
import { useScroll } from '../../hooks/useScroll'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

const whatsappHref = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  'Hi Aryan Advertising, I would like to know more about your signage services.',
)}`

export default function Navbar() {
  const { scrolled } = useScroll(40)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20"
        aria-label="Primary"
      >
        <Logo size="sm" />

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-ink/80' : 'text-ink/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href={whatsappHref}
            size="sm"
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-surface transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-primary/5"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 text-ink font-medium hover:bg-surface hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={whatsappHref}
                  className="w-full"
                  variant="whatsapp"
                  onClick={handleNavClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
