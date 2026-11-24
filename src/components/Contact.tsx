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
      className="bg-[#0a0a0a] py-14 text-white md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid gap-8 border border-white/15 bg-[#111111] p-4 sm:p-6 md:grid-cols-[0.95fr_1.15fr] md:items-center md:gap-12 md:p-12"
        >
          {/* Left white editorial form card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 text-[#0a0a0a] md:p-8"
          >
            <div className="border-b border-black/10 pb-4">
              <p className="font-display text-lg font-bold tracking-tight">
                Siddharth<span className="text-xs align-super ml-0.5">®</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">
                Reach Out to Me
              </p>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              <div>
                <label className="mb-1.5 block font-semibold uppercase tracking-[0.14em] text-neutral-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-black/15 bg-[#f4f4f4] px-3.5 py-2.5 text-xs text-[#0a0a0a] outline-none transition focus:border-black focus:bg-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-semibold uppercase tracking-[0.14em] text-neutral-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-black/15 bg-[#f4f4f4] px-3.5 py-2.5 text-xs text-[#0a0a0a] outline-none transition focus:border-black focus:bg-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-semibold uppercase tracking-[0.14em] text-neutral-600">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your project or opportunity."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none border border-black/15 bg-[#f4f4f4] px-3.5 py-2.5 text-xs text-[#0a0a0a] outline-none transition focus:border-black focus:bg-white"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#0a0a0a] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-[11px] font-medium text-neutral-700">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && error && (
                <p className="text-[11px] font-medium text-neutral-700">
                  {error}
                </p>
              )}
            </div>
          </form>

          {/* Right editorial headline + direct contact links */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-300">
              <span>✦</span>
              <span>Contact</span>
            </div>

            <h2
              id="contact-heading"
              className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              LET&apos;S BUILD{' '}
              <span className="block text-neutral-400">TOGETHER</span>
            </h2>

            <p className="max-w-md text-xs uppercase leading-relaxed tracking-[0.08em] text-neutral-300">
              Open to software engineering internships, full-stack products, and
              open-source collaborations.
            </p>

            <div className="divide-y divide-white/15 border-y border-white/15 text-xs">
              <a
                href={contactLinks.email}
                className="flex flex-wrap items-center justify-between gap-2 py-3.5 transition hover:text-neutral-300"
              >
                <span className="uppercase tracking-[0.16em] text-neutral-400">
                  Email
                </span>
                <span className="break-all font-medium text-white">
                  {contactLinks.emailAddress} ↗
                </span>
              </a>
              <a
                href={contactLinks.phone}
                className="flex items-center justify-between py-3.5 transition hover:text-neutral-300"
              >
                <span className="uppercase tracking-[0.16em] text-neutral-400">
                  Mobile
                </span>
                <span className="font-medium text-white">
                  {contactLinks.phoneDisplay} ↗
                </span>
              </a>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-3.5 transition hover:text-neutral-300"
              >
                <span className="uppercase tracking-[0.16em] text-neutral-400">
                  LinkedIn
                </span>
                <span className="font-medium text-white">
                  /in/-siddharthmishra ↗
                </span>
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-3.5 transition hover:text-neutral-300"
              >
                <span className="uppercase tracking-[0.16em] text-neutral-400">
                  GitHub
                </span>
                <span className="font-medium text-white">
                  @Siddharth22GIT ↗
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
