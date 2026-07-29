'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { lore } from '@/lib/data'

export function LoreAccordion() {
  const [open, setOpen] = useState<number>(0)

  return (
    <div className="border-t border-white/10">
      {lore.map((entry, i) => {
        const isOpen = open === i
        return (
          <div key={entry.term} className="border-b border-white/10">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center gap-4 py-6 text-left md:gap-8 md:py-8"
            >
              <span className="font-jp text-xs text-crimson/70 md:text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={`font-display text-2xl uppercase leading-none transition-colors duration-300 md:text-4xl ${
                      isOpen
                        ? 'text-bone'
                        : 'text-foreground/70 group-hover:text-bone'
                    }`}
                  >
                    {entry.term}
                  </span>
                  <span className="font-jp text-sm text-cyan/80">
                    {entry.kana}
                  </span>
                </span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg transition-all duration-300 ${
                  isOpen
                    ? 'rotate-45 border-crimson bg-crimson text-white'
                    : 'text-muted-foreground group-hover:border-crimson'
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pl-8 text-base leading-relaxed text-muted-foreground md:pl-16">
                    {entry.definition}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
