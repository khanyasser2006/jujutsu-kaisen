'use client'

import Link from 'next/link'
import { Reveal, Parallax } from '@/components/motion'

const stats = [
  { value: '2018', label: 'Serialization' },
  { value: '4', label: 'Grades of Curse' },
  { value: '∞', label: 'Limitless' },
]

export function Intro() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      {/* faint background kana pinned to the right */}
      <span className="pointer-events-none absolute -right-4 top-0 select-none font-jp text-[24vw] leading-none text-white/[0.02] md:text-[16vw]">
        呪
      </span>

      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
        {/* Left: image, offset down */}
        <div className="md:col-span-5 md:col-start-1">
          <Parallax speed={40}>
            <div className="hover-glow group relative aspect-[3/4] overflow-hidden rounded-lg md:mt-16">
              <img
                src="/images/gojo-teal.jpg"
                alt="Satoru Gojo with the Six Eyes"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-jp text-sm text-cyan">六眼</p>
                <p className="font-display text-2xl uppercase text-bone">
                  The Six Eyes
                </p>
              </div>
            </div>
          </Parallax>
        </div>

        {/* Right: text */}
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-crimson" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
                The Premise
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone md:text-6xl">
              A curse can only be
              <br />
              <span className="text-crimson">exorcised</span> by another
              <br />
              curse.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Yuji Itadori lived an ordinary life until he swallowed a cursed
              object to protect his friends — and inherited the will of Ryomen
              Sukuna, the King of Curses. Now enrolled at Tokyo Jujutsu High, he
              fights alongside sorcerers who wager their lives to protect a world
              that never sees them.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl text-cyan md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:text-crimson"
            >
              Read the full story
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
