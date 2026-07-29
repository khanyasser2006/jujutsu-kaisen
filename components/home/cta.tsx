'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from '@/components/motion'

export function CtaBand() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80svh] items-center overflow-hidden border-y border-white/5"
    >
      <motion.img
        src="/images/gojo-space.jpg"
        alt="Gojo standing above the earth"
        style={{ y }}
        className="absolute inset-0 h-[124%] w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-jp text-lg text-cyan">無下限呪術</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[0.88] text-bone md:text-8xl">
              Throughout heaven
              <br />& earth
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
              Explore the techniques, the binding vows, and the cursed lore that
              define this world — one entry at a time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/lore"
              className="group mt-9 inline-flex items-center gap-3 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-bone backdrop-blur-sm transition-colors hover:border-cyan hover:text-cyan"
            >
              Decode the lore
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
