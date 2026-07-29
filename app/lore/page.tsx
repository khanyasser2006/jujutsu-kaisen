import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { LoreAccordion } from '@/components/lore/lore-accordion'
import { Reveal, Parallax, StaggerGroup, StaggerItem } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Lore — Jujutsu Kaisen Archive',
  description:
    'Decode the rules of the cursed world: cursed energy, domain expansion, binding vows, the Six Eyes and Limitless.',
}

const grades = [
  {
    grade: 'Grade 4 – 3',
    kana: '四級・三級',
    label: 'Minor Curses',
    desc: 'Low-level spirits, handled by newer sorcerers. Dangerous in numbers, rarely fatal alone.',
    width: 'w-[35%]',
  },
  {
    grade: 'Grade 2 – 1',
    kana: '二級・一級',
    label: 'Serious Threats',
    desc: 'Capable of killing trained sorcerers. Requires experienced field operatives to exorcise.',
    width: 'w-[58%]',
  },
  {
    grade: 'Semi-Special',
    kana: '準一級',
    label: 'Near-Catastrophic',
    desc: 'On the threshold of the highest tier — an existential danger to entire districts.',
    width: 'w-[78%]',
  },
  {
    grade: 'Special Grade',
    kana: '特級',
    label: 'World-Ending',
    desc: 'Sukuna, Gojo, Mahito. Powers that can level cities and rewrite the balance of the world.',
    width: 'w-full',
  },
]

export default function LorePage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="The Cursed World"
        title="Lore"
        kana="呪術"
        description="A field guide to the mechanics of jujutsu — the energy, the techniques, and the vows that bind them."
      />

      {/* Intro split */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Parallax speed={36}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/5">
                <img
                  src="/images/gojo-neon.jpg"
                  alt="Cursed energy manifest"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </Parallax>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone md:text-6xl">
                Energy born
                <br />
                from <span className="text-crimson">fear</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Every human leaks cursed energy shaped by their negative
                emotions. Left unchecked it pools in places of suffering and
                gives birth to curses. Jujutsu sorcerers learn to reverse that
                flow — turning fear into a weapon and exorcising the horrors it
                creates.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Mastery is not about raw power alone. It is about perception,
                control, and the willingness to make a vow you cannot take back.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <Reveal>
            <h2 className="font-display text-4xl uppercase leading-none text-bone md:text-6xl">
              The Codex
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="font-jp text-sm text-muted-foreground">
              用語集 — click to reveal
            </span>
          </Reveal>
        </div>
        <LoreAccordion />
      </section>

      {/* Grade ladder */}
      <section className="border-t border-white/5 bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mb-12 flex items-center gap-3">
            <span className="font-jp text-sm text-crimson">階級</span>
            <span className="h-px w-10 bg-crimson" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
              Curse Grades
            </span>
          </div>

          <StaggerGroup className="flex flex-col gap-4">
            {grades.map((g) => (
              <StaggerItem key={g.grade}>
                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 md:p-7">
                  <div
                    className={`absolute inset-y-0 left-0 ${g.width} bg-gradient-to-r from-crimson-deep/40 to-transparent transition-all duration-700`}
                  />
                  <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="font-jp text-lg text-cyan/80">
                        {g.kana}
                      </span>
                      <h3 className="font-display text-2xl uppercase text-bone md:text-3xl">
                        {g.grade}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                      {g.label}
                    </span>
                  </div>
                  <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {g.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}
