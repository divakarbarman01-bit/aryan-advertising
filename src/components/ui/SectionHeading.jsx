import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../animations/variants'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <span
          className={`text-sm font-semibold tracking-widest uppercase ${
            light ? 'text-white/80' : 'text-accent'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-ink/60'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  )
}
