'use client'

import { motion } from 'motion/react'

export function PageHero({
  index,
  eyebrow,
  title,
  kana,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  kana: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
      {/* giant faint kana bleeding off the right edge */}
      <motion.span
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-6 top-16 select-none font-jp text-[30vw] leading-none text-white/[0.03] md:text-[20vw]"
      >
        {kana}
      </motion.span>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="font-jp text-sm text-crimson">{index}</span>
          <span className="h-px w-10 bg-crimson" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
            {eyebrow}
          </span>
        </motion.div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl uppercase leading-[0.85] text-bone md:text-8xl lg:text-9xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground md:pb-3 md:text-right"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
