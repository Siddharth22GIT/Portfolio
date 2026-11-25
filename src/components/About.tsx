import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../config/data'
import {
  AnimatedCounter,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

type AboutProps = {
  id: string
}

const impactStats = [
  {
    value: 10,
    suffix: 'K+',
    label: 'DEVELOPER COMMUNITY',
    detail:
      'Growing CS & engineering audience at @gotocodes across Instagram and YouTube.',
  },
  {
    value: 38,
    suffix: 'K+',
    label: 'OPEN-SOURCE STARS',
    detail:
      'Merged accessibility and UI positioning PRs in Cockpit (15.4K+) & React-Bootstrap (22.6K+).',
  },
]

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="border-t border-black/10 bg-[#f4f4f4] py-14 text-[#0a0a0a] md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
        <RevealItem>
          <div className="mb-6 inline-flex items-center gap-2 border border-black/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] md:mb-8">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="inline-block"
            >
              ✦
            </motion.span>
            <span>About Me</span>
          </div>
        </RevealItem>

        <RevealHeading
          id="about-heading"
          className="max-w-5xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          segments={[
            { text: 'MY IMPACT' },
            { text: 'THROUGH SCALABLE', muted: true },
            { text: 'ENGINEERING' },
          ]}
        />

        <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center py-2 sm:py-4"
          >
            <div className="h-56 w-56 overflow-hidden rounded-full border border-black/15 bg-white shadow-sm sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img
                src="/siddharth-about.jpg"
                alt="Siddharth Mishra portrait"
                className="h-full w-full scale-105 object-cover object-center transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
              <span>Full-Stack Developer</span>
            </div>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            <RevealItem delay={0.08}>
              <p className="max-w-2xl whitespace-pre-line text-xs font-medium uppercase leading-relaxed tracking-[0.03em] text-neutral-700 sm:text-sm md:text-base">
                {about.paragraph}
              </p>
            </RevealItem>

            <div className="divide-y divide-black/10 border-y border-black/10 bg-white">
              {impactStats.map((stat, idx) => (
                <RevealItem key={stat.label} delay={idx * 0.1}>
                  <div className="grid gap-3 p-4 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-4 sm:p-6">
                    <p className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </p>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0a0a0a]">
                        ✦ {stat.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                        {stat.detail}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {about.quickInfo.map((item, idx) => (
                <RevealItem key={item.label} delay={idx * 0.06}>
                  <div className="border border-black/10 bg-white px-4 py-3 transition-colors duration-200 hover:border-black">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#0a0a0a]">
                      {item.value}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
