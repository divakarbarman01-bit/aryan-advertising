import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineZoomIn } from 'react-icons/hi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PROJECT_GALLERIES, PROJECTS } from '../../constants/data'
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants'
import SectionHeading from '../ui/SectionHeading'
import Lightbox from '../ui/Lightbox'
import yesBank from '../../assets/projects/yes-bank-1.png'
import hdfcBank from '../../assets/projects/hdfc-bank.png'
import tjsbBank from '../../assets/projects/tjsb-bank.png'
import bandhanBank from '../../assets/projects/bandhan-bank.png'
import backlitCashnshop from '../../assets/projects/backlit-cashnshop.png'
import backlitRbl from '../../assets/projects/backlit-rbl-bank.png'
import backlitHdfcAtm from '../../assets/projects/backlit-hdfc-atm.png'
import backlitAxis from '../../assets/projects/backlit-axis-1.png'
import backlitTjsb from '../../assets/projects/backlit-tjsb.png'
import vsbBoschDesk from '../../assets/projects/vsb-bosch-desk.png'
import vsbBoschWall from '../../assets/projects/vsb-bosch-wall.png'
import vsbAromaHallway from '../../assets/projects/vsb-aroma-hallway.png'
import vsbAromaReception from '../../assets/projects/vsb-aroma-reception.png'
import vsbCetaphil from '../../assets/projects/vsb-cetaphil.png'
import officeMelange from '../../assets/projects/office-melange.png'
import officeGoalsWall from '../../assets/projects/office-goals-wall.png'
import officeViHello from '../../assets/projects/office-vi-hello.png'
import officeBlondme from '../../assets/projects/office-blondme.png'
import officePolicyboss from '../../assets/projects/office-policyboss.png'
import lollypopJana from '../../assets/projects/lollypop-jana-atm.png'
import lollypopHdfc from '../../assets/projects/lollypop-hdfc-atm.png'
import lollypopEps from '../../assets/projects/lollypop-eps-atm.png'
import owvLoreal from '../../assets/projects/owv-loreal.png'
import owvCetaphil from '../../assets/projects/owv-cetaphil.png'
import owvAromaFacials from '../../assets/projects/owv-aroma-facials.png'
import owvAromaSalon from '../../assets/projects/owv-aroma-salon.png'
import fanAtomberg1 from '../../assets/projects/fan-atomberg-1.png'
import fanAtomberg2 from '../../assets/projects/fan-atomberg-2.png'
import fanAtomberg3 from '../../assets/projects/fan-atomberg-3.png'
import liquor1 from '../../assets/projects/liquor-1.png'
import liquor2 from '../../assets/projects/liquor-2.png'
import liquor3 from '../../assets/projects/liquor-3.png'
import liquor4 from '../../assets/projects/liquor-4.png'
import liquor5 from '../../assets/projects/liquor-5.png'
import liquor6 from '../../assets/projects/liquor-6.png'
import pharmacyGlow1 from '../../assets/projects/pharmacy-glow-1.png'
import pharmacyGlow2 from '../../assets/projects/pharmacy-glow-2.png'
import otherFlange5g1 from '../../assets/projects/other-flange-5g-1.png'
import otherFlange5g2 from '../../assets/projects/other-flange-5g-2.png'
import otherEventCampaign from '../../assets/projects/other-event-campaign.png'
import otherRestaurantMenu from '../../assets/projects/other-restaurant-menu.png'
import otherGlowingAcrylic from '../../assets/projects/other-glowing-acrylic.png'

const GALLERY_IMAGES = {
  'yes-bank': yesBank,
  'hdfc-bank': hdfcBank,
  'tjsb-bank': tjsbBank,
  'bandhan-bank': bandhanBank,
  'backlit-cashnshop': backlitCashnshop,
  'backlit-rbl-bank': backlitRbl,
  'backlit-hdfc-atm': backlitHdfcAtm,
  'backlit-axis': backlitAxis,
  'backlit-tjsb': backlitTjsb,
  'vsb-bosch-desk': vsbBoschDesk,
  'vsb-bosch-wall': vsbBoschWall,
  'vsb-aroma-hallway': vsbAromaHallway,
  'vsb-aroma-reception': vsbAromaReception,
  'vsb-cetaphil': vsbCetaphil,
  'office-melange': officeMelange,
  'office-goals-wall': officeGoalsWall,
  'office-vi-hello': officeViHello,
  'office-blondme': officeBlondme,
  'office-policyboss': officePolicyboss,
  'lollypop-jana-atm': lollypopJana,
  'lollypop-hdfc-atm': lollypopHdfc,
  'lollypop-eps-atm': lollypopEps,
  'owv-loreal': owvLoreal,
  'owv-cetaphil': owvCetaphil,
  'owv-aroma-facials': owvAromaFacials,
  'owv-aroma-salon': owvAromaSalon,
  'fan-atomberg-1': fanAtomberg1,
  'fan-atomberg-2': fanAtomberg2,
  'fan-atomberg-3': fanAtomberg3,
  'liquor-1': liquor1,
  'liquor-2': liquor2,
  'liquor-3': liquor3,
  'liquor-4': liquor4,
  'liquor-5': liquor5,
  'liquor-6': liquor6,
  'pharmacy-glow-1': pharmacyGlow1,
  'pharmacy-glow-2': pharmacyGlow2,
  'other-flange-5g-1': otherFlange5g1,
  'other-flange-5g-2': otherFlange5g2,
  'other-event-campaign': otherEventCampaign,
  'other-restaurant-menu': otherRestaurantMenu,
  'other-glowing-acrylic': otherGlowingAcrylic,
}

function GalleryCard({ project, onOpen, className = '' }) {
  const items = PROJECT_GALLERIES[project.galleryId] || []
  const [index, setIndex] = useState(0)
  const current = items[index]

  useEffect(() => {
    if (items.length < 2) return undefined
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [items.length])

  if (!current) {
    return (
      <motion.div
        variants={fadeInUp}
        className={`group relative h-full min-h-[16rem] w-full rounded-2xl overflow-hidden shadow-md shadow-primary/10 ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-6 left-6 h-24 w-24 rounded-full bg-white blur-2xl" />
          <div className="absolute bottom-4 right-4 h-32 w-32 rounded-full bg-white/60 blur-3xl" />
        </div>
        <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent text-left">
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
            {project.category}
          </p>
          <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
            {project.title}
          </h3>
        </div>
      </motion.div>
    )
  }

  const prev = (e) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + items.length) % items.length)
  }

  const next = (e) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % items.length)
  }

  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative h-full min-h-[16rem] w-full rounded-2xl overflow-hidden shadow-md shadow-primary/10 bg-ink/5 ${className}`}
    >
      <button
        type="button"
        onClick={() =>
          onOpen({
            ...project,
            galleryIndex: index,
          })
        }
        className="absolute inset-0 z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-label={`View ${project.title} gallery`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={GALLERY_IMAGES[current.src]}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg">
            <HiOutlineZoomIn size={22} />
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent text-left">
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
            {project.category}
          </p>
          <h3 className="text-white font-semibold text-base md:text-lg">{project.title}</h3>
          <p className="text-white/80 text-xs mt-1">{current.label}</p>
        </div>
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-white transition-colors"
            aria-label={`Previous ${project.title} image`}
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-white transition-colors"
            aria-label={`Next ${project.title} image`}
          >
            <FaChevronRight size={12} />
          </button>

          <div className="absolute top-3 left-1/2 z-10 -translate-x-1/2 flex gap-1.5 max-w-[80%] flex-wrap justify-center">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex(i)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Show ${item.label}`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section-padding bg-surface" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent Projects"
          subtitle="A glimpse of the premium signage and branding work we deliver across Goa."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px] md:auto-rows-[300px]"
        >
          {PROJECTS.map((project) => (
            <GalleryCard
              key={project.id}
              project={project}
              onOpen={setActive}
              className={
                project.featured
                  ? 'sm:col-span-2 lg:col-span-3 sm:row-span-2 min-h-[280px] sm:min-h-0'
                  : ''
              }
            />
          ))}
        </motion.div>
      </div>

      <Lightbox
        project={active}
        onClose={() => setActive(null)}
        galleryImages={GALLERY_IMAGES}
      />
    </section>
  )
}
