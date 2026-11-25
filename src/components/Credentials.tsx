import React from 'react'
import { certificates, education } from '../config/data'
import { RevealHeading, RevealItem } from './MotionPrimitives'

interface SectionProps {
  id: string
}

export const Credentials: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="border-t border-black/10 bg-white py-14 text-[#0a0a0a] md:py-28"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
        <div className="mb-8 md:mb-12">
          <RevealItem>
            <div className="mb-4 inline-flex items-center gap-2 border border-black/15 bg-[#f4f4f4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] md:mb-6">
              <span>✦</span>
              <span>Education &amp; Certificates</span>
            </div>
          </RevealItem>

          <RevealHeading
            id="credentials-heading"
            className="max-w-4xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            segments={[
              { text: 'ACADEMIC' },
              { text: 'BACKGROUND &', muted: true },
              { text: 'CERTIFICATIONS' },
            ]}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Education */}
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                01 / Education
              </p>
            </RevealItem>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {education.map((edu, idx) => (
                <RevealItem
                  key={`${edu.institution}-${edu.degree}`}
                  delay={idx * 0.08}
                >
                  <div className="py-5 sm:py-6">
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#0a0a0a] sm:text-lg">
                        {edu.institution}
                      </h3>
                      <span className="shrink-0 border border-black/15 bg-[#f4f4f4] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-700">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-neutral-700 sm:text-sm">
                      {edu.degree}
                    </p>
                    {edu.score && (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]">
                        {edu.score}
                      </p>
                    )}
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                02 / Certificates
              </p>
            </RevealItem>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {certificates.map((cert, index) => (
                <RevealItem key={cert.title} delay={index * 0.08}>
                  <div className="flex flex-col items-start justify-between gap-3 py-5 sm:flex-row sm:items-center sm:gap-4 sm:py-6">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                        {String(index + 1).padStart(2, '0')} • {cert.issuer}
                      </p>
                      <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#0a0a0a] sm:text-lg">
                        {cert.title}
                      </h3>
                    </div>
                    <span className="shrink-0 border border-black/15 bg-[#f4f4f4] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-700">
                      {cert.date}
                    </span>
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
