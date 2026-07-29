'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { Character } from '@/lib/data'

const accentText: Record<Character['accent'], string> = {
  crimson: 'text-crimson',
  cyan: 'text-cyan',
  bone: 'text-bone',
}
const accentBar: Record<Character['accent'], string> = {
  crimson: 'bg-crimson',
  cyan: 'bg-cyan',
  bone: 'bg-bone',
}

export function CharacterCard({ character }: { character: Character }) {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(useTransform(ry, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 15,
  })
  const rotateY = useSpring(useTransform(rx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    rx.set((e.clientX - rect.left) / rect.width - 0.5)
    ry.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function reset() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative aspect-[3/4.4] overflow-hidden rounded-lg border border-white/5 bg-surface"
    >
      <img
        src={character.image || '/placeholder.svg'}
        alt={character.name}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Big kana top-right */}
      <span
        className={`absolute right-3 top-2 font-jp text-6xl leading-none text-white/10 transition-colors duration-500 group-hover:text-white/20`}
      >
        {character.kana.slice(0, 2)}
      </span>

      {/* Grade tag */}
      <div className="absolute left-4 top-4 rounded-sm border border-white/10 bg-background/50 px-2.5 py-1 backdrop-blur-sm">
        <span className={`text-[10px] font-semibold uppercase tracking-widest ${accentText[character.accent]}`}>
          {character.grade}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className={`h-0.5 w-8 ${accentBar[character.accent]} mb-3 block transition-all duration-500 group-hover:w-16`} />
        <p className="font-jp text-sm text-foreground/60">{character.kana}</p>
        <h3 className="font-display text-2xl uppercase leading-none text-bone">
          {character.name}
        </h3>
        <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${accentText[character.accent]}`}>
          {character.role}
        </p>

        {/* Reveal-on-hover technique + quote */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-3 text-xs leading-relaxed text-muted-foreground">
              {character.technique}
            </p>
            <p className="mt-2 border-l-2 border-crimson/60 pl-3 text-xs italic leading-relaxed text-foreground/70">
              “{character.quote}”
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
