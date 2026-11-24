import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../config/data'

interface SectionProps {
  id: string
}

export const Projects: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-24"
      aria-labelledby="projects-heading"
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
              Projects
            </p>
            <h2
              id="projects-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              Featured engineering work
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group flex flex-col justify-between rounded-3xl border border-slate-100/80 bg-slate-50/90 p-5 shadow-soft backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/80"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                    {project.date}
                  </span>
                </div>

                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-xl bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm dark:bg-slate-800/90 dark:text-slate-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-2 text-xs font-medium">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-slate-900 px-3 py-2 text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
