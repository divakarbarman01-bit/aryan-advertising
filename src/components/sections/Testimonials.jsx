import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { TESTIMONIALS } from '../../constants/data'
import { viewportOnce } from '../../animations/variants'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const current = TESTIMONIALS[index]

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-accent"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="Client Love"
          title="Testimonials"
          subtitle="What our clients across Goa say about working with Aryan Advertising."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative rounded-3xl bg-white/95 backdrop-blur-md p-8 md:p-12 shadow-2xl min-h-[280px] flex flex-col justify-between">
            <FaQuoteLeft className="text-primary/15 text-5xl mb-4" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex gap-1 mb-4" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} className="text-accent" size={16} />
                  ))}
                </div>
                <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
                  &ldquo;{current.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-ink text-lg">{current.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft size={12} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
