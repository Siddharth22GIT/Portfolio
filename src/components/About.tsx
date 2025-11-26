import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../config/data'

type AboutProps = {
  id: string
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              About
            </p>
            <h2
              id="about-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              A balance of engineering and creativity
            </h2>
          </div>
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem] dark:text-slate-300">
          {about.paragraph}
        </p>

        <div className="mt-6 grid gap-3 text-xs text-slate-600 sm:grid-cols-4 dark:text-slate-300">
          {about.quickInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80"
            >
              <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-brand-500/80 to-sky-400/80 text-[11px] font-semibold text-white shadow-soft flex items-center justify-center">
                {item.label.charAt(0)}
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="text-xs font-medium text-slate-900 dark:text-slate-50">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


