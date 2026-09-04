import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '../../constants/data'
import { fadeInLeft, fadeInRight, viewportOnce } from '../../animations/variants'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import CallButton from '../ui/CallButton'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Ready to elevate your brand? Reach out for a free consultation and quote."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-primary/5 border border-primary/5"
          >
            <h3 className="text-2xl font-bold text-ink mb-8">Let&apos;s Talk</h3>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FaPhoneAlt size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink/50 mb-1">Phone</p>
                  {COMPANY.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-lg font-semibold text-ink hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FaEnvelope size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink/50 mb-1">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-base sm:text-lg font-semibold text-ink hover:text-primary transition-colors break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <FaMapMarkerAlt size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink/50 mb-1">Address</p>
                  <address className="not-italic text-ink font-medium leading-relaxed">
                    {COMPANY.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <CallButton iconSize={13} />
              <Button
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                  'Hi Aryan Advertising, I would like to know more about your signage services.',
                )}`}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </Button>
              <Button href={`mailto:${COMPANY.email}`} variant="secondary">
                <FaEnvelope size={13} />
                Email Us
              </Button>
              <Button
                href={COMPANY.mapsUrl}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkedAlt size={14} />
                Google Maps
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl overflow-hidden shadow-xl shadow-primary/10 border border-primary/5 min-h-[360px] md:min-h-[480px] bg-white"
          >
            <iframe
              title="Aryan Advertising location — Madapai, Marcel, North Goa"
              src={COMPANY.mapsEmbed}
              className="w-full h-full min-h-[360px] md:min-h-[480px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
