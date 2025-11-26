import React from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { navTargets } from '../config/data'
import { SectionId } from '../config/sections'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleScroll = (id: SectionId) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-50">
      {/* Hyper-realistic gradient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -top-40 left-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-brand-400/40 via-sky-300/40 to-fuchsia-400/30 blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-32 right-[-5%] h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-300/40 via-brand-500/40 to-sky-400/40 blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-1/4 h-96 w-[36rem] rounded-[4rem] bg-gradient-to-tr from-slate-900/80 via-slate-800/60 to-brand-500/40 blur-3xl dark:opacity-80"
          animate={{ x: [0, 40, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-8 flex items-center justify-between rounded-3xl border border-white/40 bg-white/70 px-4 py-2 shadow-soft backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80">
          <button
            onClick={() => handleScroll(SectionId.Hero)}
            className="group inline-flex items-center gap-2 rounded-2xl px-2 py-1 text-left transition-colors"
          >
            <span className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-brand-500 to-sky-400 text-sm font-semibold text-white shadow-soft-lg ring-2 ring-white/60 dark:ring-slate-900/80" />
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Portfolio
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Siddharth Mishra
              </span>
            </div>
          </button>

          <nav className="hidden items-center gap-1 rounded-2xl bg-slate-100/70 p-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur sm:flex dark:bg-slate-900/80 dark:text-slate-300">
            {navTargets.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="rounded-2xl px-3 py-1.5 transition-all hover:bg-white hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        {children}
      </div>
    </div>
  )
}


