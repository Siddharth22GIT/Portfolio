import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../config/data'

interface SectionProps {
  id: string
}

export const Experience: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-24"
      aria-labelledby="experience-heading"
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
              Experience
            </p>
            <h2
              id="experience-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              Community &amp; technical content
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="rounded-3xl border border-slate-100/80 bg-slate-50/90 p-5 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/80"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {item.organization} · {item.role}
                  </h3>
                </div>
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  {item.period}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-2xl bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm dark:bg-slate-800/90 dark:text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
