import { motion } from 'framer-motion'
import logoImg from '../assets/logo-clean.png'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative">
          <motion.img
            src={logoImg}
            alt="Aryan Advertising"
            className="h-20 w-20 rounded-full object-contain shadow-xl shadow-primary/20"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-primary/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <div className="text-center">
          <p className="text-ink font-bold tracking-wide">ARYAN ADVERTISING</p>
          <p className="text-ink/50 text-sm mt-1">Loading experience…</p>
        </div>
        <motion.div
          className="h-1 w-40 rounded-full bg-surface overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
