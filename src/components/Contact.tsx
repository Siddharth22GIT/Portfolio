import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contactLinks } from '../config/data'

interface SectionProps {
  id: string
}

export const Contact: React.FC<SectionProps> = ({ id }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setError('Please fill in all fields.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setError(null)

    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setError('Something went wrong. Please try again in a moment.')
    }
  }

  return (
    <section
      id={id}
      className="mb-16 scroll-mt-24"
      aria-labelledby="contact-heading"
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
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl dark:text-slate-50"
            >
              Let&apos;s build something together
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>
              From functional apps to clean edits, I create work that&apos;s
              deliberate, sharp, and built with intent.
            </p>
            <div className="space-y-2 text-xs">
              <a
                href={contactLinks.email}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-slate-700 shadow-sm transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Email
                </span>
                <span className="text-[11px] font-medium">Email Me</span>
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-slate-700 shadow-sm transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-50" />
                  GitHub
                </span>
                <span className="text-[11px] font-medium">View Profile</span>
              </a>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-slate-700 shadow-sm transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  LinkedIn
                </span>
                <span className="text-[11px] font-medium">Connect</span>
              </a>
              <a
                href={contactLinks.x}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-slate-700 shadow-sm transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-50" />
                  X
                </span>
                <span className="text-[11px] font-medium">Follow</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-3 rounded-3xl border border-slate-100/80 bg-slate-50/90 p-4 text-xs text-slate-600 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300"
          >
            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-50 dark:focus:border-brand-400 dark:focus:ring-brand-500/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-50 dark:focus:border-brand-400 dark:focus:ring-brand-500/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell me a bit about your project or idea."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-50 dark:focus:border-brand-400 dark:focus:ring-brand-500/30"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-500 to-sky-400 px-4 py-2.5 text-xs font-semibold text-white shadow-soft-lg transition hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 disabled:opacity-70 disabled:cursor-not-allowed dark:focus-visible:ring-offset-slate-950"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-[10px] text-emerald-500">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && error && (
              <p className="text-[10px] text-rose-500">{error}</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}