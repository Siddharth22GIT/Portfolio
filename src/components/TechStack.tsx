import React from 'react'
import { motion } from 'framer-motion'
import { techStack } from '../config/data'
import {
  AnimatedCounter,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

interface SectionProps {
  id: string
}

export const TechStack: React.FC<SectionProps> = ({ id }) => {
  const groups = Object.values(techStack)

  return (
    <section
      id={id}
      className="border-t border-black/10 bg-white py-14 text-[#0a0a0a] md:py-28"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
        <div className="mb-6 flex flex-col items-start gap-5 md:mb-8 md:gap-6">
          <RevealItem>
            <div className="inline-flex items-center gap-2 border border-black/15 bg-[#f4f4f4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <span>✦</span>
              <span>Technical Skills</span>
            </div>
          </RevealItem>

          <RevealHeading
            id="tech-heading"
            className="max-w-4xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            segments={[
              { text: 'FULL-STACK' },
              { text: 'CAPABILITIES', muted: true },
              { text: 'FOR MODERN SYSTEMS' },
            ]}
          />
        </div>

        <div className="mt-8 divide-y divide-black/10 border-y border-black/10 md:mt-12">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 py-6 md:grid-cols-[180px_1fr] md:items-start md:gap-6 md:py-8"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                <span>✦</span>
                <span>{String(idx + 1).padStart(3, '0')}</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-6">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#0a0a0a] sm:text-2xl">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-neutral-500 sm:text-xs">
                    <AnimatedCounter to={group.items.length} duration={0.9} /> Core
                    Items
                  </p>
                </div>

                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((item, itemIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.92, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.35,
                        delay: itemIdx * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="border border-black/15 bg-[#f4f4f4] px-3 py-1.5 text-[11px] font-medium text-[#0a0a0a] transition-colors duration-200 hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white sm:px-3.5 sm:py-2 sm:text-xs"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
