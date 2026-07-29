import type { Metadata } from 'next'
import { characters } from '@/lib/data'
import { PageHero } from '@/components/page-hero'
import { CharacterProfile } from '@/components/characters/character-profile'
import { Marquee } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Characters — Jujutsu Kaisen Archive',
  description:
    'Meet the sorcerers of Tokyo Jujutsu High — Satoru Gojo, Yuji Itadori, Megumi Fushiguro and Nobara Kugisaki.',
}

export default function CharactersPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="The Sorcerers"
        title="Characters"
        kana="呪術師"
        description="The students and instructor at the heart of Tokyo Jujutsu High — and the powers they wager their lives on."
      />

      <div className="border-y border-white/5 bg-crimson py-2.5">
        <Marquee duration={28}>
          <span className="mx-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Tokyo Jujutsu High
          </span>
          <span className="mx-6 font-jp text-sm text-white/70">呪術高専</span>
          <span className="mx-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            First Years
          </span>
          <span className="mx-6 font-jp text-sm text-white/70">一年生</span>
        </Marquee>
      </div>

      {characters.map((c, i) => (
        <CharacterProfile key={c.id} character={c} index={i} />
      ))}
    </>
  )
}
