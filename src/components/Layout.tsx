import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contactLinks, navTargets } from '../config/data'
import { SectionId } from '../config/sections'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id: SectionId) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#0a0a0a]">
      {/* Top sticky editorial navbar */}
      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#0a0a0a]/95 text-white backdrop-blur-md">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-center md:grid-cols-[240px_1fr_80px]">
          <button
            onClick={() => handleScroll(SectionId.Hero)}
            className="flex h-14 items-center px-4 text-left font-display text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-80 sm:px-6 md:h-16 md:border-r md:border-white/15"
          >
            Siddharth<span className="ml-0.5 align-super text-xs">®</span>
          </button>

          <nav
            aria-label="Primary"
            className="hidden h-16 items-center justify-center md:flex"
          >
            {navTargets.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="flex h-full items-center border-r border-white/10 px-6 text-xs font-medium uppercase tracking-[0.14em] text-neutral-300 transition-colors first:border-l first:border-white/10 hover:bg-white hover:text-[#0a0a0a]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-14 w-16 items-center justify-center border-l border-white/15 text-white transition-colors hover:bg-white hover:text-[#0a0a0a] md:h-16 md:w-20"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? '-translate-y-[4px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen architectural drawer menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 top-14 z-30 overflow-y-auto bg-[#0a0a0a] text-white md:top-16"
          >
            <div className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-[1440px] md:min-h-[calc(100vh-4rem)] md:grid-cols-[1.3fr_1fr]">
              <div className="flex flex-col justify-center border-b border-white/15 px-5 py-8 md:border-b-0 md:border-r md:px-14 md:py-10">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400 md:mb-6">
                  Navigation
                </p>
                <ul className="divide-y divide-white/10">
                  {navTargets.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleScroll(item.id)}
                        className="group flex w-full items-center justify-between py-3.5 text-left font-display text-2xl font-bold uppercase tracking-tight text-white transition-colors hover:text-neutral-400 sm:text-4xl md:py-4 md:text-5xl"
                      >
                        <span>{item.label}</span>
                        <span className="text-xl font-light text-neutral-500 transition-transform group-hover:rotate-45 group-hover:text-white sm:text-2xl">
                          +
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between px-5 py-8 md:px-14 md:py-10">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      Mobile
                    </p>
                    <a
                      href={contactLinks.phone}
                      className="mt-2 block font-display text-xl font-semibold text-white hover:underline sm:text-2xl"
                    >
                      {contactLinks.phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      Email
                    </p>
                    <a
                      href={contactLinks.email}
                      className="mt-2 block break-all font-display text-lg font-semibold text-white hover:underline sm:text-2xl"
                    >
                      {contactLinks.emailAddress}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      Education &amp; Location
                    </p>
                    <p className="mt-2 text-base font-medium text-neutral-200">
                      Lovely Professional University, Punjab, India
                    </p>
                    <p className="mt-1 text-sm text-neutral-400">
                      B.Tech CSE (2024 - 2028)
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 border-t border-white/15 pt-6">
                  <a
                    href={contactLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#0a0a0a]"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={contactLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#0a0a0a]"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  )
}
