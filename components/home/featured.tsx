'use client'

import Link from 'next/link'
import { characters } from '@/lib/data'
import { CharacterCard } from '@/components/character-card'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion'

// staggered vertical offsets so the row feels hand-composed, not a rigid grid
const offsets = ['md:mt-0', 'md:mt-14', 'md:mt-6', 'md:mt-20']

export function Featured() {
  return (
    <section className="relative border-t border-white/5 bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Header row — title left, meta right */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-jp text-sm text-crimson">02</span>
                <span className="h-px w-10 bg-crimson" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
                  The Sorcerers
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl uppercase leading-[0.9] text-bone md:text-7xl">
                Behind
                <br />
                the veil
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
              Four students. One instructor who could end it all. Meet the core
              of Tokyo Jujutsu High.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {characters.map((c, i) => (
            <StaggerItem key={c.id} className={offsets[i % offsets.length]}>
              <Link href={`/characters#${c.id}`}>
                <CharacterCard character={c} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-end">
            <Link
              href="/characters"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:text-crimson"
            >
              View all characters
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
