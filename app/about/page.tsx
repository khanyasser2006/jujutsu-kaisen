import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import {
  Reveal,
  Parallax,
  StaggerGroup,
  StaggerItem,
  Marquee,
} from '@/components/motion'

export const metadata: Metadata = {
  title: 'About — Jujutsu Kaisen Archive',
  description:
    'About the Cursed Energy Archive — a fan-made tribute to Gege Akutami’s Jujutsu Kaisen and the world of Tokyo Jujutsu High.',
}

const stats = [
  { value: '2018', label: 'Serialization', kana: '連載開始' },
  { value: '4', label: 'Curse Grades', kana: '呪いの等級' },
  { value: '47', label: 'Episodes', kana: '話数' },
  { value: '∞', label: 'Limitless', kana: '無下限' },
]

const principles = [
  {
    no: '01',
    title: 'Face the fear',
    kana: '恐怖',
    body: 'Cursed energy is born from negative emotion. Sorcerers do not run from fear — they learn to reverse its flow and turn it into a weapon.',
  },
  {
    no: '02',
    title: 'Honor the vow',
    kana: '縛り',
    body: 'Every source of strength carries a binding vow. Power without restriction is hollow; the vow is what gives it meaning.',
  },
  {
    no: '03',
    title: 'Choose to save',
    kana: '救済',
    body: 'From Yuji to Gojo, every sorcerer defines what a "proper death" means. To protect others is a choice made again and again.',
  },
]

const credits = [
  { role: 'Original Story', name: 'Gege Akutami' },
  { role: 'Animation', name: 'MAPPA' },
  { role: 'Publisher', name: 'Shueisha — Weekly Shōnen Jump' },
  { role: 'This Archive', name: 'A non-commercial fan tribute' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="The Archive"
        title="About"
        kana="呪術廻戦"
        description="A fan-built tribute to the world of Jujutsu Kaisen — its sorcerers, its curses, and the vows that bind them."
      />

      {/* Manifesto split */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <Reveal>
              <p className="font-jp text-2xl text-crimson">呪術廻戦</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[0.92] text-bone md:text-6xl">
                A curse can only
                <br />
                be exorcised by
                <br />
                another <span className="text-crimson">curse</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                The Cursed Energy Archive is an immersive fan tribute to Gege
                Akutami’s Jujutsu Kaisen. It gathers the sorcerers of Tokyo
                Jujutsu High, the mechanics of the cursed world, and every arc
                of the saga into a single cinematic experience.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Built for fans, by fans — a place to step behind the veil and
                explore the world that most people never see.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Parallax speed={40}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/5">
                <img
                  src="/images/guide-cover.jpg"
                  alt="Jujutsu Kaisen official cast artwork"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-white/5 bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center md:text-left">
                  <p className="font-display text-5xl leading-none text-cyan md:text-7xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground">
                    {s.label}
                  </p>
                  <p className="mt-1 font-jp text-xs text-muted-foreground">
                    {s.kana}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-jp text-sm text-crimson">信条</span>
          <span className="h-px w-10 bg-crimson" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
            Guiding Principles
          </span>
        </div>

        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <StaggerItem key={p.no}>
              <div className="group h-full rounded-lg border border-white/10 bg-surface p-7 transition-colors hover:border-crimson/40">
                <div className="flex items-baseline justify-between">
                  <span className="font-jp text-sm text-crimson/70">{p.no}</span>
                  <span className="font-jp text-3xl text-white/10 transition-colors group-hover:text-cyan/30">
                    {p.kana}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase leading-none text-bone">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Parallax quote band */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden border-y border-white/5">
        <Parallax speed={80} className="absolute inset-0">
          <img
            src="/images/gojo-teal.jpg"
            alt="Satoru Gojo"
            className="h-[120%] w-full object-cover object-center"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <blockquote className="max-w-2xl font-display text-4xl uppercase leading-[0.95] text-bone md:text-7xl">
              “Throughout heaven and earth,
              <span className="text-cyan"> I alone </span>
              am the honored one.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-jp text-lg text-muted-foreground">
              — 五条 悟 · Satoru Gojo
            </p>
          </Reveal>
        </div>
      </section>

      {/* Credits */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="font-display text-4xl uppercase leading-none text-bone md:text-5xl">
                Credits
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                All characters, names, and artwork belong to their respective
                creators. This archive claims no ownership.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <StaggerGroup>
              {credits.map((c) => (
                <StaggerItem key={c.role}>
                  <div className="flex items-center justify-between gap-6 border-b border-white/10 py-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {c.role}
                    </span>
                    <span className="text-right font-display text-xl uppercase text-bone md:text-2xl">
                      {c.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/5 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10">
          <Reveal>
            <p className="font-jp text-lg text-cyan">呪術高専</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-3 max-w-4xl text-balance font-display text-4xl uppercase leading-[0.9] text-bone md:text-7xl">
              Step behind the veil
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/characters"
                className="group inline-flex items-center gap-3 rounded-sm bg-crimson px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-crimson-deep"
              >
                Meet the sorcerers
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
              <Link
                href="/episodes"
                className="inline-flex items-center gap-3 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:border-cyan hover:text-cyan"
              >
                Browse the saga
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
