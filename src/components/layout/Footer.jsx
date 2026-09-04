import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { COMPANY, FOOTER_LINKS } from '../../constants/data'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" className="mb-5" />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Premium signage and branding solutions for businesses across Goa —
              designed, manufactured and installed with care.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-accent transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-accent transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors shadow-md shadow-[#25D366]/30"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-accent" size={14} />
                <div className="flex flex-col gap-1">
                  {COMPANY.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-accent" size={14} />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" size={14} />
                <span>{COMPANY.address.full}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/60">
          <p>© 2026 Aryan Advertising. All Rights Reserved.</p>
          <p>Made with care in Goa, India</p>
        </div>
      </div>
    </footer>
  )
}
