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
      className="border-t border-black/10 bg-[#f4f4f4] py-14 text-[#0a0a0a] md:py-28"
      aria-labelledby="projects-heading"
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
              <div className="mb-4 inline-flex items-center gap-2 border border-black/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] md:mb-6">
                <span>✦</span>
                <span>Portfolio</span>
              </div>
              <h2
                id="projects-heading"
                className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
              >
                SELECTED <span className="block text-neutral-400">PROJECTS.</span>
              </h2>
            </div>

            <p className="max-w-xs text-xs font-medium uppercase leading-relaxed tracking-[0.08em] text-neutral-600">
              Production web applications, real-time systems, and developer tools
              shipped live.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col justify-between border border-black/15 bg-white p-5 transition-colors hover:border-black sm:p-6 md:p-8"
              >
                <div>
                  <div className="flex flex-col items-start justify-between gap-2 border-b border-black/10 pb-4 sm:flex-row sm:gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                        ✦ {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-[#0a0a0a] sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 border border-black/15 bg-[#f4f4f4] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-700">
                      {project.date}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-neutral-700 sm:mt-5 sm:space-y-3 sm:text-sm">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0a0a0a]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="border border-black/10 bg-[#f4f4f4] px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4 sm:mt-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                    /Live Deployment
                  </span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border border-[#0a0a0a] bg-[#0a0a0a] text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#0a0a0a]"
                  >
                    <span className="px-3.5 py-2 sm:px-4 sm:py-2.5">Live Demo</span>
                    <span className="border-l border-white/25 bg-white px-3 py-2 text-[#0a0a0a] sm:py-2.5">
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
