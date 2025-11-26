import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../config/data'

type HeroProps = {
  id: string
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id={id}
      className="relative mb-20 flex min-h-[72vh] items-center"
      aria-label="Hero"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid w-full gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center"
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Available for internships & collaborations</span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Software Developer • Full Stack Learner
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight md:text-6xl dark:text-slate-50">
              {profile.name}
            </h1>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-500 to-sky-400 px-5 py-2.5 text-sm font-semibold text-white shadow-soft-lg transition hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-50 dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              Contact Me
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 shadow-sm backdrop-blur dark:bg-slate-900/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              React, Node.js, Flask
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 shadow-sm backdrop-blur dark:bg-slate-900/70">
              DaVinci Resolve • Motion Design
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto h-[320px] w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/80 via-slate-50/60 to-slate-100/40 shadow-soft backdrop-blur-xl ring-1 ring-white/60 dark:from-slate-900/70 dark:via-slate-900/40 dark:to-slate-900/10 dark:ring-slate-700/80" />
          <div className="absolute inset-[1px] overflow-hidden rounded-[2rem]">
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_0_0,#4b6bff30,transparent_60%),radial-gradient(circle_at_100%_0,#22c55e26,transparent_55%),radial-gradient(circle_at_0_100%,#38bdf826,transparent_55%),radial-gradient(circle_at_100%_100%,#f9731626,transparent_60%)] opacity-90 dark:opacity-80" />
            <div className="relative flex h-full flex-col justify-between rounded-[2rem] bg-white/90 p-6 text-slate-900 shadow-soft dark:bg-slate-950/75 dark:text-slate-50">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                    Snapshot
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Full Stack & Creative
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-xs font-semibold text-white shadow-soft">
                    R
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 text-xs font-semibold text-white shadow-soft">
                    F
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                  STACK
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-100/90">
                  <div className="rounded-2xl bg-slate-100/90 p-3 dark:bg-slate-900/70">
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                      Backend
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-200">
                      Node.js • Express
                      <br />
                      Python • Flask
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-100/90 p-3 dark:bg-slate-900/70">
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                      Frontend
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-200">
                      React • Vite
                      <br />
                      Tailwind CSS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-200">
                <span>DaVinci Resolve • Motion</span>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] font-medium text-slate-50 dark:bg-slate-50 dark:text-slate-900">
                  Clean • Precise • Intentional
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}


