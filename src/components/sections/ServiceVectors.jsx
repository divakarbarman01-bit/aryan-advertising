/** Inline SVG vectors for each service — brand blues, flat illustration style */

const common = {
  className: 'h-full w-full',
  viewBox: '0 0 160 120',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}

export function AcpSign({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="28" y="28" width="104" height="58" rx="4" fill="#E8EEF9" stroke="#1F4FBF" strokeWidth="2.5" />
      <rect x="36" y="36" width="88" height="42" rx="2" fill="#1F4FBF" />
      <rect x="48" y="48" width="40" height="6" rx="1" fill="#fff" opacity="0.9" />
      <rect x="48" y="60" width="28" height="4" rx="1" fill="#93C5FD" />
      <rect x="72" y="86" width="8" height="18" fill="#94A3B8" />
      <rect x="80" y="86" width="8" height="18" fill="#64748B" />
    </svg>
  )
}

export function LedSign({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="24" y="32" width="112" height="48" rx="6" fill="#0F172A" stroke="#1F4FBF" strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={34 + i * 12} y="44" width="8" height="24" rx="1.5" fill={i % 2 ? '#60A5FA' : '#FBBF24'} />
      ))}
      <circle cx="36" cy="38" r="2" fill="#22C55E" />
      <circle cx="44" cy="38" r="2" fill="#EF4444" />
    </svg>
  )
}

export function BacklitFlex({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="30" y="24" width="100" height="72" rx="4" fill="#DBEAFE" stroke="#1F4FBF" strokeWidth="2" />
      <rect x="38" y="32" width="84" height="56" rx="2" fill="url(#backlitGlow)" />
      <rect x="52" y="48" width="56" height="8" rx="2" fill="#1F4FBF" opacity="0.85" />
      <rect x="60" y="62" width="40" height="5" rx="1.5" fill="#3B82F6" opacity="0.7" />
      <defs>
        <linearGradient id="backlitGlow" x1="80" y1="32" x2="80" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function FrontlitFlex({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="32" y="36" width="96" height="52" rx="3" fill="#F1F5F9" stroke="#1F4FBF" strokeWidth="2" />
      <rect x="42" y="48" width="50" height="7" rx="1.5" fill="#1F4FBF" />
      <rect x="42" y="60" width="36" height="5" rx="1" fill="#64748B" />
      <path d="M40 28h80" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 22l8 6M72 18l0 8M96 22l-8 6M112 28l-4-8" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GlowSign({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <ellipse cx="80" cy="60" rx="58" ry="40" fill="#DBEAFE" opacity="0.5" />
      <rect x="36" y="38" width="88" height="44" rx="8" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="3" />
      <text x="80" y="66" textAnchor="middle" fill="#93C5FD" fontSize="14" fontWeight="700" fontFamily="system-ui">
        GLOW
      </text>
      <circle cx="48" cy="48" r="3" fill="#FBBF24" opacity="0.9" />
      <circle cx="112" cy="48" r="3" fill="#FBBF24" opacity="0.9" />
    </svg>
  )
}

export function FlexBanner({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <path d="M28 30h104v8H28z" fill="#94A3B8" />
      <path d="M34 38h92l-4 58H38l-4-58z" fill="#1F4FBF" />
      <path d="M42 52h60" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      <path d="M42 64h44" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="34" r="3" fill="#64748B" />
      <circle cx="124" cy="34" r="3" fill="#64748B" />
    </svg>
  )
}

export function FabricSign({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="36" y="26" width="88" height="68" rx="2" fill="#E0E7FF" stroke="#1F4FBF" strokeWidth="2" />
      <path
        d="M44 40c12 8 20-8 32 0s20-8 32 0"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 56c12 8 20-8 32 0s20-8 32 0"
        stroke="#93C5FD"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 72c12 8 20-8 32 0s20-8 32 0"
        stroke="#BFDBFE"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="40" cy="30" r="2.5" fill="#1F4FBF" />
      <circle cx="120" cy="30" r="2.5" fill="#1F4FBF" />
      <circle cx="40" cy="90" r="2.5" fill="#1F4FBF" />
      <circle cx="120" cy="90" r="2.5" fill="#1F4FBF" />
    </svg>
  )
}

export function OneWayVision({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="28" y="24" width="104" height="72" rx="4" fill="#F8FAFC" stroke="#1F4FBF" strokeWidth="2" />
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 8}
            cy={36 + row * 7}
            r="1.8"
            fill={col < 6 ? '#1F4FBF' : '#94A3B8'}
            opacity={col < 6 ? 0.85 : 0.35}
          />
        )),
      )}
      <path d="M80 24v72" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  )
}

export function VinylPrint({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="48" y="22" width="64" height="76" rx="3" fill="#1F4FBF" stroke="#0F3E9D" strokeWidth="2" />
      <path d="M48 30h64" stroke="#fff" strokeWidth="1" opacity="0.3" />
      <rect x="58" y="42" width="44" height="6" rx="1" fill="#fff" opacity="0.9" />
      <rect x="58" y="54" width="32" height="4" rx="1" fill="#93C5FD" />
      <path d="M112 22c8 4 12 14 12 28s-4 24-12 28" stroke="#64748B" strokeWidth="3" fill="none" />
      <circle cx="124" cy="50" r="4" fill="#94A3B8" />
    </svg>
  )
}

export function ShopBranding({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <path d="M30 52h100v48H30z" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
      <path d="M24 52l56-24 56 24H24z" fill="#1F4FBF" />
      <rect x="40" y="42" width="80" height="10" rx="1" fill="#0F3E9D" />
      <rect x="68" y="68" width="24" height="32" rx="1" fill="#94A3B8" />
      <rect x="40" y="68" width="18" height="16" rx="1" fill="#BFDBFE" />
      <rect x="102" y="68" width="18" height="16" rx="1" fill="#BFDBFE" />
    </svg>
  )
}

export function OfficeBranding({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="40" y="28" width="80" height="68" rx="2" fill="#F1F5F9" stroke="#1F4FBF" strokeWidth="2" />
      <rect x="52" y="40" width="56" height="14" rx="2" fill="#1F4FBF" />
      <rect x="60" y="44" width="28" height="6" rx="1" fill="#fff" opacity="0.9" />
      <rect x="52" y="64" width="20" height="20" rx="1" fill="#DBEAFE" />
      <rect x="78" y="64" width="20" height="20" rx="1" fill="#DBEAFE" />
      <rect x="104" y="64" width="12" height="20" rx="1" fill="#93C5FD" />
    </svg>
  )
}

export function InShopBranding({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="24" y="30" width="112" height="64" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
      <rect x="32" y="38" width="28" height="48" rx="2" fill="#DBEAFE" stroke="#1F4FBF" strokeWidth="1.5" />
      <rect x="66" y="38" width="28" height="48" rx="2" fill="#1F4FBF" />
      <rect x="100" y="38" width="28" height="48" rx="2" fill="#DBEAFE" stroke="#1F4FBF" strokeWidth="1.5" />
      <rect x="72" y="50" width="16" height="4" rx="1" fill="#fff" />
      <rect x="72" y="58" width="12" height="3" rx="1" fill="#93C5FD" />
    </svg>
  )
}

export function VehicleBranding({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <path
        d="M28 70h12l8-20h52l14 20h18v12H28V70z"
        fill="#1F4FBF"
        stroke="#0F3E9D"
        strokeWidth="2"
      />
      <rect x="52" y="54" width="22" height="14" rx="1" fill="#BFDBFE" />
      <rect x="78" y="54" width="18" height="14" rx="1" fill="#93C5FD" />
      <circle cx="50" cy="84" r="8" fill="#334155" />
      <circle cx="50" cy="84" r="3.5" fill="#94A3B8" />
      <circle cx="118" cy="84" r="8" fill="#334155" />
      <circle cx="118" cy="84" r="3.5" fill="#94A3B8" />
      <rect x="58" y="62" width="20" height="4" rx="1" fill="#fff" opacity="0.8" />
    </svg>
  )
}

export function WallPainting({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="28" y="22" width="80" height="80" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
      <path d="M40 70c8-20 16-28 24-20s16 8 24-12" stroke="#1F4FBF" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="42" r="8" fill="#FBBF24" opacity="0.8" />
      <path d="M100 50l28 8-8 28-12-20z" fill="#3B82F6" />
      <rect x="112" y="78" width="8" height="22" rx="1" fill="#64748B" />
    </svg>
  )
}

export function ClipOnBoard({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="44" y="34" width="72" height="56" rx="3" fill="#F1F5F9" stroke="#1F4FBF" strokeWidth="2" />
      <rect x="52" y="46" width="56" height="6" rx="1" fill="#1F4FBF" />
      <rect x="52" y="58" width="40" height="4" rx="1" fill="#94A3B8" />
      <rect x="52" y="68" width="48" height="4" rx="1" fill="#CBD5E1" />
      <path d="M68 28h24v10H68z" fill="#64748B" />
      <path d="M74 22h12v8H74z" fill="#334155" />
      <circle cx="80" cy="26" r="2" fill="#94A3B8" />
    </svg>
  )
}

export function FlangeSign({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <rect x="24" y="20" width="10" height="84" rx="1" fill="#94A3B8" />
      <path d="M34 40h70l12 20-12 20H34V40z" fill="#1F4FBF" stroke="#0F3E9D" strokeWidth="2" />
      <rect x="48" y="52" width="36" height="6" rx="1" fill="#fff" opacity="0.9" />
      <rect x="48" y="64" width="24" height="4" rx="1" fill="#93C5FD" />
    </svg>
  )
}

export function ArchBoard({ className = '' }) {
  return (
    <svg {...common} className={`${common.className} ${className}`}>
      <path
        d="M36 88V52c0-24 18-36 44-36s44 12 44 36v36H36z"
        fill="#DBEAFE"
        stroke="#1F4FBF"
        strokeWidth="2.5"
      />
      <path d="M52 88V54c0-14 10-22 28-22s28 8 28 22v34" stroke="#93C5FD" strokeWidth="2" fill="none" />
      <rect x="58" y="58" width="44" height="8" rx="2" fill="#1F4FBF" />
      <rect x="66" y="72" width="28" height="5" rx="1" fill="#3B82F6" opacity="0.7" />
    </svg>
  )
}

export function CustomSignage({ className = '' }) {
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        className="custom-sign-fill"
        x="26"
        y="14"
        width="108"
        height="64"
        rx="6"
        fill="#DBEAFE"
      />
      <path
        className="custom-sign-stroke custom-sign-d1"
        d="M50 112V80"
        stroke="#64748B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="custom-sign-stroke custom-sign-d2"
        d="M110 112V80"
        stroke="#64748B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect
        className="custom-sign-stroke custom-sign-d3"
        x="26"
        y="14"
        width="108"
        height="64"
        rx="6"
        stroke="#1F4FBF"
        strokeWidth="3"
      />
      <rect
        className="custom-sign-stroke custom-sign-d4"
        x="36"
        y="24"
        width="88"
        height="44"
        rx="3"
        stroke="#3B82F6"
        strokeWidth="1.8"
      />
      <path
        className="custom-sign-stroke custom-sign-d5"
        d="M48 40h28M48 50h52M48 60h40"
        stroke="#1F4FBF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle
        className="custom-sign-stroke custom-sign-d6"
        cx="118"
        cy="36"
        r="7"
        stroke="#FBBF24"
        strokeWidth="2.4"
      />
    </svg>
  )
}

const SERVICE_VECTORS = {
  'ACP Sign Boards': AcpSign,
  'Backlit Flex Boards': BacklitFlex,
  'Frontlit Flex Boards': FrontlitFlex,
  'One Way Vision Printing': OneWayVision,
  Vinyl: VinylPrint,
  'Office Branding': OfficeBranding,
  'Flange Sign Boards': FlangeSign,
  'Custom Signage': CustomSignage,
}

export default SERVICE_VECTORS
