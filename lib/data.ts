export type Character = {
  id: string
  name: string
  kana: string
  role: string
  grade: string
  technique: string
  affiliation: string
  image: string
  accent: 'crimson' | 'cyan' | 'bone'
  quote: string
  bio: string
}

export const characters: Character[] = [
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    kana: '五条 悟',
    role: 'The Strongest',
    grade: 'Special Grade',
    technique: 'Limitless · Six Eyes',
    affiliation: 'Tokyo Jujutsu High — Instructor',
    image: '/images/gojo-closeup.jpg',
    accent: 'cyan',
    quote: 'Throughout Heaven and Earth, I alone am the honored one.',
    bio: 'Heir to the Gojo and Zenin lineages, Satoru is the first in centuries to inherit both the Six Eyes and the Limitless. His mere existence reshaped the balance of the jujutsu world.',
  },
  {
    id: 'yuji',
    name: 'Yuji Itadori',
    kana: '虎杖 悠仁',
    role: "Sukuna's Vessel",
    grade: 'Grade 1 (Special)',
    technique: 'Superhuman Physique · Divergent Fist',
    affiliation: 'Tokyo Jujutsu High — 1st Year',
    image: '/images/trio-key.jpg',
    accent: 'crimson',
    quote: 'I want to help people. That is my curse and my choice.',
    bio: 'An ordinary teenager with monstrous physical ability who swallowed a finger of Ryomen Sukuna to save his friends, becoming the vessel of the King of Curses.',
  },
  {
    id: 'megumi',
    name: 'Megumi Fushiguro',
    kana: '伏黒 恵',
    role: 'The Strategist',
    grade: 'Grade 2',
    technique: 'Ten Shadows Technique',
    affiliation: 'Tokyo Jujutsu High — 1st Year',
    image: '/images/students-green.jpg',
    accent: 'bone',
    quote: 'I will not regret how I choose to save people.',
    bio: 'A stoic sorcerer who summons shikigami from his shadow. Scouted personally by Gojo, he fights for a world where good people are the ones who survive.',
  },
  {
    id: 'nobara',
    name: 'Nobara Kugisaki',
    kana: '釘崎 野薔薇',
    role: 'The Iron Will',
    grade: 'Grade 3',
    technique: 'Straw Doll Technique',
    affiliation: 'Tokyo Jujutsu High — 1st Year',
    image: '/images/cast-skytree.jpg',
    accent: 'crimson',
    quote: 'I am Nobara Kugisaki, and I love who I am.',
    bio: 'A fierce sorcerer from the countryside who channels cursed energy through nails and a hammer. Unshakably confident and loyal to the ones she chooses.',
  },
]

export type Arc = {
  no: string
  title: string
  kana: string
  episodes: string
  season: 1 | 2
  count: number
  year: string
  synopsis: string
  image: string
}

export const arcs: Arc[] = [
  {
    no: '01',
    title: 'Cursed Womb',
    kana: '呪胎戴天',
    episodes: 'EP 01–05',
    season: 1,
    count: 5,
    year: '2020',
    synopsis:
      'Yuji Itadori swallows a cursed finger and is dragged into the hidden world of jujutsu sorcery, meeting Gojo and joining Tokyo Jujutsu High.',
    image: '/images/trio-key.jpg',
  },
  {
    no: '02',
    title: 'Vs. Mahito',
    kana: '呪術師と呪霊',
    episodes: 'EP 06–13',
    season: 1,
    count: 8,
    year: '2020',
    synopsis:
      'The first years confront the cursed spirit Mahito and the schemes of Suguru Geto, learning the true cost of protecting the living.',
    image: '/images/gojo-neon.jpg',
  },
  {
    no: '03',
    title: 'Kyoto Goodwill Event',
    kana: '交流会',
    episodes: 'EP 14–21',
    season: 1,
    count: 8,
    year: '2021',
    synopsis:
      'Tokyo and Kyoto schools clash in a sanctioned exchange that turns deadly as curses infiltrate the grounds.',
    image: '/images/gojo-field.png',
  },
  {
    no: '04',
    title: 'Origin of Obedience',
    kana: '起首雷同',
    episodes: 'EP 22–24',
    season: 1,
    count: 3,
    year: '2021',
    synopsis:
      'A cursed-womb incident inside a detention center forces the students to face special-grade horrors alone.',
    image: '/images/gojo-sketch.jpg',
  },
  {
    no: '05',
    title: 'Hidden Inventory',
    kana: '懐玉',
    episodes: 'S2 · EP 01–05',
    season: 2,
    count: 5,
    year: '2023',
    synopsis:
      'A decade in the past — the legend of the strongest begins as young Gojo and Geto escort a sacred vessel.',
    image: '/images/gojo-sakura.jpg',
  },
  {
    no: '06',
    title: 'Shibuya Incident',
    kana: '渋谷事変',
    episodes: 'S2 · EP 06–23',
    season: 2,
    count: 18,
    year: '2023',
    synopsis:
      'On Halloween night, Gojo is sealed and Shibuya becomes a battlefield where every sorcerer is pushed past their limit.',
    image: '/images/gojo-space.jpg',
  },
]

export const seasons = [
  {
    id: 1,
    label: 'Season 1',
    kana: '一期',
    tag: 'Tokyo Jujutsu High',
    year: '2020 – 2021',
  },
  {
    id: 2,
    label: 'Season 2',
    kana: '二期',
    tag: 'Hidden Inventory / Shibuya',
    year: '2023',
  },
] as const

export type LoreEntry = {
  term: string
  kana: string
  definition: string
}

export const lore: LoreEntry[] = [
  {
    term: 'Cursed Energy',
    kana: '呪力',
    definition:
      'The negative emotions leaking from every human — fear, regret, anger. Sorcerers learn to harness this flow as the fuel for every technique.',
  },
  {
    term: 'Cursed Spirits',
    kana: '呪霊',
    definition:
      'Manifestations of accumulated human malice. Graded from 4 to Special, the strongest can annihilate cities and think for themselves.',
  },
  {
    term: 'Domain Expansion',
    kana: '領域展開',
    definition:
      'The pinnacle of jujutsu: an innate domain built from cursed energy that guarantees a technique will land upon everything inside it.',
  },
  {
    term: 'Binding Vows',
    kana: '縛り',
    definition:
      'Self-imposed restrictions that amplify power in exchange for risk — the hidden economy behind every sorcerer’s strength.',
  },
  {
    term: 'The Six Eyes',
    kana: '六眼',
    definition:
      'A rare ocular inheritance that perceives cursed energy in perfect detail, letting its wielder use techniques at near-zero cost.',
  },
  {
    term: 'Limitless',
    kana: '無下限',
    definition:
      'The Gojo family technique that manipulates space itself through infinity — an untouchable void placed between attacker and target.',
  },
]

export const navLinks = [
  { label: 'Home', href: '/', index: '01' },
  { label: 'Characters', href: '/characters', index: '02' },
  { label: 'Lore', href: '/lore', index: '03' },
  { label: 'Episodes', href: '/episodes', index: '04' },
  { label: 'About', href: '/about', index: '05' },
]
