import { Hero } from '@/components/home/hero'
import { MarqueeBand } from '@/components/home/marquee-band'
import { Intro } from '@/components/home/intro'
import { Featured } from '@/components/home/featured'
import { ArcsPreview } from '@/components/home/arcs'
import { CtaBand } from '@/components/home/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Intro />
      <Featured />
      <CtaBand />
      <ArcsPreview />
    </>
  )
}
