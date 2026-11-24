import React from 'react'
import { motion } from 'framer-motion'
import { openSourceContributions } from '../config/data'

interface SectionProps {
  id: string
}

export const OpenSource: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="border-t border-black/10 bg-white py-14 text-[#0a0a0a] md:py-28"
      aria-labelledby="opensource-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="mb-8 md:mb-12">
            <div className="mb-4 inline-flex items-center gap-2 border border-black/15 bg-[#f4f4f4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] md:mb-6">
              <span>✦</span>
              <span>Open Source</span>
            </div>
            <h2
              id="opensource-heading"
              className="max-w-4xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            >
              OPEN-SOURCE{' '}
              <span className="text-neutral-400">CONTRIBUTIONS</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {openSourceContributions.map((contrib, index) => (
              <motion.article
                key={contrib.project}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between bg-[#0a0a0a] p-5 text-white sm:p-7 md:p-9"
              >
                <div>
                  <div className="flex flex-col items-start justify-between gap-2 border-b border-white/15 pb-4 sm:flex-row sm:gap-4 sm:pb-5">
                    <div>
                      <span className="text-lg text-white">✦</span>
                      <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight sm:mt-3 sm:text-3xl">
                        {contrib.project}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                        {contrib.stars}
                      </p>
                    </div>
                    <span className="border border-white/20 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-300">
                      {contrib.date}
                    </span>
                  </div>

                  <p className="mt-5 text-xs leading-relaxed text-neutral-300 sm:mt-6 sm:text-sm">
                    {contrib.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
                    {contrib.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-neutral-200"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4 sm:mt-8 sm:pt-5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                    PR #{String(index + 1).padStart(2, '0')} • Merged
                  </span>
                  <a
                    href={contrib.prUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border border-white bg-white text-xs font-semibold uppercase tracking-[0.16em] text-[#0a0a0a] transition hover:bg-transparent hover:text-white"
                  >
                    <span className="px-3.5 py-2 sm:px-4 sm:py-2.5">View Merged PR</span>
                    <span className="border-l border-black/15 px-3 py-2 sm:py-2.5">
                      ↗
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
