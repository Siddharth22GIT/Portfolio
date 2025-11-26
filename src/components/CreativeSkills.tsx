import React from 'react'
import { motion } from 'framer-motion'
import { creativeSkills } from '../config/data'

interface SectionProps {
  id: string
}

export const CreativeSkills: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-24"
      aria-labelledby="creative-heading"
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
              Creative Skills
            </p>
            <h2
              id="creative-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              DaVinci Resolve & video design
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-100/80 bg-slate-50/90 p-4 text-sm leading-relaxed text-slate-600 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300">
            <p>
              I approach editing with the same mindset as software: clean
              structure, smooth flows, and attention to the tiny details that
              make experiences feel premium. From explainer videos to
              YouTube-style content, I focus on pacing, clarity, and visuals
              that support the story.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100/80 bg-slate-50/90 p-4 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {creativeSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center justify-between rounded-2xl bg-white/80 px-3 py-2 shadow-sm dark:bg-slate-900/90"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {skill}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    Resolve
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}