# Raising Star Africa — Design System

A design system reconstructed from **raisingstarafrica.org**, the website of the **Raising Star Africa Foundation** — a Nigerian non-governmental organization founded in 2020 by Michael Showunmi to *support, empower and inspire quality education and life skills among differently-abled and less privileged children across Africa.*

The foundation works across three focus areas — **Educational Inclusion**, **Vocational Empowerment**, and **Disability Awareness & Advocacy** — and has reached over 15,000 children.

## Sources used
- **Live site:** https://www.raisingstarafrica.org/ (WordPress + Elementor 4.0.3)
- **Attached archive:** `raisingstarafrica-archive/` — 25 page markdown files (`pages/`), 38 images (`images/`), 11 PDF reports (`documents/`), plus the archive's own `DESIGN.md`.
- No source code / component library exists — the site is a rendered WordPress theme. Components here are an **authored standard set** adapted to the brand (see *Components*), not a copy of a source inventory.

> ⚠️ **Palette correction:** the archive's `DESIGN.md` listed a blue/orange palette (#0066CC / #FF6B35). That is **not** the real brand — it was an assumption in that file. The true palette was sampled directly from the logo: **teal, green, gold, brown**. This system uses the real, logo-derived colors.

---

## CONTENT FUNDAMENTALS
How Raising Star Africa writes:

- **Voice:** warm, hopeful, plain-spoken and dignifying. Never pitying. The framing is *fairness and opportunity*, not charity-as-rescue. Example: "Inclusive education is not about special treatment. It is about fairness."
- **Person-first, dignifying language:** "differently-abled and less privileged children" is the consistent phrase. "Children with disabilities," not "disabled kids."
- **Pronouns:** "**we**" = the foundation and its work; "**you**" = the reader, invited to act ("We invite you to be a part of this change").
- **Sentences:** short and declarative, often building to a one-line moral. "When every child learns, the whole community grows." / "No child should be left behind."
- **Casing:** Title Case for section headings and nav; sentence case for body. Eyebrow kickers are UPPERCASE with wide tracking.
- **Numbers as proof:** "over 15,000 children," "founded in 2020" — concrete, modest, never inflated.
- **CTAs:** verb-first and few — *Donate*, *Volunteer*, *Read More*, *View project*, *Sign Me Up*.
- **Emoji:** none. Not part of the brand.

---

## VISUAL FOUNDATIONS

- **Colors** (sampled from the logo): **Teal `#2DB8C9`** (the ring of people) is primary; **Green `#5FA03C`** (the map of Africa) is secondary; **Gold `#F2C744`** (the star) is the accent used for the Donate CTA and eyebrow ticks; **Brown `#9A7B6B`** (the wordmark) is a warm neutral. Neutrals are warm-grey (ink `#26312F`, surface `#F5F8F7`). Max 1–2 background colors per view: white and the pale `--rsa-surface`.
- **Type:** *Playfair Display* for display/section titles and card headings (warm, editorial serif); *Montserrat* for eyebrow labels, nav, buttons and UI; *Poppins* for body copy. See the font substitution note below.
- **Backgrounds:** photography-forward. Hero and section-break bands are full-bleed photos of children/classrooms under a **teal→green diagonal gradient overlay** (`linear-gradient(120deg, rgba(23,120,133,.94), rgba(77,133,49,.86))`). No hand-drawn illustration, no texture/pattern, no noise. Imagery is **warm and candid** — real program photos, natural light, full color (never b&w or heavily filtered).
- **Gradients:** used only as photo overlays for text legibility — never as decorative button/background gradients. No bluish-purple gradients.
- **Corner radii:** soft but not pill-round for surfaces — cards `16px` (`--radius-lg`), inputs `10px`. **Buttons are fully pill-shaped** (`--radius-pill`). Badges are pills.
- **Cards:** white surface, `1px` warm-grey border, soft shadow (`--shadow-sm`), `16px` radius. On hover they **lift 4px** and deepen to `--shadow-lg`; cover images scale to `1.05`.
- **Shadows:** soft, warm-neutral, low-spread (`rgba(38,49,47,…)`). A special **teal glow** (`--shadow-teal`) sits under primary buttons.
- **Buttons:** pill, Montserrat bold. Primary = teal with teal glow; secondary = green; **donate = gold** with a gold glow; outline & ghost for low emphasis. Press = `scale(0.97)`; hover deepens color.
- **Eyebrow motif:** section headers open with an UPPERCASE teal kicker preceded by a short **gold tick** (a 22×2px bar) — a recurring signature.
- **Animation:** restrained. Fades and short 140–400ms ease-out transitions (`--ease-out`), hero cross-fades every 5s. No bounces, no parallax beyond an optional fixed-attachment CTA band.
- **Hover states:** links darken toward `--color-primary-active`; cards lift; nav items shift to teal. **Press:** subtle scale-down.
- **Layout:** `1200px` max container, `720px` content measure, generous `64–96px` section rhythm.
- **Transparency/blur:** used sparingly — semi-transparent white text over photo overlays; no glassmorphism/backdrop-blur.

---

## ICONOGRAPHY
- The live site is WordPress + **Elementor**, which ships **Font Awesome** SVG icons (`e_font_icon_svg`). We do **not** have those assets, so line icons here are a close **Lucide-style** set hand-inlined in `ui_kits/website/icons.jsx` (1.9–2px stroke, rounded caps) — **flagged as a substitution**. Social marks (Facebook, X, Instagram, LinkedIn) are simple brand glyphs in the same file.
- **No icon font, sprite, or SVG icon set was present in the archive to copy.** If you have the site's Font Awesome selection, drop it in and swap `icons.jsx`.
- **Emoji:** never used. **Unicode symbols:** only the Naira sign `₦` and `©` appear as text.
- **Photography is the primary visual language**, not icons — icons play a small supporting role (contact rows, focus-area chips, nav chevrons).

---

## Foundations at a glance
| Concern | Where |
|---|---|
| Colors, ramps, neutrals/semantic | `tokens/colors.css` + `guidelines/colors-*.html` |
| Type families, scale, weights | `tokens/typography.css` + `guidelines/type-*.html` |
| Spacing, radii, shadows, motion | `tokens/spacing.css` + `guidelines/spacing-*.html` |
| Fonts (Google Fonts) | `tokens/fonts.css` |
| Base resets + link colors | `tokens/base.css` |
| Brand logo & voice | `guidelines/brand-*.html` |

## Components (`components/`)
Authored standard set adapted to the brand (no source library existed):
- **forms/** — `Button` (primary/secondary/donate/outline/ghost), `Input`, `Checkbox`
- **content/** — `Card`, `Badge`, `SectionHeading`, `StatCard`, `ProgramCard`

Each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md`, and a directory `@dsCard` demo. Consume via `window.RaisingStarAfricaDesignSystem_bbbbd8`.

### Intentional additions
- `StatCard`, `ProgramCard`, `SectionHeading` — brand-specific compositions that recur across the real site (impact numbers, program/project/blog cards, the eyebrow+title section opener). Added because they are the site's actual repeating patterns, not generic primitives.

## UI kit (`ui_kits/website/`)
Interactive recreation of the marketing site: **Home** (hero slider, focus areas, about, projects, change CTA, blog, partners), **About**, **Programs**, **Donate** (working amount picker + form). `index.html` is the click-through entry; navigate via the header. Also registered as a Starting Point.

## Assets (`assets/`)
Real logo (`logo.png`), favicon emblem, hero/program photos (`photos/`), and partner logos (`partners/`). All copied from the archive — **no marks were drawn or invented**.

---

## Font substitution — action needed
The site declares Google Fonts via Elementor but the archive did not include the exact family list. **Playfair Display / Montserrat / Poppins** are brand-appropriate, confident matches (warm serif display + clean sans), loaded from Google Fonts in `tokens/fonts.css`. **If you can share the site's real font choices, I'll swap them in.**

## Index / manifest
- `styles.css` — global entry (import-only); links all tokens + base.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/forms/`, `components/content/` — primitives + demo cards
- `ui_kits/website/` — the marketing site recreation
- `assets/` — logos, photos, partner logos
- `SKILL.md` — Agent-Skill entry point
- `thumbnail.html` — homepage tile
