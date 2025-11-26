import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'siddharth-theme'

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-2 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
      aria-label="Toggle color theme"
    >
      <span className="hidden text-xs sm:inline">Theme</span>
      <div className="relative h-6 w-10 rounded-full bg-slate-100 dark:bg-slate-800">
        <AnimatePresence initial={false}>
          <motion.div
            key={theme}
            initial={{ x: isDark ? 0 : 16, opacity: 0, scale: 0.9 }}
            animate={{ x: isDark ? 16 : 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="absolute top-[3px] h-5 w-5 rounded-full bg-white shadow-soft dark:bg-slate-900"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[10px]">
              {isDark ? '🌙' : '☀️'}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </button>
  )
}


