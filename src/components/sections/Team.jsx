import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../animations/variants'
import SectionHeading from '../ui/SectionHeading'
import teamRbl from '../../assets/team/team-rbl-scaffold.png'
import teamBanner from '../../assets/team/team-banner.png'
import teamHdfc from '../../assets/team/team-hdfc-crane.png'
import teamLed from '../../assets/team/team-led-frames.png'

const TEAM_PHOTOS = [
  {
    src: teamRbl,
    alt: 'Aryan Advertising team installing RBL Bank signage in Panjim',
    label: 'On-site Installation',
  },
  {
    src: teamBanner,
    alt: 'Aryan Advertising team presenting a large format flex banner',
    label: 'Flex Banner Production',
  },
  {
    src: teamHdfc,
    alt: 'Aryan Advertising team installing HDFC Bank facade signage with crane',
    label: 'Large-Scale Signage',
  },
  {
    src: teamLed,
    alt: 'LED backlit sign frames prepared by Aryan Advertising team',
    label: 'Precision Fabrication',
  },
]

function TeamCard({ photo }) {
  return (
    <article className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-[360px] sm:h-[400px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl shadow-primary/15 border border-white/40 group">
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-5">
        <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
          {photo.label}
        </p>
        <p className="text-white/70 text-xs mt-1">Aryan Advertising Team</p>
      </div>
    </article>
  )
}

export default function Team() {
  const loopPhotos = [...TEAM_PHOTOS, ...TEAM_PHOTOS]

  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden bg-white"
      aria-labelledby="team-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[45%] h-[50%] bg-gradient-to-bl from-primary/8 via-accent/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-secondary/8 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl mb-10 md:mb-14">
        <SectionHeading
          eyebrow="Behind The Brand"
          title="Our Experienced and Hardworking Team"
          subtitle="Skilled installers, fabricators and designers delivering premium signage across Goa — with precision, safety and pride."
        />
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden py-2">
          <div className="team-marquee flex w-max gap-5 md:gap-6 hover:[animation-play-state:paused]">
            {loopPhotos.map((photo, i) => (
              <TeamCard key={`${photo.label}-${i}`} photo={photo} />
            ))}
          </div>
        </div>
      </motion.div>

      <p className="relative mt-8 text-center text-sm text-ink/45">
        Hover to pause · Real projects · Real craftsmanship
      </p>
    </section>
  )
}
