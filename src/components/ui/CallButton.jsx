import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import Button from './Button'
import CallModal from './CallModal'
import { COMPANY } from '../../constants/data'

function isMobileDevice() {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

export default function CallButton({
  size = 'md',
  variant = 'primary',
  className = '',
  children,
  iconSize = 14,
}) {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    if (isMobileDevice()) {
      // Let native tel: work via anchor — handled below
      return
    }
    e.preventDefault()
    setOpen(true)
  }

  return (
    <>
      <Button
        href={`tel:+91${COMPANY.phones[0]}`}
        size={size}
        variant={variant}
        className={className}
        onClick={handleClick}
      >
        <FaPhoneAlt size={iconSize} />
        {children || 'Call Now'}
      </Button>
      <CallModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
