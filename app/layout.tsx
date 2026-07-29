import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoJp = Noto_Sans_JP({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JUJUTSU KAISEN — Cursed Energy Archive',
  description:
    'An immersive fan tribute to Jujutsu Kaisen. Explore the sorcerers, the cursed lore, and every arc of the Tokyo Jujutsu High saga.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08080b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} ${notoJp.variable} grain antialiased`}
      >
        <ScrollProgress />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
