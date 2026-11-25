import React from 'react'
import { motion } from 'framer-motion'
import { contactLinks, navTargets } from '../config/data'
import { SectionId } from '../config/sections'
import { RevealItem } from './MotionPrimitives'

export const Footer: React.FC = () => {
  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-black/10 bg-[#f4f4f4] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1440px] px-4 pb-6 pt-12 sm:px-6 md:px-12 md:pb-8 md:pt-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12">
          <RevealItem className="space-y-4 sm:col-span-2 lg:col-span-1 lg:space-y-6">
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Focused on building clean, scalable full-stack systems, real-time
              applications, and accessible open-source software.
            </p>
            <div>
              <a
                href={contactLinks.phone}
                className="block text-xs font-medium text-neutral-600 hover:text-black"
              >
                {contactLinks.phoneDisplay}
              </a>
              <a
                href={contactLinks.email}
                className="mt-1 block break-all font-display text-base font-bold text-[#0a0a0a] hover:underline sm:text-lg"
              >
                {contactLinks.emailAddress}
              </a>
            </div>
          </RevealItem>

          <RevealItem delay={0.08}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-medium">
              {navTargets.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-neutral-700 transition-all hover:translate-x-1 hover:text-black"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem delay={0.16}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Profiles
            </p>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-700 transition-all hover:translate-x-1 hover:text-black"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-700 transition-all hover:translate-x-1 hover:text-black"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.email}
                  className="inline-flex items-center gap-2 text-neutral-700 transition-all hover:translate-x-1 hover:text-black"
                >
                  <span>Email</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </RevealItem>
        </div>

        <div className="mt-12 overflow-hidden border-t border-black/10 pt-6 md:mt-16 md:pt-8">
          <motion.p
            initial={{ y: '40%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[13vw] font-bold leading-[0.85] tracking-[-0.05em] text-[#0a0a0a] sm:text-[14vw] md:text-[11rem]"
          >
            Siddharth
            <span className="align-super text-2xl sm:text-4xl md:text-6xl">
              ®
            </span>
          </motion.p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] py-4 text-center text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        © 2026 Siddharth Mishra — Full-Stack Developer
      </div>
    </footer>
  )
}
