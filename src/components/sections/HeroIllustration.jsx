import { motion } from 'framer-motion'

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none aspect-square lg:aspect-[4/3]">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 520 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="boardGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0F3E9D" />
              <stop offset="100%" stopColor="#1F4FBF" />
            </linearGradient>
            <linearGradient id="ledGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1F4FBF" />
            </linearGradient>
            <linearGradient id="flexGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1F4FBF" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1F4FBF" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background storefront */}
          <rect x="40" y="80" width="280" height="260" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="60" y="110" width="240" height="140" rx="8" fill="#E8EEF9" />
          <rect x="60" y="270" width="100" height="50" rx="6" fill="#CBD5E1" />
          <rect x="180" y="270" width="120" height="50" rx="6" fill="#94A3B8" />

          {/* Main LED board */}
          <g filter="url(#softShadow)">
            <rect x="70" y="40" width="220" height="70" rx="10" fill="url(#ledGrad)" />
            <rect x="82" y="52" width="196" height="46" rx="6" fill="#0F3E9D" opacity="0.5" />
            <text x="180" y="82" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize="18" fontWeight="700">
              LED SIGNAGE
            </text>
          </g>

          {/* Glow dots on LED */}
          <circle cx="95" cy="58" r="3" fill="white" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="265" cy="58" r="3" fill="white" opacity="0.8">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* ACP board floating */}
          <g filter="url(#softShadow)">
            <rect x="300" y="100" width="180" height="100" rx="12" fill="url(#boardGrad)" transform="rotate(6 390 150)" />
            <text x="390" y="145" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="600" transform="rotate(6 390 150)">
              ACP BOARDS
            </text>
            <text x="390" y="168" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize="10" opacity="0.8" transform="rotate(6 390 150)">
              Premium Finish
            </text>
          </g>

          {/* Flex banner */}
          <g filter="url(#softShadow)">
            <rect x="280" y="240" width="200" height="80" rx="10" fill="url(#flexGrad)" transform="rotate(-4 380 280)" />
            <text x="380" y="275" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize="13" fontWeight="600" transform="rotate(-4 380 280)">
              FLEX BANNERS
            </text>
            <text x="380" y="295" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize="10" opacity="0.85" transform="rotate(-4 380 280)">
              Large Format Print
            </text>
          </g>

          {/* Installation person silhouette hint */}
          <circle cx="120" cy="340" r="14" fill="#1F4FBF" opacity="0.3" />
          <rect x="112" y="354" width="16" height="28" rx="6" fill="#1F4FBF" opacity="0.3" />

          {/* Ladder hint */}
          <line x1="160" y1="380" x2="200" y2="200" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="175" y1="380" x2="215" y2="200" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="165" y1="340" x2="180" y2="340" stroke="#94A3B8" strokeWidth="2" opacity="0.5" />
          <line x1="170" y1="300" x2="185" y2="300" stroke="#94A3B8" strokeWidth="2" opacity="0.5" />
          <line x1="175" y1="260" x2="190" y2="260" stroke="#94A3B8" strokeWidth="2" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Floating glass cards */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 left-4 sm:left-8 glass rounded-2xl px-4 py-3 shadow-xl"
      >
        <p className="text-xs font-semibold text-primary">Shop Branding</p>
        <p className="text-[10px] text-ink/50">Installed across Goa</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-8 right-0 sm:right-4 glass rounded-2xl px-4 py-3 shadow-xl"
      >
        <p className="text-xs font-semibold text-accent">LED Boards</p>
        <p className="text-[10px] text-ink/50">Day & night visibility</p>
      </motion.div>
    </div>
  )
}
