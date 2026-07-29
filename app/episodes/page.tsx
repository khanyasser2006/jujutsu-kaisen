import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { EpisodeList } from '@/components/episodes/episode-list'
import { Marquee } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Episodes — Jujutsu Kaisen Archive',
  description:
    'The complete arc-by-arc episode guide to Jujutsu Kaisen — from Cursed Womb to the Shibuya Incident. Filter by season and relive every battle.',
}

export default function EpisodesPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="The Saga"
        title="Episodes"
        kana="物語"
        description="Every arc of the Tokyo Jujutsu High saga, mapped from the first cursed finger to the fall of Shibuya."
      />

      <div className="border-y border-white/5 bg-crimson py-2.5">
        <Marquee duration={30}>
          <span className="mx-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Watch Order
          </span>
          <span className="mx-6 font-jp text-sm text-white/70">視聴順</span>
          <span className="mx-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            47 Episodes
          </span>
          <span className="mx-6 font-jp text-sm text-white/70">全47話</span>
          <span className="mx-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Two Seasons
          </span>
          <span className="mx-6 font-jp text-sm text-white/70">二期</span>
        </Marquee>
      </div>

      <div className="pt-16 md:pt-24">
        <EpisodeList />
      </div>
    </>
  )
}
