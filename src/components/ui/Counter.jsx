import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

export default function Counter({ value, suffix = '', label, custom }) {
  const { count, ref } = useCountUp(custom ? 0 : value, 2000)

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-6 md:p-8 shadow-lg shadow-primary/5 border border-primary/5 text-center"
    >
      <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0136AE' }}>
        {custom ? custom : `${count}${suffix}`}
      </div>
      <p className="text-sm md:text-base text-ink/60 font-medium">{label}</p>
    </motion.div>
  )
}
