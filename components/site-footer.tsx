import Link from 'next/link'
import { navLinks } from '@/lib/data'
import { Marquee } from '@/components/motion'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-surface">
      <div className="border-b border-white/5 py-6">
        <Marquee duration={30}>
          <span className="mx-8 font-display text-2xl uppercase tracking-wide text-white/10">
            Jujutsu Kaisen
          </span>
          <span className="mx-8 font-jp text-2xl text-crimson/30">呪術廻戦</span>
          <span className="mx-8 font-display text-2xl uppercase tracking-wide text-white/10">
            Cursed Energy
          </span>
          <span className="mx-8 font-jp text-2xl text-cyan/30">領域展開</span>
          <span className="mx-8 font-display text-2xl uppercase tracking-wide text-white/10">
            Tokyo Jujutsu High
          </span>
          <span className="mx-8 font-jp text-2xl text-crimson/30">五条 悟</span>
        </Marquee>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-jp text-3xl font-black text-crimson">呪術廻戦</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A fan-made tribute archive celebrating the world of Jujutsu Kaisen —
            its sorcerers, its curses, and the fragile line between them. Built
            for the love of the series.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Navigate
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-crimson"
                >
                  <span className="font-jp text-[10px] text-crimson/60">
                    {l.index}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Transmission
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Domain expansions detected across Tokyo, Kyoto & Shibuya sectors.
            Stay behind the veil.
          </p>
          <div className="mt-5 flex gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-crimson" />
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Veil Active
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-white/5 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Cursed Energy Archive — Fan Project.</p>
        <p>
          Jujutsu Kaisen © Gege Akutami / Shueisha. Non-commercial tribute.
        </p>
      </div>
    </footer>
  )
}
