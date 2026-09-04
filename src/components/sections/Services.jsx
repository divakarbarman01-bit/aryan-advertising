import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { SERVICES } from '../../constants/data'
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants'
import SectionHeading from '../ui/SectionHeading'
import SERVICE_VECTORS from './ServiceVectors'
import oneWayVisionAroma from '../../assets/services/one-way-vision-aroma.png'
import backlitFlexTjsb from '../../assets/services/backlit-flex-tjsb.png'
import acpAtomberg from '../../assets/services/acp-atomberg.png'
import vinylAroma from '../../assets/services/vinyl-aroma.png'
import frontlitAsianPaints from '../../assets/services/frontlit-asian-paints.png'
import flange5g from '../../assets/services/flange-5g.png'
import officeMelange from '../../assets/services/office-melange.png'

const SERVICE_IMAGES = {
  'ACP Sign Boards': {
    src: acpAtomberg,
    alt: 'Atomberg ACP sign board at Light House, Chinchinim by Aryan Advertising',
  },
  'Frontlit Flex Boards': {
    src: frontlitAsianPaints,
    alt: 'Asian Paints frontlit flex board at Prakash Tiles Traders by Aryan Advertising',
  },
  'One Way Vision Printing': {
    src: oneWayVisionAroma,
    alt: 'Aroma Treasures Facials one way vision printing on glass door by Aryan Advertising',
  },
  'Backlit Flex Boards': {
    src: backlitFlexTjsb,
    alt: 'TJSB Sahakari Bank backlit flex board signage by Aryan Advertising',
  },
  Vinyl: {
    src: vinylAroma,
    alt: 'Aroma Treasures vinyl branding panels in salon corridor by Aryan Advertising',
  },
  'Office Branding': {
    src: officeMelange,
    alt: 'Mélange Digital office branding wall and door wrap by Aryan Advertising',
  },
  'Flange Sign Boards': {
    src: flange5g,
    alt: 'Circular 5G flange sign board by Aryan Advertising',
  },
}

function ServiceImagePreview({ preview, onClose }) {
  useEffect(() => {
    if (!preview) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [preview, onClose])

  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} full image`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-[96vw] max-h-[92vh] rounded-2xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-md hover:bg-white transition-colors"
              aria-label="Close full image"
            >
              <IoClose size={22} />
            </button>
            <div className="bg-[#F0F4FC] flex items-center justify-center p-4 sm:p-6">
              <img
                src={preview.src}
                alt={preview.alt}
                className="block max-w-[min(92vw,72rem)] max-h-[78vh] w-auto h-auto object-contain"
              />
            </div>
            <p className="px-5 py-4 text-center text-base font-semibold text-ink">
              {preview.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Services() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="services" className="section-padding bg-surface" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl w-full">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="End-to-end branding and signage services crafted for businesses across Goa."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Vector = SERVICE_VECTORS[service.title]
            const image = SERVICE_IMAGES[service.title]

            if (image) {
              return (
                <motion.article
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl shadow-md shadow-primary/10 border border-primary/5 hover:shadow-xl hover:shadow-primary/15 transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({
                        title: service.title,
                        src: image.src,
                        alt: image.alt,
                      })
                    }
                    className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                    aria-label={`View full ${service.title} image`}
                  >
                    <FaPlus size={14} />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                    <h3 className="service-heading-shine text-base sm:text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <span className="service-heading-line mx-auto mt-2 block h-0.5 w-12 rounded-full bg-white/90" />
                  </div>
                </motion.article>
              )
            }

            return (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group flex w-full flex-col items-center rounded-2xl bg-white px-5 pt-6 pb-5 shadow-md shadow-primary/5 border border-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/15 transition-shadow duration-300"
              >
                <h3 className="service-heading-shine text-center text-base sm:text-lg font-semibold text-ink mb-2 group-hover:text-primary">
                  {service.title}
                </h3>
                <span className="service-heading-line mb-4 block h-0.5 w-10 rounded-full bg-primary" />
                <div
                  className={`flex w-full items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                    service.title === 'Custom Signage'
                      ? 'h-36 max-w-[220px]'
                      : 'h-28 max-w-[180px]'
                  }`}
                >
                  {Vector ? <Vector /> : null}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <ServiceImagePreview preview={preview} onClose={() => setPreview(null)} />
    </section>
  )
}
