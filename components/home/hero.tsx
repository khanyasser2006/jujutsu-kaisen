'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useRef, useState } from 'react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // mouse parallax
  const mx = useSpring(0, { stiffness: 60, damping: 20 })
  const my = useSpring(0, { stiffness: 60, damping: 20 })
  const [hovering, setHovering] = useState(false)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const { innerWidth, innerHeight } = window
    mx.set((e.clientX / innerWidth - 0.5) * 30)
    my.set((e.clientY / innerHeight - 0.5) * 30)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0"
      >
        <motion.img
          src="/images/trio-key.jpg"
          alt="Yuji, Megumi and Gojo of Tokyo Jujutsu High"
          style={{ x: mx, y: my }}
          className="h-full w-full scale-110 object-cover object-[center_25%]"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      {/* Vertical kana on right */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:block"
      >
        <p
          className="font-jp text-2xl font-bold tracking-[0.5em] text-bone/80"
          style={{ writingMode: 'vertical-rl' }}
        >
          呪術廻戦 · 東京都立呪術高等専門学校
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-crimson" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
            Cursed Energy Archive
          </span>
        </motion.div>

        <h1 className="font-display uppercase leading-[0.82] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[19vw] text-bone md:text-[13vw]"
          >
            Jujutsu
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block text-stroke-crimson text-[19vw] md:text-[13vw]"
          >
            Kaisen
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
            Where negative human emotion festers into curses, a handful of
            sorcerers stand behind the veil. Step into the world of Tokyo
            Jujutsu High.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/characters"
              className="group relative overflow-hidden rounded-sm bg-crimson px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white"
            >
              <span className="relative z-10">Enter the Archive</span>
              <span className="absolute inset-0 -translate-x-full bg-cyan transition-transform duration-500 group-hover:translate-x-0" />
              <span className="absolute inset-0 z-[5] flex items-center justify-center text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-semibold uppercase tracking-wider">
                  領域展開
                </span>
              </span>
            </Link>
            <Link
              href="/lore"
              className="text-sm font-semibold uppercase tracking-wider text-foreground/80 underline-offset-4 transition-colors hover:text-crimson hover:underline"
            >
              The Lore →
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Corner stat */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-16 right-5 z-10 hidden text-right md:right-10 md:block lg:bottom-20"
      >
        <p className="font-display text-5xl text-cyan">04</p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Story Arcs
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ opacity: hovering ? 1 : 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-crimson to-transparent"
        />
      </motion.div>
    </section>
  )
}
