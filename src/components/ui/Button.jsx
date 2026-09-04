import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
  secondary:
    'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-md',
  accent:
    'bg-accent text-white hover:bg-secondary shadow-lg shadow-accent/25',
  ghost:
    'bg-transparent text-primary border border-primary/20 hover:bg-primary/5',
  outline:
    'bg-white/10 text-white border border-white/40 hover:bg-white hover:text-primary backdrop-blur-sm',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/40',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </motion.button>
  )
}
