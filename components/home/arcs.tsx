'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { arcs } from '@/lib/data'
import { Reveal } from '@/components/motion'

export function ArcsPreview() {
  const [active, setActive] = useState<number | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 150, damping: 20 })
  const y = useSpring(my, { stiffness: 150, damping: 20 })

  function onMove(e: React.MouseEvent) {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-jp text-sm text-crimson">04</span>
              <span className="h-px w-10 bg-crimson" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
                The Saga
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-bone md:text-7xl">
              Arc index
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Link
            href="/episodes"
            className="text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:text-crimson"
          >
            Full episode guide →
          </Link>
        </Reveal>
      </div>

      <div ref={wrapRef} onMouseMove={onMove} className="relative">
        {/* Floating preview image */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
              style={{ x, y, translateX: '-50%', translateY: '-50%' }}
              className="pointer-events-none absolute left-0 top-0 z-20 hidden h-56 w-80 overflow-hidden rounded-lg border border-white/10 md:block"
            >
              <img
                src={arcs[active].image || '/placeholder.svg'}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-crimson/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <ul>
          {arcs.map((arc, i) => (
            <Reveal key={arc.no} delay={i * 0.04} as="li">
              <Link
                href="/episodes"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/10 py-6 transition-colors md:gap-8 md:py-8"
              >
                <span className="font-jp text-sm text-crimson/70 md:text-base">
                  {arc.no}
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-5">
                  <h3 className="font-display text-3xl uppercase leading-none text-foreground/80 transition-all duration-300 group-hover:translate-x-3 group-hover:text-bone md:text-5xl">
                    {arc.title}
                  </h3>
                  <span className="font-jp text-sm text-muted-foreground transition-colors group-hover:text-cyan">
                    {arc.kana}
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs">
                  {arc.episodes}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
