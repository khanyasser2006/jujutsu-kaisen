'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import type { Character } from '@/lib/data'
import { Reveal } from '@/components/motion'

const accentText: Record<Character['accent'], string> = {
  crimson: 'text-crimson',
  cyan: 'text-cyan',
  bone: 'text-bone',
}

export function CharacterProfile({
  character,
  index,
}: {
  character: Character
  index: number
}) {
  const flipped = index % 2 === 1
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const kanaY = useTransform(scrollYProgress, [0, 1], ['40%', '-40%'])

  return (
    <section
      id={character.id}
      ref={ref}
      className="relative scroll-mt-28 border-t border-white/5 py-16 md:py-28"
    >
      {/* drifting kana in the far background */}
      <motion.span
        style={{ y: kanaY }}
        className={`pointer-events-none absolute top-1/2 select-none font-jp text-[26vw] leading-none text-white/[0.025] md:text-[16vw] ${
          flipped ? 'left-2' : 'right-2'
        }`}
      >
        {character.kana.slice(0, 1)}
      </motion.span>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div
          className={`grid items-center gap-10 md:grid-cols-12 md:gap-12 ${
            flipped ? 'md:[direction:rtl]' : ''
          }`}
        >
          {/* Image */}
          <div className="md:col-span-6 md:[direction:ltr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/5">
              <motion.img
                style={{ y: imgY }}
                src={character.image || '/placeholder.svg'}
                alt={character.name}
                className="absolute inset-0 h-[116%] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute left-5 top-5 rounded-sm border border-white/10 bg-background/50 px-3 py-1.5 backdrop-blur-sm">
                <span className={`text-[11px] font-semibold uppercase tracking-widest ${accentText[character.accent]}`}>
                  {character.grade}
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-6 md:[direction:ltr]">
            <Reveal>
              <p className={`font-jp text-2xl ${accentText[character.accent]}`}>
                {character.kana}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] text-bone md:text-7xl">
                {character.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`mt-3 text-sm font-semibold uppercase tracking-[0.25em] ${accentText[character.accent]}`}>
                {character.role}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                {character.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="mt-6 border-l-2 border-crimson pl-4 font-display text-xl uppercase leading-tight text-foreground/85 md:text-2xl">
                “{character.quote}”
              </blockquote>
            </Reveal>

            <Reveal delay={0.25}>
              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:grid-cols-2">
                <div className="bg-surface p-4">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Cursed Technique
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {character.technique}
                  </dd>
                </div>
                <div className="bg-surface p-4">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Affiliation
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {character.affiliation}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
