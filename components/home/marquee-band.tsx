import { Marquee } from '@/components/motion'

const words = [
  'Domain Expansion',
  'Cursed Technique',
  'Reverse Cursed Energy',
  'Black Flash',
  'Binding Vow',
  'Special Grade',
]

export function MarqueeBand() {
  return (
    <div className="border-y border-white/5 bg-crimson py-3">
      <Marquee duration={35}>
        {words.map((w, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            {w}
            <span className="text-white/50">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
