import React, { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

type RevealItemProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}

export const RevealItem: React.FC<RevealItemProps> = ({
  children,
  delay = 0,
  y = 28,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type WordSegment = {
  text: string
  muted?: boolean
  breakBefore?: boolean
}

type RevealHeadingProps = {
  id?: string
  segments: WordSegment[]
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export const RevealHeading: React.FC<RevealHeadingProps> = ({
  id,
  segments,
  className = '',
  as = 'h2',
}) => {
  const Tag = motion[as]
  let wordIndex = 0

  return (
    <Tag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {segments.map((seg, segIdx) => {
        const words = seg.text.split(' ')
        return (
          <React.Fragment key={`${seg.text}-${segIdx}`}>
            {seg.breakBefore && <br />}
            {words.map((word) => {
              const idx = wordIndex++
              return (
                <span
                  key={`${word}-${idx}`}
                  className="inline-block overflow-hidden align-bottom pb-[0.04em] mr-[0.22em]"
                >
                  <motion.span
                    className={`inline-block ${
                      seg.muted ? 'text-neutral-400' : ''
                    }`}
                    variants={{
                      hidden: { y: '105%', opacity: 0, filter: 'blur(6px)' },
                      visible: {
                        y: '0%',
                        opacity: 1,
                        filter: 'blur(0px)',
                        transition: {
                          duration: 0.55,
                          delay: idx * 0.055,
                          ease: EASE,
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </React.Fragment>
        )
      })}
    </Tag>
  )
}

type AnimatedCounterProps = {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  suffix = '',
  duration = 1.4,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, to, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}

type ActionButtonProps = {
  label: string
  href?: string
  onClick?: () => void
  icon?: string
  variant?: 'dark' | 'light'
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  href,
  onClick,
  icon = '↗',
  variant = 'dark',
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const isDark = variant === 'dark'

  const inner = (
    <>
      {/* Sliding background inversion layer */}
      <span
        aria-hidden
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100 ${
          isDark ? 'bg-white' : 'bg-[#0a0a0a]'
        }`}
      />
      <span
        className={`relative z-10 px-4 py-2.5 transition-colors duration-300 ${
          isDark
            ? 'text-white group-hover/btn:text-[#0a0a0a]'
            : 'text-[#0a0a0a] group-hover/btn:text-white'
        }`}
      >
        {label}
      </span>
      <span
        className={`relative z-10 flex items-center justify-center overflow-hidden border-l px-3.5 py-2.5 transition-colors duration-300 ${
          isDark
            ? 'border-white/25 bg-white text-[#0a0a0a] group-hover/btn:border-black/15 group-hover/btn:bg-[#0a0a0a] group-hover/btn:text-white'
            : 'border-black/15 bg-[#0a0a0a] text-white group-hover/btn:border-white/25 group-hover/btn:bg-white group-hover/btn:text-[#0a0a0a]'
        }`}
      >
        <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
          {icon}
        </span>
      </span>
    </>
  )

  const baseClass = `group/btn relative inline-flex items-center justify-between overflow-hidden border text-xs font-semibold uppercase tracking-[0.16em] transition-transform duration-200 active:scale-[0.98] ${
    isDark ? 'border-[#0a0a0a] bg-[#0a0a0a]' : 'border-white bg-white'
  } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={baseClass}>
        {inner}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
    >
      {inner}
    </button>
  )
}
