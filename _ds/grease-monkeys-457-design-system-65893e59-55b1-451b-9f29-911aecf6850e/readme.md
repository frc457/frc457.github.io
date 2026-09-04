# Grease Monkeys — FRC Team 457 Design System

**South San Antonio High School Team 457, "The Grease Monkeys"** (San Antonio, TX) — a FIRST Robotics Competition team established 1999. This system captures their branding standards for use across team materials: the website, a scouting/pit companion app, sponsor-facing collateral, and slide decks.

**Sources**
- `uploads/457 Branding Standards.docx` — the team's official branding guide (name/nickname rules, logo usage, color palette, fonts, apparel/uniform rules, sponsor thanks).
- `uploads/grease_monkey_logo_*` — official logo files (full color, blue-background, white).
- Current live site for visual/structural reference: https://frcteam457.wixsite.com/team-457 (nav: Home, 2026 - REBUILT, Our Team, Our Robots, Sponsors, Impact/Outreach, Support Us).
- `uploads/A4SPEED-Bold.ttf` — the team's numeral display font (user-provided).

No existing app codebase or Figma file was provided, so components below are a from-scratch standard set sized to the team's needs (see "Intentional additions").

## Index
- `styles.css` + `tokens/` — colors, typography, spacing (import this one file to use the system)
- `assets/logos/` — official logo files; `assets/fonts/` — Lexend, Roboto, Montserrat, Montserrat Medium, A4 Speed
- `guidelines/` — foundation specimen cards (Design System tab: Colors, Type, Spacing, Brand)
- `components/core/` — Button, IconButton, Badge, Tag, Card
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/navigation/` — Tabs
- `components/feedback/` — Dialog, Tooltip
- `ui_kits/website/` — team website recreation (home, roster, sponsors)
- `ui_kits/scouting/` — competition scouting/pit app
- `ui_kits/sponsor/` — sponsor one-pager / media kit
- `templates/pitch-deck/` — sponsor pitch slide template (Title, Impact stats, Quote, Sponsorship Tiers, Closing)
- `SKILL.md` — Claude Code-compatible skill wrapper

## Components
Badge, Button, Card, IconButton, Tag (`components/core/`) · Input, Select, Checkbox, Radio, Switch (`components/forms/`) · Tabs (`components/navigation/`) · Dialog, Tooltip (`components/feedback/`)

### Intentional additions
No component library source was provided, so the standard primitive set (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Tooltip) was authored from the branding doc's colors/type/logo rules rather than copied from an existing UI.

## Content fundamentals
- **Voice**: earnest, team-first, student-run. Copy speaks as "we"/"our team," never corporate. Example from the team's own site update: *"Our Monkeys made progress!"* and *"we still made achievement's, such as, our Industrial Design award."* Keep small imperfections like this in mind — the real voice is unpolished, enthusiastic, written by students, not a marketing department. Don't over-correct grammar into stiff corporate copy.
- **Formality**: official name — "South San Antonio High School Team 457 - The Grease Monkeys" — appears only in formal documents (sponsor letters, branding docs). Everyday copy uses nicknames: "457," "Team 457," "The Grease Monkeys," "Grease Monkey Robotics." Prefer nicknames on-screen.
- **Emoji**: not used in official branding docs; the live site uses occasional excited punctuation ("!!!") instead.
- **Numbers/stats**: sparse and concrete (member counts, years established) rather than heavy data displays — a scouting app is the one surface where dense stats belong.
- **Sponsors**: always thanked by name, grouped together, never minimized — sponsor recognition is a first-class content type (see Sponsors section of the site and one-pager).
- **Season framing**: each FRC season has a game name that becomes a mini sub-brand (e.g. "2024-2025 REEFSCAPE," "2026 - REBUILT") — season names get called out in headers/badges, distinct from the evergreen team brand.

## Visual foundations
- **Color**: strict tetracolor — White `#ffffff`, Royal Blue `#305cde`, Black `#000000`, Gunmetal Grey `#909090`. Per the branding doc, "No secondary colors should be used unless it is used to enhance the tetracolor branding" — no green/orange/purple accents. Semantic colors (success/warning/danger) are used sparingly and only for small system UI (status badges), never decoratively.
- **Backgrounds**: flat solid fields only — white (default), royal blue, or black. No gradients ("the logo may be used on gradients if the gradient is not severe enough to block the logo" — gradients are tolerated behind the mark, not prescribed as a motif), no textures, no photographic overlays behind type.
- **Type**: three-tier system. Titles set in Lexend Bold 24–30pt; headings in Roboto Bold 16–20pt; body copy in Montserrat Medium 10–12pt. Team numerals (457, standalone) always use the condensed italic display face A4 Speed — never substituted, per the branding doc. This creates a clear hierarchy: Lexend for big/rare moments, Roboto for structure, Montserrat Medium for reading, A4 Speed exclusively for the number.
- **Logo containment**: keep a clear area around the mark — no type, photos, or textured backgrounds crossing into it. White background preferred; blue or black backgrounds are for apparel/social. On blue, the logo's outline is white; on black, there is no outline. Grayscale documents use the dedicated black or white logo files, never a desaturated color file.
- **Shape language**: the wrench-and-monkey mark is bold, thick-outlined, high contrast — components echo this with thick (3px) borders on primary buttons/cards rather than soft drop shadows, and fairly restrained corner radii (4–8px, never fully rounded/pill except true pill contexts like Badge and Switch).
- **Borders & shadows**: black or brand-blue 1.5–3px outlines carry more visual weight than shadow; shadows are light and only for elevation (dialogs, hover cards) — `--shadow-sm`/`--shadow-md`/`--shadow-lg`.
- **Hover/press**: hover brightens fill slightly (brightness filter) rather than shifting hue; press scales buttons down slightly (~0.97). No bounce/elastic easing — motion uses a standard ease-out curve, fast (120–180ms).
- **Animation**: minimal. Fades and simple transform transitions only; nothing playful/bouncy — matches the disciplined, standards-driven tone of the branding doc.
- **Imagery**: warm, on-the-ground event/shop photography (team photos, competition floor) rather than staged studio shots — see the live site's hero image. No stock photography, no black-and-white filters, no heavy grain.
- **Corner radii**: `--radius-sm` 4px (inputs, buttons), `--radius-md` 8px (cards), `--radius-lg` 14px (large panels/modals), `--radius-pill` for chips/switches.
- **Layout**: simple stacked sections (site is a single scrolling Wix page: hero → sponsors → weekly update → FRC blurb → footer). No fixed/sticky chrome beyond a basic top nav.
- **Transparency/blur**: none observed or implied by the brand; avoid glassmorphism.

## Iconography
No icon system, sprite, or icon font was provided in the branding materials. Simple line icons (close, check, link, chevrons) are drawn inline as small stroked SVGs matching the mark's line weight — kept minimal and functional only (UI chrome), never decorative. For a fuller icon need, Lucide (stroke-based, similar weight to the logo's linework) is the recommended CDN substitute; flag any such addition as a substitution. Photography, not icons, carries most visual interest (sponsor logos, event photos).

## Font substitution note
All fonts in the branding doc were recoverable: Lexend, Roboto, and Montserrat (+ Montserrat Medium weight) shipped as embedded document fonts and were extracted as-is. A4 Speed (team numeral font) is a licensed dafont.com download the team originally didn't ship digitally — the actual `A4SPEED-Bold.ttf` was subsequently supplied by the team and is now bundled in `assets/fonts/`. No substitutions were needed.
