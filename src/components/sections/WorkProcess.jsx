import { motion } from 'framer-motion'
import {
  HiOutlineChatAlt2,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineClipboardCheck,
  HiOutlineSupport,
} from 'react-icons/hi'
import { PROCESS_STEPS } from '../../constants/data'
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants'
import SectionHeading from '../ui/SectionHeading'

const ICONS = [
  HiOutlineChatAlt2,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineClipboardCheck,
  HiOutlineSupport,
]

export default function WorkProcess() {
  return (
    <section id="process" className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Work Process"
          subtitle="A clear, collaborative process from first consultation to lasting support."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4"
        >
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-secondary via-primary to-accent"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICONS[index]
            return (
              <motion.li
                key={step.step}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-5 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/25">
                  <Icon size={22} className="mb-1 opacity-90" aria-hidden="true" />
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="lg:hidden my-2 text-primary/40 text-2xl font-light"
                    aria-hidden="true"
                  >
                    ↓
                  </div>
                )}

                <h3 className="text-lg font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
