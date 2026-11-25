import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../config/data'
import { SectionId } from '../config/sections'

type HeroProps = {
  id: string
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id={id}
      aria-label="Hero"
      className="relative overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Architectural grid */}
      <div
        aria-hidden
        className="bg-arch-grid-dark pointer-events-none absolute inset-0"
      />

      {/* Giant background watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-6 flex select-none justify-center overflow-hidden"
      >
        <span className="font-display text-[17vw] font-bold uppercase leading-none tracking-[-0.05em] text-white/[0.06]">
          SIDDHARTH
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 pb-10 pt-16 sm:px-6 md:px-12 md:pb-16 md:pt-24">
        <div className="grid items-end gap-8 lg:min-h-[74vh] lg:grid-cols-[1.05fr_1fr_0.9fr] lg:gap-10">
          {/* Left editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="z-10 flex flex-col justify-end pb-1"
          >
            <div>
              <p className="mb-1.5 text-xs font-medium tracking-[0.18em] text-neutral-400">
                ©2026
              </p>
              <h1 className="font-display text-[2.65rem] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl xl:text-[5.5rem]">
                SIDDHARTH
                <span className="block text-neutral-400">MISHRA</span>
              </h1>
              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-neutral-400 sm:mt-4 sm:text-xs sm:tracking-[0.2em]">
                {profile.title}
              </p>
            </div>
          </motion.div>

          {/* Center portrait (Polaroid frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative mx-auto flex w-full max-w-[360px] items-end justify-center self-end sm:max-w-[400px]"
          >
            <div className="w-full border border-white/25 bg-white p-2.5 text-[#0a0a0a]">
              <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-neutral-900">
                <img
                  src="/siddharth.jpg"
                  alt="Siddharth Mishra"
                  className="h-full w-full object-cover object-center grayscale contrast-110 transition duration-700 hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Right column: Open to internships + intro below watermark, BOTHER ME at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            className="z-10 flex flex-col items-stretch justify-between gap-8 sm:items-end lg:h-full lg:pt-40"
          >
            <div className="max-w-xs space-y-3 sm:text-right">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">
                <span className="h-1.5 w-1.5 bg-white" />
                <span>Open to Work</span>
              </div>
              <p className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.08em] text-neutral-300 sm:text-xs">
                I BUILD SCALABLE FULL-STACK SYSTEMS, REAL-TIME PLATFORMS, AND
                ACCESSIBLE OPEN-SOURCE INTERFACES.
              </p>
            </div>

            {/* BOTHER ME button */}
            <button
              type="button"
              onClick={() => scrollTo(SectionId.Contact)}
              className="group relative flex w-full items-center justify-between overflow-hidden border border-white/25 bg-neutral-950/95 p-3 pl-5 text-left transition-colors duration-300 hover:border-white active:scale-[0.98] sm:max-w-[260px]"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
              <span className="relative z-10 font-display text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-[#0a0a0a]">
                BOTHER ME
              </span>
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-white text-sm font-bold text-[#0a0a0a] transition-colors duration-300 group-hover:bg-[#0a0a0a] group-hover:text-white">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Monochrome tech/open-source bar at bottom of hero */}
      <div className="border-t border-white/15 bg-white text-[#0a0a0a]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:px-6 md:px-12 md:py-6">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-[11px]"
          >
            CORE STACK &amp; OPEN SOURCE
          </motion.p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-xs font-bold uppercase tracking-tight text-[#0a0a0a] sm:gap-x-8 sm:text-base">
            {[
              'React',
              'Next.js',
              'Node.js',
              'TypeScript',
              'Socket.IO',
              'MongoDB',
              'Docker',
              'Cockpit',
              'React-Bootstrap',
            ].map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
