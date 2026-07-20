# PlanMove × MOMO — Landing Page

## Product
Single-page landing site for **PlanMove** (business) marketing **MOMO** (AI product) — a voice-driven assistant that generates offers/invoices and handles communication for Swiss cleaning (Reinigung) and moving (Umzug) SMEs.

## Original Problem Statement
Build a high-converting, single-page application (SPA) landing website. Strict Hook-Story-Offer framework. Premium, minimalist, Awwwards-level design ($100K custom-coded feel). Primary accent: WhatsApp Green (#25D366). All conversion points lead to a WhatsApp CTA button. Sections: Hero, TrustBar, 7 Problems (alternating 2-col grid), Testimonials, Final CTA, Massive Footer. Language: German. Target audience: Swiss cleaning + moving companies.

## Architecture
```
/app/frontend/src/
├── components/
│   ├── CardVisuals.jsx       (legacy abstract visuals — no longer used, ClimaxCard uses its own inline visual)
│   ├── Logo.jsx
│   ├── PhoneMockup.jsx
│   ├── Reveal.jsx            (IntersectionObserver-based scroll fade-in)
│   ├── RevealText.jsx
│   └── WhatsAppButton.jsx
├── lib/
│   └── constants.js          (BRAND, WHATSAPP_URL, IMG.problems photo list)
├── pages/
│   └── Landing.jsx
├── sections/
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Header.jsx            (fixed, solid white on scroll — no backdrop-filter)
│   ├── Hero.jsx              (Swiss chip + Mehr Kunden/Zeit/Geld/Weniger Stress)
│   ├── Problems.jsx          (2-col alternating grid w/ realistic photos + climax card 07)
│   ├── Testimonials.jsx
│   └── TrustBar.jsx
├── App.js
└── index.css                 (Tailwind + CSS vars, content-visibility optimization)
```

Stack: React 18 · Tailwind CSS · framer-motion (mount animations only) · lucide-react · IntersectionObserver via `Reveal`.

## Design Language
- **Accent**: WhatsApp Green `#25D366` / hover `#168222`
- **Bg**: Warm bone `#F5F4EF`; sections alternate white / bone / dark `#0A0A0A` (footer)
- **Fonts**: Outfit (display) · Manrope (body) · JetBrains Mono (labels)
- **CTA strategy**: 4 identical `WhatsAppButton` instances (header, hero, final CTA, footer). No forms.

---

## Implementation History

### 2026-07-20 — Iteration 5 (Msg after 354 — big visual overhaul + language switcher)
- **NEW `LanguageSwitcher.jsx`**: slick pill dropdown in Header showing DE (Swiss cross), FR, IT flags. UI-only (no functional i18n yet). Persists selection to `localStorage['pm_lang']`. Closes on ESC / outside-click. Responsive.
- **NEW `HeroVisual.jsx`**: replaces `PhoneMockup` in Hero. Photo canvas (Pexels 3184296) + 3 floating chat cards on right ("Neue Anfrage 23:47", "WhatsApp Nachricht", "E-Mail von Herr Müller") + bottom-right "MOMO hat geantwortet · Professionell. Schnell. Automatisch." confirmation card + MOMO pill badge on photo. Matches user's mockup composition.
- **Hero rewrite**:
  - Tagline color changed from black to **blue `#0047ff`**, uppercase + `text-[13px] md:text-[15px]` (smaller, tighter tracking)
  - Added **Google Review chip** — inline Google G SVG + 5 green stars (same Star icon as Testimonials) + `4.9/5 · 120+ Bewertungen`
  - All benefit-list ticks converted from outline (`bg-[#25D366]/15 text-[#1EB955]`) to **filled** (`bg-[#25D366] text-white`) — matching Card 07 style
  - Swiss flag Plus icon kept thick (3px bars)
- **Problems section restructured** (major refactor):
  - Was: alternating 2-col grid with side-by-side image/text.
  - Now: **3-column grid** (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`), each card is **image-top / text-bottom** with aspect-16/11 image + green circular **number badge** (1-6) in top-left.
  - Headlines highlight key words in green (e.g. *unbeantwortete*, *Deutsch*, *Büroarbeit*).
  - Cards `items-stretch` → uniform row heights.
- **Card 07 restructured** to match mockup 1-to-1:
  - LEFT (col-4): photo with big SVG **green X overlay** + "7" number badge
  - MIDDLE (col-5): "Vergessen Sie **Papierkram**…" heading + subhead + 4 voice-command pills (each in bone-colored pill with filled green tick + italic quote)
  - RIGHT (col-3): dark rounded square with **Bot mascot** (green glow radial) + "MOMO erledigt den Rest." + 7 filled-tick services checklist + "Die MOMO-Magie" label
- **Testing**: `testing_agent_v3_fork` iteration 5 → **100% pass** (22 checks, 0 bugs, 0 console errors, no horizontal overflow at 1920/768/390).

### 2026-07-20 — Iteration 4 (Msg 354 batch)
- **Hero**: reduced desktop top-padding `pt-40 → pt-28` (higher above the fold); removed "Antwort innerhalb weniger Minuten" span; thickened Swiss flag plus bars from 2px → 3px.
- **TrustBar**: mobile icon circles enlarged `h-8 w-8 → h-10 w-10`; icons `h-4 w-4`; label `text-[11px]`.
- **Footer**: removed "100% Swiss Made" from copyright — now just `© 2026 MOMO`.
- **Problems**: refactored `ProblemCard` visual from abstract dark UI compositions (`CARD_VISUALS`) to **realistic photos** with floating tag chip overlay (`NN • TAG`); enforced row-consistent card heights via `items-stretch` + `min-h-[440px]`; typography bumped `text-[36px]` on desktop.
- **Constants**: swapped `IMG.problems` to 6 realistic Pexels editorial photos matching each problem theme.
- **Performance**: removed `backdrop-blur-xl` from fixed Header (major scroll-lag cause) → solid `bg-white` on scroll; throttled scroll handler with `requestAnimationFrame`; added `content-visibility: auto` + `contain-intrinsic-size: 1px 480px` on `.pm-card`.

### Prior iterations
- 2-column alternating Problems grid (no sticky stack)
- Testimonials section (3 cards)
- Removed mobile hamburger menu (persistent WhatsApp CTA)
- Rebrand: PlanMove (business) + MOMO (product)
- Premium slide-fill WhatsAppButton
- IntersectionObserver-based `Reveal` for scroll fade-ins

---

## Testing Status
- **Iteration 4 report**: `/app/test_reports/iteration_4.json` — 11/13 pass initially, both mediums fixed:
  - TrustBar mobile icons → **40×40px verified** ✓
  - Problem card row heights → **≤12px variance within a row, ≤42px between rows** (down from 100px) ✓
- No console errors; no horizontal overflow at 1920 / 768 / 390 viewports.

## Backlog / Future Enhancements
- **P2**: Optional — swap "Kunden nachfassen" logic on Testimonials to A/B test rotating quotes
- **P2**: Add hover parallax on Problem card photos (subtle 3-5px scale on hover)
- **P2**: SEO — Open Graph tags + JSON-LD LocalBusiness schema for PlanMove
- **P2**: Cookie/GDPR banner (currently missing — required for CH/EU launch)
- **P3**: Real user testimonial photos from portrait shoots (Unsplash placeholders in use)
- **P3**: Contact form fallback for users who don't use WhatsApp

## Environment
- No backend used (static SPA). MongoDB present but unused.
- All CTAs → `WHATSAPP_URL = wa.me/41780000000?text=...` (placeholder Swiss number)

## Credentials
N/A — no auth in this project.
