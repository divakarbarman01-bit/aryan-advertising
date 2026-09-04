import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '../../constants/data'
import { fadeInLeft, fadeInRight, viewportOnce } from '../../animations/variants'
import Button from '../ui/Button'
import CallButton from '../ui/CallButton'
import HeroIllustration from './HeroIllustration'
import logoMark from '../../assets/logo-mark-clean.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-[#E8EEF9]" />
      <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-primary/10 via-accent/5 to-transparent rounded-bl-[40%] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-[50%] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <div
            className="relative h-16 w-16 sm:h-20 sm:w-20 mb-4 drop-shadow-md overflow-visible"
            aria-hidden="true"
          >
            <motion.div
              initial={{ x: -72, opacity: 0, scale: 0.92 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            >
              <img
                src={logoMark}
                alt=""
                width={120}
                height={120}
                className="h-full w-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ x: 72, opacity: 0, scale: 0.92 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ clipPath: 'inset(0 0 0 50%)' }}
            >
              <img
                src={logoMark}
                alt=""
                width={120}
                height={120}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center leading-none"
          >
            <span
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
              style={{ color: '#0136AE' }}
            >
              ARYAN
            </span>
            <span
              className="mt-1.5 text-sm sm:text-base lg:text-lg font-medium tracking-[0.35em] uppercase"
              style={{ color: '#0136AE' }}
            >
              Advertising
            </span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <p className="text-lg sm:text-xl font-semibold text-primary">
              {COMPANY.tagline}
            </p>

            <p className="text-ink/60 text-base sm:text-lg leading-relaxed max-w-xl">
              {COMPANY.description}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <CallButton size="lg" />
              <Button
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                  'Hi Aryan Advertising, I would like to know more about your signage services.',
                )}`}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 text-sm text-ink/50">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Premium Materials
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Pan-Goa Service
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
