---
name: ds-portfolio
description: Apply Joe Mancera's Bauhaus-inspired dark mode design system whenever building, styling, or reviewing a UI component for his portfolio site (joemancera.dev) — hero sections, cards, buttons, the AI command bar, nav, forms, diagrams. Use this any time the user mentions "the portfolio", "bauhaus", "dark mode dev site", or asks to build/style a component without specifying a design system — don't ask which design language to use, default to this one. Provides color tokens, typography pairing, grid/spacing rules, a circle/square/triangle shape vocabulary, motion principles, and an accessibility checklist so every component stays visually consistent without re-deriving the design language from scratch each time.
---

# Bauhaus dark UI

A dark-mode design system for Joe Mancera's portfolio, inspired by Bauhaus principles: geometric primitives (circle, square, triangle) used as functional building blocks, not decoration. The site's signature feature is an AI command bar that assembles UI components from a fixed set on request — the visual language mirrors that idea literally. Keep that narrative in mind: shapes represent construction, not ornament.

## When to use this

Use this skill whenever a task involves writing or reviewing markup/CSS for any part of the portfolio: a new section, a card, a button, the command bar, a diagram, a form. If a request just says "make a card for the CMS section" with no design instructions, apply these tokens and rules by default rather than asking.

## Core rule: the risk dial

Don't apply maximum boldness everywhere. Split intensity by zone:

- **Most of the site → Level 2 (balanced)**: one functional geometric accent per section, solid color blocks limited to CTAs/accents, asymmetric layout only in the hero. Sober, legible, consistent.
- **AI command bar only → Level 3 (bold)**: this is the one place to spend visual risk. Shapes animate and "assemble" when the router renders a component; typography can be larger and overlap shapes here.
- Never apply Level 3 treatment broadly — if everything is loud, nothing reads as the signature moment.

When unsure whether something is "too flat" or "too busy", default to flatter/quieter. Removing visual noise later is easy; un-cluttering a shipped, busy component is not.

## Tokens

Load `assets/tokens.css` directly — it defines every variable below as CSS custom properties on `:root`. Don't re-type hex values inline; reference the variables.

| Token              | Hex       | Use                                                         |
| ------------------ | --------- | ----------------------------------------------------------- |
| `--bg-base`        | `#0B0B0D` | Page background (near-black, never pure black)              |
| `--bg-surface`     | `#1A1A1D` | Cards, elevated panels                                      |
| `--text-primary`   | `#F2F0EA` | Primary text (warm off-white, not pure white)               |
| `--text-secondary` | `#9A9A95` | Secondary text, metadata                                    |
| `--accent-red`     | `#D7261E` | Primary accent — CTAs, focus state, site's dominant color   |
| `--accent-blue`    | `#1B5FAE` | Secondary accent — links, active state                      |
| `--accent-yellow`  | `#F2B705` | Tertiary accent — small highlights only, never a large fill |
| `--line`           | `#2A2A2D` | Borders, grid lines, dividers                               |

Rule: only one accent dominates a given viewport/section. The other two appear small (an icon, a border, a dot). All three together only inside one contained mark (e.g. a logo), never spread across a layout.

No gradients, no glassmorphism, no soft blurred shadows — that's the default look of most AI-branded sites right now; flat and geometric reads as more distinct, not less modern.

## Typography

- **Display/headings** — `Space Grotesk` (weight 700 for h1/h2, 500 for h3). Geometric sans, carries the Bauhaus character.
- **Body** — `Inter` or `IBM Plex Sans`, weight 400, for readability on dark backgrounds.
- **Mono / terminal accents** — `JetBrains Mono` or `Space Mono`, used in the command bar and any code-like fragment.
- Use a modular scale (ratio 1.25 or 1.333) instead of arbitrary sizes — keep the system mathematical, not improvised.
- All text is sentence case. No title case, no all-caps, including in diagram labels.

## Grid & spacing

- 12-column grid. Use it asymmetrically in the hero (e.g. text in 7/12 columns, leaving negative space for a geometric composition) — Bauhaus posters were rarely centered.
- Spacing scale, base 8px: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96.
- Corners: 0–4px radius max. No `rounded-2xl` — soft rounded corners break the Bauhaus read immediately.
- Borders: thin (1px), not soft shadows. If a shadow is used at all, make it hard-edged with an offset, never a diffuse blur.

## Shape vocabulary

Each shape has a fixed, consistent meaning — don't reassign it per component:

- **Circle** → AI / people / the organic — command bar, "running locally" indicator.
- **Square** → structure / data / CMS — CMS section, project cards.
- **Triangle** → direction / skills / growth — skills section, action CTAs.

Use these as functional markers (bullets, active-state indicators, the "seed" shape that animates when the command bar assembles a component) — not as loose decoration scattered for visual interest.

## Motion

- Animation communicates a state change; it never decorates. If nothing changed, nothing should move.
- Default transitions: 150–200ms, `ease-out`. No bounce/elastic easing — keep it sober.
- Exception: the command bar's "assembly" animation (Level 3 zone) — when the router resolves an intent, its associated shape flies in and snaps into place over 250–400ms. This is the one moment allowed extra personality.

## Accessibility checklist

- Never use a saturated accent (`--accent-red/blue/yellow`) as small body text color on a dark background — check contrast first.
- Accents belong on large surfaces (buttons, blocks) or icons, not on long text runs.
- Minimum contrast: 4.5:1 for body text, 3:1 for large headings — verify before shipping any new color pairing.
- Command bar must be fully keyboard-operable; announce result changes via `aria-live`.

## Reference

- `assets/tokens.css` — copy-paste-ready CSS custom properties for every token above. Import this once at the project root rather than redefining values per component.
