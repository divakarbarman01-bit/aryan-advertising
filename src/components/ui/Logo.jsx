import logoImg from '../../assets/logo-clean.png'

export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'h-10 w-10 sm:h-11 sm:w-11',
    md: 'h-16 w-16 sm:h-20 sm:w-20',
    lg: 'h-24 w-24 sm:h-28 sm:w-28',
  }

  return (
    <a
      href="#home"
      className={`inline-flex items-center group shrink-0 ${className}`}
      aria-label="Aryan Advertising Home"
    >
      <img
        src={logoImg}
        alt="Aryan Advertising"
        width={120}
        height={120}
        className={`${sizes[size]} rounded-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300`}
      />
    </a>
  )
}
