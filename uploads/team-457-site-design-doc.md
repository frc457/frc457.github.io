# Team 457 "Grease Monkeys" — Site Structure & Content Plan

**Purpose of this document:** This describes the structure, pages, and content plan for the team's new website (a static site to be built on GitHub Pages). It's meant to give a clear picture of what the site should contain and how it should be organized before a visual design plan is built on top of it.

**A key goal for this build:** the site needs to be easy for high school students to keep updated going forward — simple, clean URLs, and a content structure that lets students add new robots, sponsors, and updates without needing deep technical knowledge.

---

## 1. Team Basics

- **Team:** FRC Team 457, "The Grease Monkeys"
- **School:** South San Antonio High School, San Antonio, TX
- **Founded:** 1999, by physics teacher Mike Henry
- **History:** First team in the San Antonio area to compete at FIRST Robotics Competition (2000). Currently in their 26th year.
- **Season structure:**
  - Competition season: January–April. Two District Competitions, then State/Worlds if they qualify.
  - Off-season: August–December. Practice, robot design improvements, offseason events, field trips, and community outreach.
- **Contact email:** frcteam457@gmail.com
- **Social/external links (should appear in header/footer sitewide):**
  - Instagram: https://www.instagram.com/frc457/
  - YouTube: https://www.youtube.com/channel/UCdkcCzay1GXza02l9AUsHuQ
  - GitHub: https://github.com/frc457
  - The Blue Alliance: https://www.thebluealliance.com/team/457

---

## 2. Site Map / Navigation

**Team logo:** a team logo (to be provided later) should have a consistent presence in the nav bar across every page.

| Label | URL |
|---|---|
| Home | `/` |
| 2026 - REBUILT | `/updates` |
| Our Team | `/roster` |
| Our Robots | `/robots` |
| Sponsors | `/sponsors` |
| Impact/Outreach | `/our-impact` |
| Support Us | `/contact` |

The "2026 - REBUILT" nav item links to a page describing the current year's game and the robot the team is building for that season (progress updates, design details, etc.) — distinct from the "Our Robots" archive page, which covers past seasons after they're complete.

---

## 3. Page-by-Page Content Plan

### 3.1 Home (`/`)
**Purpose:** Landing page / team intro.

Content blocks, top to bottom:
1. Header/hero: team name "FRC Team 457 — The Grease Monkeys," school name, city/state, a team photo (should be easy for a student to swap out each year for a new team photo)
2. Sponsor logo strip — thank-you to sponsors, flat grid of logos
3. Weekly/season update section — a short, regularly-refreshed recap of where the team is in the current season (should be easy for a student to update; consider linking through to the fuller `/updates` page)
4. A short "What is FRC" explainer paragraph, plus the official FIRST Robotics logo
5. Footer: email link, social icons (Instagram, YouTube, GitHub, The Blue Alliance)

---

### 3.2 Our Team (`/roster`)
**Purpose:** Team history/about page, plus an actual team roster.

Content blocks:
1. Page title "All About Us" → "Our History"
2. Founding history paragraph (1999, Mike Henry, 2000 first competition, 26th year)
3. Program goals/mission sub-block: self-confidence, technical/non-technical skills, intro to engineering/manufacturing/programming, leadership, teambuilding, communication, mentorship
4. Season structure paragraph (competition season Jan–Apr, district competitions, State/Worlds path)
5. Off-season paragraph (Aug–Dec, practice, offseason events, field trips, outreach)
6. A real roster section — students, mentors, and officers, since the nav label is "Our Team"

---

### 3.3 Our Robots (`/robots`)
**Purpose:** Robot history archive, one entry per competition year, reverse chronological.

Structure is a repeating card/section per robot:
- Robot name + year + game name (heading)
- 1–2 sentence result summary (district rank, points earned, whether they reached District Championship)
- Awards won (if any), with which event
- One photo per robot, with room for a small embedded gallery per robot rather than an external link

Entries to include:

| Year | Robot Name | Game | Result | Award |
|---|---|---|---|---|
| 2026 | PUNCH | REBUILT | Ranked #58 district, 114 points, competed at FIRST in Texas District Championship | Industrial Design (Week 2 San Antonio Event) |
| 2025 | ChrisTina | REEFSCAPE | Ranked #30 district, 179 points, competed at District Championship | Judge's Award (Week 2 Belton Event) |
| 2024 | Crash Jr. | CRESCENDO | Ranked #117, 36 points | None |
| 2023 | Patrick | CHARGED UP | Ranked #160, 14.00 district points | None |

**Build consideration:** This should be a data-driven/repeatable component (e.g., one JSON/YAML entry per robot, rendered through a shared template) rather than hand-coded per-robot HTML — this keeps it easy for a student to add a new robot each year by filling in a simple data entry instead of writing new page markup.

---

### 3.4 Sponsors (`/sponsors`)
**Purpose:** Sponsor recognition, organized clearly by tier.

Content blocks:
1. Page title "Our Sponsors" + welcome line
2. Tier list up top: sponsors grouped by tier (e.g., Platinum, Silver), each listing sponsor names
3. Individual sponsor write-ups below (or integrated into the tier list), each with a logo and a short paragraph, applied consistently across all sponsors including ones that don't currently have a write-up or logo

**Build consideration:** Sponsors should be a data-driven list (name, logo, blurb, tier), sorted/grouped by tier, with tier styling (e.g., higher tier vs. lower tier visual treatment) applied consistently — a simple data entry per sponsor keeps this easy for a student to update each year. The actual sponsor list and tier assignments are expected to change before launch, so the sponsor data should be trivial to swap out.

---

### 3.5 Impact/Outreach (`/our-impact`)
**Purpose:** Community outreach mission, event listing, and recap stories.

Content blocks:
1. Page title "Team Impact/Outreach"
2. Mission paragraph: STEM opportunities for the community, recognition by South San ISD board for FIRST/community service dedication
3. General outreach description: robot demos at college fairs, manufacturing events, school/district STEM events, outreach at schools/businesses/trade shows, mentoring newer FIRST teams
4. A running list of planned outreach events for the season, e.g.:
   - Manufacturing Day
   - NTX/STEMGals Tournament Of Robots
   - Texas State University AITP Symposium (San Marcos, TX)
   - San Antonio Hispanic Chamber Of Commerce CORE4
   - South Central Texas Manufacturing Trade Show & Conference
   - St. Phillip's Science Extravaganza
5. A list of aspirational/stretch-goal outreach events the team wants to grow into, e.g.:
   - SSAHS Prep Day Recruiting
   - Hosting multiple teams for the FRC Kick-Off
   - Texas A&M at Kingsville Engineering Design Expo
   - FIRST LEGO League Introductory Camp for elementary students in SSAISD
6. Outreach recap stories — short posts recapping specific events, each with a photo (e.g., a visit to an elementary school for a STEM night with the team's demo bot). This should be a repeatable, addable format, similar to a lightweight blog, so students can keep adding recaps over time.

**Build consideration:** Separate the evergreen mission statement, the structured event list (with dates/status: planned vs. aspirational vs. completed), and the recap stories into distinct, easily-updatable pieces rather than one long block of text.

---

### 3.6 Support Us (`/contact`)
**Purpose:** Hub page for the three ways to support the team.

Content blocks:
1. "Support the Grease Monkeys" / "Invest in the Future" intro — students pursuing STEM futures, supportive district, dedicated mentors
2. Funding use statement: sponsor/donor money funds food, robot parts, team apparel, event entry fees; all funds go to the South San High School Robotics student activity account; full accounting available on request
3. Three CTA cards, each with a photo and short blurb: **Sponsor**, **Donate**, **Mentor**

---

## 4. Sitewide Content Patterns

**Repeating elements on every page:**
- Consistent nav bar
- Consistent footer: email, Instagram, YouTube, GitHub, The Blue Alliance icons

**Content types that should be structured/templated data** (so students can update them without touching page markup):
1. **Robots** — year, name, game, rank, points, awards, photos
2. **Sponsors** — name, logo, blurb, tier
3. **Outreach events** — name, date/status (planned vs. aspirational vs. completed), and optionally a recap story with photos
4. **Season/weekly updates** — short, frequently-refreshed entries, feeding both the Home page blurb and the `/updates` page

---

## 5. Out of Scope for This Document

- Visual design (colors, fonts, imagery style) — covered in the design plan step
- Mobile/responsive layout specifics
