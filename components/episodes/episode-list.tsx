'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { arcs, seasons } from '@/lib/data'
import { Reveal } from '@/components/motion'

type Filter = 'all' | 1 | 2

const filters: { id: Filter; label: string; kana: string }[] = [
  { id: 'all', label: 'All Arcs', kana: '全て' },
  { id: 1, label: 'Season 1', kana: '一期' },
  { id: 2, label: 'Season 2', kana: '二期' },
]

export function EpisodeList() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(
    () => (filter === 'all' ? arcs : arcs.filter((a) => a.season === filter)),
    [filter],
  )

  const totalEpisodes = useMemo(
    () => visible.reduce((sum, a) => sum + a.count, 0),
    [visible],
  )

  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
      {/* Filter bar */}
      <div className="sticky top-16 z-30 -mx-5 mb-14 border-b border-white/5 bg-background/80 px-5 py-4 backdrop-blur-xl md:top-20 md:mx-0 md:rounded-lg md:border md:border-white/10 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => {
              const active = filter === f.id
              return (
                <button
                  key={String(f.id)}
                  onClick={() => setFilter(f.id)}
                  className={`relative overflow-hidden rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                    active
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-bone'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 bg-crimson"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="mr-2 font-jp text-[10px] opacity-70">
                    {f.kana}
                  </span>
                  {f.label}
                </button>
              )
            })}
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>
              <span className="font-jp text-base text-cyan">{visible.length}</span>{' '}
              Arcs
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span>
              <span className="font-jp text-base text-cyan">{totalEpisodes}</span>{' '}
              Episodes
            </span>
          </div>
        </div>
      </div>

      {/* Episode blocks */}
      <motion.div layout className="flex flex-col gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((arc, i) => {
            const flipped = i % 2 === 1
            const season = seasons.find((s) => s.id === arc.season)
            return (
              <motion.article
                key={arc.no}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid overflow-hidden rounded-lg border border-white/10 bg-surface md:grid-cols-12"
              >
                {/* Image */}
                <div
                  className={`relative h-56 overflow-hidden md:col-span-5 md:h-auto ${
                    flipped ? 'md:order-2' : ''
                  }`}
                >
                  <img
                    src={arc.image || '/placeholder.svg'}
                    alt={`${arc.title} arc key art`}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent md:bg-gradient-to-r" />
                  <span className="absolute left-5 top-5 rounded-sm border border-white/10 bg-background/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan backdrop-blur-sm">
                    {season?.label}
                  </span>
                  <span className="pointer-events-none absolute bottom-3 right-4 font-display text-7xl leading-none text-white/10 md:text-8xl">
                    {arc.no}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-4 p-6 md:col-span-7 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="font-jp text-sm text-crimson">{arc.kana}</span>
                    <span className="h-px w-8 bg-crimson/60" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {arc.episodes}
                    </span>
                  </div>

                  <h2 className="font-display text-4xl uppercase leading-[0.9] text-bone transition-colors group-hover:text-crimson md:text-6xl">
                    {arc.title}
                  </h2>

                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {arc.synopsis}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Episodes
                      </p>
                      <p className="mt-1 font-display text-2xl text-foreground">
                        {arc.count}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Aired
                      </p>
                      <p className="mt-1 font-display text-2xl text-foreground">
                        {arc.year}
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Storyline
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {season?.tag}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Season legend */}
      <Reveal className="mt-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {seasons.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-surface px-6 py-5"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-jp text-xl text-crimson">{s.kana}</span>
                <div>
                  <p className="font-display text-2xl uppercase text-bone">
                    {s.label}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.tag}
                  </p>
                </div>
              </div>
              <span className="text-sm text-cyan">{s.year}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
