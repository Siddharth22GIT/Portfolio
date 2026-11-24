import React from 'react'
import { motion } from 'framer-motion'
import { achievements, certificates, education } from '../config/data'

interface SectionProps {
  id: string
}

export const Credentials: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-24"
      aria-labelledby="credentials-heading"
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
              Achievements, Certificates &amp; Education
            </p>
            <h2
              id="credentials-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              Academic background &amp; milestones
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-100/80 bg-slate-50/90 p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Achievements
              </p>
              <div className="space-y-3">
                {achievements.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/85 p-4 shadow-sm dark:bg-slate-900/90"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-xs font-semibold text-slate-900 sm:text-sm dark:text-slate-50">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                        {item.date}
                      </span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100/80 bg-slate-50/90 p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Certificates
              </p>
              <ul className="space-y-2.5 text-xs">
                {certificates.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white/85 px-4 py-3 shadow-sm dark:bg-slate-900/90"
                  >
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-50">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100/80 bg-slate-50/90 p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Education
            </p>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.degree}`}
                  className="rounded-2xl bg-white/85 p-4 shadow-sm dark:bg-slate-900/90"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xs font-semibold text-slate-900 sm:text-sm dark:text-slate-50">
                      {edu.institution}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-brand-500 dark:text-sky-400">
                    {edu.score}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
