import React from 'react'
import { motion } from 'framer-motion'
import { openSourceContributions } from '../config/data'
import {
  ActionButton,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

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
        <div className="mb-8 md:mb-12">
          <RevealItem>
            <div className="mb-4 inline-flex items-center gap-2 border border-black/15 bg-[#f4f4f4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] md:mb-6">
              <span>✦</span>
              <span>Open Source</span>
            </div>
          </RevealItem>

          <RevealHeading
            id="opensource-heading"
            className="max-w-4xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            segments={[
              { text: 'OPEN-SOURCE' },
              { text: 'CONTRIBUTIONS', muted: true },
            ]}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {openSourceContributions.map((contrib, index) => (
            <motion.article
              key={contrib.project}
              initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between bg-[#0a0a0a] p-5 text-white sm:p-7 md:p-9"
            >
              <div>
                <div className="flex flex-col items-start justify-between gap-2 border-b border-white/15 pb-4 sm:flex-row sm:gap-4 sm:pb-5">
                  <div>
                    <motion.span
                      className="inline-block text-lg text-white"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.25 }}
                    >
                      ✦
                    </motion.span>
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
                      className="border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-neutral-200 transition-colors duration-200 hover:bg-white hover:text-[#0a0a0a]"
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
                <ActionButton
                  label="View Merged PR"
                  href={contrib.prUrl}
                  variant="light"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
