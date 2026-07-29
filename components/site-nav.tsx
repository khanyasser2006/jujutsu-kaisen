'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks } from '@/lib/data'

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9990] transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-background/80 py-3 backdrop-blur-xl'
            : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="font-jp text-lg font-black leading-none text-crimson transition-transform duration-300 group-hover:scale-110">
              呪術廻戦
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:inline">
              Jujutsu Kaisen
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex items-baseline gap-1.5 text-sm"
                >
                  <span className="font-jp text-[10px] text-crimson/70">
                    {link.index}
                  </span>
                  <span
                    className={`uppercase tracking-wide transition-colors ${
                      active
                        ? 'text-foreground'
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-crimson transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-[9992] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-foreground transition-all duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-foreground transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-foreground transition-all duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9991] flex flex-col justify-center bg-background/97 px-8 backdrop-blur-md md:hidden"
          >
            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 font-jp text-[38vw] leading-none text-white/[0.03]">
              呪
            </span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="flex items-baseline gap-3 py-2"
                  >
                    <span className="font-jp text-sm text-crimson">
                      {link.index}
                    </span>
                    <span
                      className={`font-display text-5xl uppercase leading-none tracking-wide ${
                        pathname === link.href
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
