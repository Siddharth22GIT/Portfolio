import React from 'react'
import { motion } from 'framer-motion'
import { techStack } from '../config/data'

interface SectionProps {
  id: string
}

const cardClass =
  'rounded-3xl border border-slate-100/80 bg-slate-50/90 p-4 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/80'

export const TechStack: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-24"
      aria-labelledby="tech-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/85"
      >
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Tech Stack
            </p>
            <h2
              id="tech-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              Technologies I work with
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {Object.values(techStack).map((group) => (
            <div key={group.title} className={cardClass}>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {group.title}
                </p>
                <span className="h-7 rounded-2xl bg-slate-100 px-3 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  {group.items.length} tools
                </span>
              </div>
              <ul className="flex flex-wrap gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1 rounded-2xl bg-white/80 px-3 py-1 shadow-sm dark:bg-slate-900/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}