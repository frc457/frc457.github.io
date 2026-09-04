# frc457.github.io

Website for **FRC Team 457 — The Grease Monkeys**, South San Antonio High School.

Live at **https://frc457.github.io/**

---

## How to make changes

Most edits can be done right here on GitHub — no software to install. After you commit,
the live site updates in about a minute (refresh with Ctrl+Shift+R if you don't see it).

### 1. Editing text

1. Click the file you want to change (see the map below).
2. Click the pencil icon (**Edit this file**).
3. Change the text between the quote marks — leave the quotes, commas, and brackets alone.
4. Scroll down, write a short note like "Updated 2026 recap", click **Commit changes**.

### 2. Adding a photo

1. Open the `uploads` folder → **Add file → Upload files** → drag your photo in → **Commit changes**.
2. Note the exact filename you uploaded (e.g. `robot-2027.jpg`).
3. Edit the matching data file and set the photo path, for example:

   ```js
   photoUrl: "uploads/robot-2027.jpg",
   ```

Use normal photos (`.jpg` or `.png`). Keep filenames simple — no spaces.

### 3. Linking a Google Photos album

Add or edit the `albumUrl` line on a robot entry so the photo becomes a clickable link:

```js
albumUrl: "https://photos.app.goo.gl/xxxxxxxx",
```

---

## Where things live

| What you want to change | File to edit |
| --- | --- |
| Robot names, season recaps, awards, robot photos, album links | `data/robots-data.js` |
| Sponsors and sponsor tiers | `data/sponsors-data.js` |
| Home page banner, intro, contact info, sponsor logo grid | `Home.dc.html` |
| Weekly season updates | `Updates.dc.html` |
| Team history, mission/vision, "What We Do" | `AboutUs.dc.html` |
| Outreach sections and impact numbers | `Outreach.dc.html` |
| Google Calendar embed | `Calendar.dc.html` |
| Sponsor page copy and tiers | `Sponsors.dc.html` |
| Top navigation links | `NavHeader.dc.html` |
| Footer and social media links | `SiteFooter.dc.html` |
| Photos | `uploads/` |

Leave these alone unless you know what you're doing:

- `_ds/` — the team design system (fonts, colors, components)
- `support.js`, `image-slot.js` — site machinery
- `.nojekyll` — required, or the `_ds` folder stops loading and the site breaks
- `index.html` — sends visitors to the home page

---

## Rules of thumb

- **One change at a time.** Commit, check the live site, then do the next one.
- **Don't delete punctuation.** In the `data/*.js` files, every entry needs its quotes,
  commas, and curly braces. If the page goes blank, a punctuation mark is usually missing.
- **Broke something?** Go to the repo's **Commits** tab, open the last good commit,
  and copy the old text back in. Nothing is ever really lost.
- **Photos must be uploaded.** A photo only shows on the live site if the file is in
  `uploads/` and its path is written into the matching data file.

---

## Branding reminders

- Team colors only: white, royal blue (`#305cde`), black, gunmetal grey (`#909090`).
- Team numerals **457** on their own use the A4 Speed font.
- Always thank sponsors by name.
- Write like students, as "we" and "our team" — not like a corporation.
