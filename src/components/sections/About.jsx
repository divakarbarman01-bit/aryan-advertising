import { motion } from 'framer-motion'
import { COMPANY, STATS } from '../../constants/data'
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants'
import Counter from '../ui/Counter'

const BRAND_BLUE = '#0136AE'

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0136AE]/70">
            Who We Are
          </span>
          <h2 id="about-heading" className="flex flex-col items-center leading-none">
            <span className="text-base sm:text-lg font-medium tracking-[0.25em] uppercase text-ink/50 mb-3">
              About
            </span>
            <span
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
              style={{ color: BRAND_BLUE }}
            >
              ARYAN
            </span>
            <span
              className="mt-2 text-sm sm:text-base lg:text-lg font-medium tracking-[0.35em] uppercase"
              style={{ color: BRAND_BLUE }}
            >
              Advertising
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-ink/60 mt-2">
            A trusted Goa-based partner for premium signage and complete branding solutions.
          </p>
          <div className="mt-1 h-1 w-16 rounded-full" style={{ backgroundColor: BRAND_BLUE }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 md:mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden p-[1px] shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${BRAND_BLUE}, #2563EB)`,
                boxShadow: '0 25px 50px -12px rgba(1, 54, 174, 0.2)',
              }}
            >
              <div className="rounded-[1.4rem] bg-white p-8 md:p-10">
                <div className="space-y-5 text-ink/70 leading-relaxed text-[15px] sm:text-base">
                  {COMPANY.about.map((para) => (
                    <p key={para.slice(0, 24)} className="font-normal tracking-wide">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Signage', 'Branding', 'LED Boards', 'ACP', 'Printing'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F0F4FC] px-4 py-1.5 text-xs font-semibold border border-[#0136AE]/15"
                      style={{ color: BRAND_BLUE }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  custom={stat.custom}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
