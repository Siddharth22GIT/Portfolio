import React from 'react'
import { motion } from 'framer-motion'
import { achievements, experiences } from '../config/data'

interface SectionProps {
  id: string
}

export const Experience: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-[#0a0a0a] py-14 text-white md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12 md:gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-300 md:mb-6">
                <span>✦</span>
                <span>Experience &amp; Honors</span>
              </div>
              <h2
                id="experience-heading"
                className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
              >
                EXPERIENCE &amp;{' '}
                <span className="block text-neutral-500">ACHIEVEMENTS</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {/* Experience card */}
            {experiences.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="flex flex-col justify-between border border-white/10 bg-[#141414] p-5 sm:p-7 md:p-9"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between gap-3 md:mb-8">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5 font-display text-xl font-bold text-white sm:h-16 sm:w-16 sm:text-2xl">
                      @
                    </div>
                    <span className="border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-300">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                    {item.organization} — {item.role}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-300 sm:mt-4 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 divide-y divide-white/10 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between py-3">
                    <span className="uppercase tracking-[0.16em] text-neutral-500">
                      Role
                    </span>
                    <span className="font-medium text-neutral-200">
                      {item.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="uppercase tracking-[0.16em] text-neutral-500">
                      Platforms
                    </span>
                    <span className="font-medium text-neutral-200">
                      Instagram &amp; YouTube
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="uppercase tracking-[0.16em] text-neutral-500">
                      Community
                    </span>
                    <span className="font-medium text-neutral-200">
                      10K+ Developers
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {/* Achievement card */}
            {achievements.map((ach) => (
              <article
                key={ach.title}
                className="flex flex-col justify-between border border-white/10 bg-[#141414] p-5 sm:p-7 md:p-9"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between gap-3 md:mb-8">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5 font-display text-xl font-bold text-white sm:h-16 sm:w-16 sm:text-2xl">
                      ✦
                    </div>
                    <span className="border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-300">
                      {ach.date}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                    {ach.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-300 sm:mt-4 sm:space-y-2.5 sm:text-sm">
                    {ach.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 divide-y divide-white/10 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between py-3">
                    <span className="uppercase tracking-[0.16em] text-neutral-500">
                      Achievement
                    </span>
                    <span className="font-medium text-neutral-200">
                      Internal Hackathon Winner
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="uppercase tracking-[0.16em] text-neutral-500">
                      Scale
                    </span>
                    <span className="font-medium text-neutral-200">
                      Top 50 of 1000+ Teams
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="uppercase tracking-[0.16em] text-neutral-500">
                      Year
                    </span>
                    <span className="font-medium text-neutral-200">
                      {ach.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
