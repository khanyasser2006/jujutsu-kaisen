# 💀 Jujutsu Kaisen Site

A cinematic, scroll-driven fan tribute to *Jujutsu Kaisen* — exploring the sorcerers of Tokyo Jujutsu High through a parallax hero, a filterable arc index, an interactive character archive, and a deep dive into the cursed world's rules and terminology, all wrapped in a high-contrast crimson-and-cyan dark theme.

*A fan-made project built for the love of the series — not affiliated with or endorsed by Gege Akutami, MAPPA, Shueisha, or any official Jujutsu Kaisen rights holders.*

![Next.js](https://img.shields.io/badge/-Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/-React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/-Motion-EF008F?style=flat-square)
![shadcn/ui](https://img.shields.io/badge/-shadcn%2Fui-000000?style=flat-square)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🧰 Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- shadcn/ui (Base UI primitives)
- Vercel Analytics
- Google Fonts (Anton, Inter & Noto Sans JP)

---

## ✨ Features

Here's what you can explore on the site:

- **Parallax + Cursor-Reactive Hero**: A full-screen opening that responds to both scroll position and mouse movement, with a staggered title reveal and a hover easter egg that reveals "Domain Expansion" in Japanese.
- **Scroll Progress Indicator**: A crimson-to-cyan gradient bar fixed to the top of the viewport that tracks reading progress across the whole site.
- **3D Tilt Character Cards**: Cards that tilt toward the cursor on hover, revealing each sorcerer's technique and signature quote.
- **Cursor-Following Arc Previews**: Hovering over an arc in the homepage index floats a live thumbnail image that tracks your cursor.
- **Filterable Episode Archive**: A season filter with an animated sliding pill (Season 1 / Season 2 / All Arcs) that smoothly reflows the episode list.
- **Alternating Character Profiles**: Zig-zag, scroll-parallax profile sections for each sorcerer, with drifting background kanji and stat call-outs.
- **Lore Accordion & Curse Grade Ladder**: An expandable glossary of jujutsu terminology, plus a bar-style visualization ranking curse grades from Minor to Special.
- **Bilingual Typography**: Japanese terms and character names rendered throughout in authentic kana/kanji alongside their English translations.
- **Reusable Motion Toolkit**: A shared set of scroll-reveal, stagger, parallax, magnetic-hover, and marquee components reused across every page.
- **Responsive Navigation**: A blurred sticky header with a full-screen animated mobile menu and a giant kanji watermark.

---

## 🪜 The Process

I started by setting up a Next.js, Tailwind, and shadcn/ui foundation, then spent the first stretch of real design work on the visual identity: a near-black palette split between a crimson accent for danger and a cyan accent for Gojo's Limitless technique, paired with a bold display font (Anton) and Noto Sans JP so Japanese terms would render properly throughout the site.

With the palette and type system settled, I built a small motion toolkit — Reveal, StaggerGroup, Parallax, Magnetic, and Marquee — and used it to construct the homepage: a hero that reacts to both scroll and cursor movement, a marquee of jujutsu terminology, an introduction section, a staggered grid of sorcerer cards, and a cinematic quote band.

From there I moved on to the three deeper pages. The Characters page reuses one profile section in an alternating zig-zag layout for each sorcerer. The Episodes page needed to feel more like a database than a static list, so I added season filtering with an animated sliding pill, plus a cursor-following preview thumbnail on the homepage's arc index. The Lore page pairs an accordion glossary with a bar-style curse-grade ladder to visualize the power scale.

The biggest challenge was balancing all of that motion — parallax, 3D tilt, cursor tracking, shared layout animations — without it feeling gimmicky or hurting performance, and making sure the bilingual typography stayed legible at every screen size, from a giant background watermark down to a small inline label.

---

## 📚 What I Learned

This project pushed me further into physics-based interaction design and structured content modeling than anything I'd built before.

- **Physics-Based Interactions with Motion**: Used spring-smoothed `useMotionValue`/`useTransform` pairs to build 3D card tilt, magnetic hover, and cursor-following previews.
- **Shared Layout Animations**: Used Motion's `layoutId` to animate the active season filter pill smoothly between positions instead of just toggling classes.
- **Typed Content Modeling**: Centralized characters, arcs, seasons, and lore into typed data structures in `lib/data.ts`, so every list-driven section — cards, filters, accordions — renders from a single source of truth.
- **Bilingual Type Design**: Balanced a bold Latin display font against Noto Sans JP so kana and kanji render crisply at both large watermark sizes and small inline labels.
- **Building a Reusable Motion Toolkit**: Abstracted scroll-reveal, stagger, parallax, and marquee patterns into one shared file instead of duplicating animation logic per component.
- **Scroll-Linked UI Feedback**: Combined a global scroll progress bar with per-section scroll-triggered reveals to keep the site feeling connected as you scroll.

---

## 🔧 How Can It Be Improved?

- Add an ESLint config — the `lint` script (`eslint .`) is already wired up in `package.json`, but there's no `eslint.config.*` file yet, so it currently has nothing to run against.
- Wire up the existing shadcn/ui `Button` component and `lucide-react` icons — both are already installed, but every CTA and nav link is still a hand-styled anchor/`Link` tag.
- Add real image optimization — `next.config.mjs` currently disables it entirely (`images.unoptimized: true`).
- Re-enable TypeScript build error checking instead of `ignoreBuildErrors: true` in `next.config.mjs`.
- Add `prefers-reduced-motion` support, since nearly every section relies on parallax, tilt, or cursor-tracked motion.
- Move the curse-grade data on the Lore page into `lib/data.ts` alongside the rest of the content, for consistency.
- Add custom not-found and error pages, plus a sitemap and `robots.txt`, for better SEO and smoother handling of invalid routes.
- Add automated tests, since the project currently has none.

---

## 🚀 Running the Project

### Step 1 — Clone the Repository

```bash
git clone https://github.com/<your-username>/jujutsu-kaisen-fan-site.git
cd jujutsu-kaisen-fan-site
```

---

### Step 2 — Install Dependencies

**Prerequisites:** Node.js 20.9+ (required by Next.js 16)

```bash
pnpm install
```

*(`npm install` also works, but the project ships with a `pnpm-lock.yaml`, so pnpm is recommended.)*

---

### Step 3 — Run the Development Server

```bash
pnpm dev
```

---

### Step 4 — Open the Application

Open the address shown in your terminal (usually):

```
http://localhost:3000
```

---

## 🎥 # 💀 Jujutsu Kaisen Tribute Site

A cinematic, scroll-driven fan tribute to *Jujutsu Kaisen* — exploring the sorcerers of Tokyo Jujutsu High through a parallax hero, a filterable arc index, an interactive character archive, and a deep dive into the cursed world's rules and terminology, all wrapped in a high-contrast crimson-and-cyan dark theme.

*A fan-made project built for the love of the series — not affiliated with or endorsed by Gege Akutami, MAPPA, Shueisha, or any official Jujutsu Kaisen rights holders.*

![Next.js](https://img.shields.io/badge/-Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/-React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/-Motion-EF008F?style=flat-square)
![shadcn/ui](https://img.shields.io/badge/-shadcn%2Fui-000000?style=flat-square)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🧰 Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- shadcn/ui (Base UI primitives)
- Vercel Analytics
- Google Fonts (Anton, Inter & Noto Sans JP)

---

## ✨ Features

Here's what you can explore on the site:

- **Parallax + Cursor-Reactive Hero**: A full-screen opening that responds to both scroll position and mouse movement, with a staggered title reveal and a hover easter egg that reveals "Domain Expansion" in Japanese.
- **Scroll Progress Indicator**: A crimson-to-cyan gradient bar fixed to the top of the viewport that tracks reading progress across the whole site.
- **3D Tilt Character Cards**: Cards that tilt toward the cursor on hover, revealing each sorcerer's technique and signature quote.
- **Cursor-Following Arc Previews**: Hovering over an arc in the homepage index floats a live thumbnail image that tracks your cursor.
- **Filterable Episode Archive**: A season filter with an animated sliding pill (Season 1 / Season 2 / All Arcs) that smoothly reflows the episode list.
- **Alternating Character Profiles**: Zig-zag, scroll-parallax profile sections for each sorcerer, with drifting background kanji and stat call-outs.
- **Lore Accordion & Curse Grade Ladder**: An expandable glossary of jujutsu terminology, plus a bar-style visualization ranking curse grades from Minor to Special.
- **Bilingual Typography**: Japanese terms and character names rendered throughout in authentic kana/kanji alongside their English translations.
- **Reusable Motion Toolkit**: A shared set of scroll-reveal, stagger, parallax, magnetic-hover, and marquee components reused across every page.
- **Responsive Navigation**: A blurred sticky header with a full-screen animated mobile menu and a giant kanji watermark.

---

## 🪜 The Process

I started by setting up a Next.js, Tailwind, and shadcn/ui foundation, then spent the first stretch of real design work on the visual identity: a near-black palette split between a crimson accent for danger and a cyan accent for Gojo's Limitless technique, paired with a bold display font (Anton) and Noto Sans JP so Japanese terms would render properly throughout the site.

With the palette and type system settled, I built a small motion toolkit — Reveal, StaggerGroup, Parallax, Magnetic, and Marquee — and used it to construct the homepage: a hero that reacts to both scroll and cursor movement, a marquee of jujutsu terminology, an introduction section, a staggered grid of sorcerer cards, and a cinematic quote band.

From there I moved on to the three deeper pages. The Characters page reuses one profile section in an alternating zig-zag layout for each sorcerer. The Episodes page needed to feel more like a database than a static list, so I added season filtering with an animated sliding pill, plus a cursor-following preview thumbnail on the homepage's arc index. The Lore page pairs an accordion glossary with a bar-style curse-grade ladder to visualize the power scale.

The biggest challenge was balancing all of that motion — parallax, 3D tilt, cursor tracking, shared layout animations — without it feeling gimmicky or hurting performance, and making sure the bilingual typography stayed legible at every screen size, from a giant background watermark down to a small inline label.

---

## 📚 What I Learned

This project pushed me further into physics-based interaction design and structured content modeling than anything I'd built before.

- **Physics-Based Interactions with Motion**: Used spring-smoothed `useMotionValue`/`useTransform` pairs to build 3D card tilt, magnetic hover, and cursor-following previews.
- **Shared Layout Animations**: Used Motion's `layoutId` to animate the active season filter pill smoothly between positions instead of just toggling classes.
- **Typed Content Modeling**: Centralized characters, arcs, seasons, and lore into typed data structures in `lib/data.ts`, so every list-driven section — cards, filters, accordions — renders from a single source of truth.
- **Bilingual Type Design**: Balanced a bold Latin display font against Noto Sans JP so kana and kanji render crisply at both large watermark sizes and small inline labels.
- **Building a Reusable Motion Toolkit**: Abstracted scroll-reveal, stagger, parallax, and marquee patterns into one shared file instead of duplicating animation logic per component.
- **Scroll-Linked UI Feedback**: Combined a global scroll progress bar with per-section scroll-triggered reveals to keep the site feeling connected as you scroll.

---

## 🔧 How Can It Be Improved?

- Add an ESLint config — the `lint` script (`eslint .`) is already wired up in `package.json`, but there's no `eslint.config.*` file yet, so it currently has nothing to run against.
- Wire up the existing shadcn/ui `Button` component and `lucide-react` icons — both are already installed, but every CTA and nav link is still a hand-styled anchor/`Link` tag.
- Add real image optimization — `next.config.mjs` currently disables it entirely (`images.unoptimized: true`).
- Re-enable TypeScript build error checking instead of `ignoreBuildErrors: true` in `next.config.mjs`.
- Add `prefers-reduced-motion` support, since nearly every section relies on parallax, tilt, or cursor-tracked motion.
- Move the curse-grade data on the Lore page into `lib/data.ts` alongside the rest of the content, for consistency.
- Add custom not-found and error pages, plus a sitemap and `robots.txt`, for better SEO and smoother handling of invalid routes.
- Add automated tests, since the project currently has none.

---

## 🚀 Running the Project

### Step 1 — Clone the Repository

```bash
git clone https://github.com/<your-username>/jujutsu-kaisen-fan-site.git
cd jujutsu-kaisen-fan-site
```

---

### Step 2 — Install Dependencies

**Prerequisites:** Node.js 20.9+ (required by Next.js 16)

```bash
pnpm install
```

*(`npm install` also works, but the project ships with a `pnpm-lock.yaml`, so pnpm is recommended.)*

---

### Step 3 — Run the Development Server

```bash
pnpm dev
```

---

### Step 4 — Open the Application

Open the address shown in your terminal (usually):

```
http://localhost:3000
```

---

## 🎥 Video



https://github.com/user-attachments/assets/002ba036-90e2-4a0e-a21b-7c83ace19e07



---
